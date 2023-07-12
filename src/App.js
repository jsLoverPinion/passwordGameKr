import "normalize.css";
import styled from "styled-components";
import "./App.css";
import Rule from "./components/Rule";
import useBearStore from "./store";

function App() {
  //
  const { value, setValue } = useBearStore();

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
      RuleExplanation: `비밀번호의 숫자의 합은 ${12}여야합니다`,
      condition: () =>
        Array.from(value.matchAll(/\d/g)).reduce(
          (acc, match) => acc + Number(match[0]),
          0
        ) === 12
          ? true
          : false,
    },
  ];

  const showAble2 = () => {
    let array = [true];
    let result = true;
    for (let i = 0; i <= rulebook.length - 2; i++) {
      result = result && rulebook[i].condition();
      array.push(result);
    }
    return array;
  };

  // const showAble = [
  //   //0
  //   true,
  //   //1
  //   true && rulebook[0].condition(),
  //   //2
  //   true && rulebook[0].condition() && rulebook[1].condition(),
  //   //3
  //   true &&
  //     rulebook[0].condition() &&
  //     rulebook[1].condition() &&
  //     rulebook[2].condition(),
  // ];

  return (
    <div className="App">
      <BackGround>
        <Title>🔒비밀번호 게임</Title>
        <Explanation>비밀번호를 입력해주세요</Explanation>
        <PWinput //*문제없음
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Container hight={rulebook.length * 100}>
          {rulebook.map((rule, idx) => (
            <Rule
              explanation={rule.RuleExplanation}
              condition={rule.condition}
              idx={idx}
              // show={showAble[idx]}
              show={showAble2()[idx]}
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
  color: #b1b1b1b1;
`;

const PWinput = styled.textarea`
  width: 500px;
  outline: 1px solid black;
  border-radius: 7px;
  font-size: 30px;
  padding: 10px;
  word-break: all;
`;
