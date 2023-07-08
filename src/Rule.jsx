import styled from "styled-components";
import imgObj from "./data/img";
import useBearStore from "./store";
// import rulebook from "./data/ruleBook";

const { value, setValue } = useBearStore;

let rulebook = [
  {
    oreder: 1,
    RuleExplanation: "비밀번호는 5글자 이상이여야합니다",
    complited: false,
    condition: () => {
      if (value.lenth >= 5) {
        console.log("인풋값 5이상이다");
      }
    },
  },
];

const Rule = () => {
  return (
    <>
      <Container>
        <Bulean>
          {imgObj.x()}
          <RuleNumber>조건1</RuleNumber>
        </Bulean>
        <RuleExplanation>비밀번호는 5글자 이상이여야합니다.</RuleExplanation>
      </Container>
    </>
  );
};

export default Rule;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 7px;
  outline: #d10000 1px solid;
  background-color: #ffecec;
  justify-content: start;
  display: flex;
  flex-flow: wrap;
`;

const Bulean = styled.div`
  width: 100%;
  height: 40%;
  background-color: #ffc7c7;
  border-radius: 7px 7px 0px 0px;
  display: flex;
  align-items: center;
`;

const RuleNumber = styled.p``;

const RuleExplanation = styled.p`
  margin: 10px;
`;
