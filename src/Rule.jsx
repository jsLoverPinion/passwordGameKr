import styled from "styled-components";
import imgObj from "./data/img";
import useBearStore from "./store";
// import rulebook from "./data/ruleBook";

const { value, setValue } = useBearStore;

const Rule = (props) => {
  return (
    <>
      <Container
        backcol={props.ruleData.complited === true ? "#e3ffe3" : "#ffecec"}
        outccol={props.ruleData.complited === true ? "green" : "#d10000"}
      >
        <Bulean
          backcol={props.ruleData.complited === true ? "#aef3ae" : "#ffc7c7"}
        >
          <CheckIcon>
            {props.ruleData.complited === true ? "✔️" : "❗"}
          </CheckIcon>
          <RuleNumber>{`조건${props.idx + 1}`}</RuleNumber>
        </Bulean>
        <RuleExplanation>{props.ruleData.RuleExplanation}</RuleExplanation>
      </Container>
    </>
  );
};

export default Rule;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 7px;
  outline: ${(props) => props.outccol} 1px solid;
  background-color: ${(props) => props.backcol};
  justify-content: start;
  display: flex;
  flex-flow: wrap;
  margin-top: 20px;
`;

const Bulean = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${(props) => props.backcol};
  border-radius: 7px 7px 0px 0px;
  display: flex;
  align-items: center;
`;

const RuleNumber = styled.p``;

const RuleExplanation = styled.p`
  margin: 10px;
`;

const CheckIcon = styled.p`
  margin: 10px;
`;
