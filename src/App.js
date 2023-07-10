import "normalize.css";
import styled from "styled-components";
import "./App.css";
import Rule from "./components/Rule";
import useBearStore from "./store";
import { useEffect } from "react";

function App() {
  const { value, setValue } = useBearStore();
  const random = Math.floor(Math.random() * 11) + 10;
  const rulebook = [
    {
      order: "4",
      RuleExplanation: `비밀번호의 숫자의 합은 12여야합니다`,
      condition: () =>
        Array.from(value.matchAll(/\d/g)).reduce(
          (acc, match) => acc + Number(match[0]),
          0
        ) === 12
          ? true
          : false,
    },
    {
      order: "3",
      RuleExplanation: "비밀번호는 특수기호를 포함해야합니다.",
      condition: () => (/[\W_]/.test(value) ? true : false),
    },
    {
      order: "2",
      RuleExplanation: "비밀번호는 숫자를 포함해야합니다.",
      condition: () => (/\d/.test(value) ? true : false),
      // rulebook[this.order - 2].condition === true ? true : false,
    },
    {
      order: "1",
      RuleExplanation: "비밀번호는 8글자 이상이여야합니다.",
      condition: () => (value.length >= 8 ? true : false),
    },
  ];

  const showable = [
    rulebook[1].condition() === true ? true : false,
    rulebook[2].condition() === true ? true : false,
    rulebook[3].condition() === true ? true : false,
    true,
  ];

  useEffect(() => {
    console.log(`입력감지됨 값 = ${value}`);
  }, [value]);

  return (
    <div className="App">
      <BackGround>
        <Title>🔒비밀번호 게임</Title>
        <Explanation>비밀번호를 입력해주세요</Explanation>
        <PWinput
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Container>
          {rulebook.map((data, idx) => (
            <Rule show={showable[idx]} ruleData={data} />
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
  height: 100px;
  margin-top: 20px;
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
