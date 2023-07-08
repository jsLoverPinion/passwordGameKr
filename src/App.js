import "normalize.css";
import styled from "styled-components";
import "./App.css";
import Rule from "./Rule";
import useBearStore from "./store";
import { useEffect } from "react";

function App() {
  const { value, setValue } = useBearStore();

  let rulebook = [
    {
      RuleExplanation: "첫번째 조건입니다.",
      complited: false,
      condition: () => {
        if (value.lenth >= 5) {
          console.log("인풋값 5이상이다");
        }
      },
    },
    {
      RuleExplanation: "나는 두번째조건이여 허허",
      complited: true,
      condition: () => {
        if (value.lenth >= 5) {
          console.log("인풋값 5이상이다");
        }
      },
    },
  ];

  if (value.lenth >= 5) {
    console.log("인풋값 5이상이다");
  }

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
            <Rule ruleData={data} idx={idx} />
          ))}
        </Container>
      </BackGround>
    </div>
  );
}

export default App;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
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
