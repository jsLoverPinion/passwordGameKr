import styled, { css } from "styled-components";
// import rulebook from "./data/ruleBook";

const Rule = (props) => {
  const condition = props.condition();
  return (
    <>
      <Container
        backcol={condition === true ? "#e3ffe3" : "#ffecec"}
        outcol={condition === true ? "green" : "#d10000"}
        showable={props.show === true ? "flex" : "none"}
      >
        <Bulean backcol={condition === true ? "#aef3ae" : "#ffc7c7"}>
          <CheckIcon>{condition === true ? "✔️" : "❗"}</CheckIcon>
          <RuleNumber>{`조건${props.idx + 1}`}</RuleNumber>
        </Bulean>
        <RuleExplanation>{props.explanation}</RuleExplanation>
      </Container>
    </>
  );
};

export default Rule;

interface PropsOutline {
  backcol?: string;
  outcol?: string;
  showable?: string;
}

const Container = styled.div<PropsOutline>`
  transition-duration: 0.5s;
  width: 100%;
  height: auto;
  border-radius: 7px;
  justify-content: start;
  display: flex;
  flex-flow: wrap;
  margin-top: 20px;
  box-shadow: 4px 4px 10px 1px #b1b1b1b1;
  background-color: ${(props) => props.backcol};
  outline: 1px solid ${(props) => props.outcol};
  display: ${(props) => props.showable};
`;

const Bulean = styled.div<PropsOutline>`
  transition-duration: 0.5s;
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
