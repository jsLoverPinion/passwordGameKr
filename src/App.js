import "normalize.css";
import styled from "styled-components";
import "./App.css";
import Rule from "./components/Rule";
import useBearStore from "./store";
import { useEffect } from "react";

function App() {
  //
  const { value, setValue } = useBearStore();
  // setValue(localStorage.getItem("PWinput"));
  const rulebook = [
    {
      //0
      RuleExplanation: "비밀번호는 8글자 이상이여야합니다.",
      condition: () => (value.length >= 8 ? true : false),
    },
    {
      //1
      RuleExplanation: "비밀번호는 숫자를 포함해야합니다.",
      condition: () => (/\d/.test(value) ? true : false),
    },
    {
      //2
      RuleExplanation: "비밀번호는 특수기호를 포함해야합니다.",
      condition: () => (/[\W_]/.test(value) ? true : false),
    },
    {
      //3
      RuleExplanation: `비밀번호의 숫자의 합은 ${12}이상여야합니다`,
      condition: () =>
        Array.from(value.matchAll(/\d/g)).reduce(
          (acc, match) => acc + Number(match[0]),
          0
        ) >= 12
          ? true
          : false,
    },
    {
      //4
      RuleExplanation: "비밀번호는 ✔️ 을 포함해야합니다.",
      condition: () => value.includes("✔️"),
    },
    {
      //5
      RuleExplanation: "비밀번호는 현재 날자를 포함해야합니다.",
      condition: () => value.includes(`${new Date().getDate()}`),
    },
    {
      //6
      RuleExplanation: "비밀번호는 원소기호를 포함해야합니다.",
      condition: () => containsElementSymbol(),
    },
    {
      //7
      RuleExplanation: `${
        value.includes("🥚") || value.includes("🐣")
          ? "민수를 잘 부탁합니다"
          : "🥚이건 내친구 민수입니다 입력창에 보관하세요"
      }`,
      condition: () => value.includes("🥚") || value.includes("🐣"),
    },
    {
      //8
      RuleExplanation: `비밀번호는 💧 습도 30% 이상 유지해야합니다.          [현재습도:${Math.floor(
        waterDropPercent()
      )}%]`,
      condition: () => waterDropPercent() > 30,
    },
    {
      //9
      RuleExplanation: `비밀번호는 적당히 🌞  따듯해야합니다 [현재온도:${temp()}°C]`,
      condition: () => temp() === 37,
    },
    {
      //10
      RuleExplanation: `민수가 깨어났네요 미리하기 끝났습니다 감사합니다`,
      condition: () => true,
    },
  ];

  useEffect(() => {
    if (!(value.includes("🥚") || value.includes("🐣"))) return;
    console.log("폴 변신");
    const openEggValue = value.replace("🥚", "🐣");
    setValue(openEggValue);
  }, [rulebook[9].condition()]);

  function temp() {
    const valArray = [...value];
    const sunArray = valArray.filter((txt) => txt === "🌞");
    return sunArray.length;
  }

  const showAble = () => {
    let array = [true];
    let result = true;
    for (let i = 0; i <= rulebook.length - 2; i++) {
      result = result && rulebook[i].condition();
      array.push(result);
    }
    return array;
  };

  const PwOnChange = (e) => {
    setValue(e.target.value);
    // localStorage.setItem("PWinput", value);
  };

  const elementSymbols = [
    "H",
    "He",
    "Li",
    "Be",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Z",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
    "Cs",
    "Ba",
    "La",
    "Ce",
    "Pr",
    "Nd",
    "Pm",
    "Sm",
    "Eu",
    "Gd",
    "Tb",
    "Dy",
    "Ho",
    "Er",
    "T",
    "Yb",
    "Lu",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Th",
    "Pa",
    "U",
    "Np",
    "Pu",
    "Am",
    "Cm",
    "Bk",
    "Cf",
    "Es",
    "Fm",
    "Md",
    "No",
    "Lr",
    "Rf",
    "Db",
    "Sg",
    "Bh",
    "Hs",
    "Mt",
    "Ds",
    "Rg",
    "Cn",
    "Nh",
    "Fl",
    "Mc",
    "Lv",
    "Ts",
    "Og",
  ];

  const containsElementSymbol = () =>
    elementSymbols.some((symbol) => value.includes(symbol));

  function waterDropPercent() {
    const txtToArray = [...value];
    const waterDrops = txtToArray.filter((txt) => txt === "💧");
    return (100 / txtToArray.length) * waterDrops.length;
  }

  return (
    <div className="App">
      <BackGround>
        <Header>원작게임 https://neal.fun/password-game/</Header>
        <Title>🔒비밀번호 게임</Title>
        <Explanation>비밀번호를 입력해주세요</Explanation>
        <PWinput //*문제없음
          spellcheck="false"
          value={value}
          onChange={(e) => {
            PwOnChange(e);
          }}
        />
        <Explanation>우측하단드래그로 크기조절가능</Explanation>
        <Container hight={rulebook.length * 100}>
          {rulebook.map((rule, idx) => (
            <Rule
              explanation={rule.RuleExplanation}
              condition={rule.condition}
              idx={idx}
              // show={showAble[idx]}
              show={showAble()[idx]}
            />
          ))}
        </Container>
      </BackGround>
    </div>
  );
}

export default App;

const BackGround = styled.div`
  width: 100vw;
  height: 300vh;
  background-color: #fffae9;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.div`
  width: 500px;
  height: ${(props) => props.hight};
  margin-top: 20px;
  display: flex;
  flex-flow: column-reverse;
`;
const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Explanation = styled.p`
  margin: 10px;
  color: black;
`;

const PWinput = styled.textarea`
  width: 500px;
  outline: 1px solid black;
  border-radius: 7px;
  font-size: 30px;
  padding: 10px;
  word-break: all;
`;

const Header = styled.p`
  width: 100%;
  height: 3px; /* footer의 높이 */
  position: absolute;
  bottom: 100;
  left: 0;
  color: #b1b1b1b1;
`;
