import useBearStore from "../store";

function myf(params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { value, setValue } = useBearStore();

  const rulebook = [
    {
      order: "5",
      RuleExplanation: "비밀번호에는 원소기호가 포함되어야합니다",
      condition: () => {},
    },
    {
      order: "4",
      RuleExplanation: "비밀번호의 숫자의 합은 12여야합니다",
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
    },
    {
      order: "1",
      RuleExplanation: "비밀번호는 8글자 이상이여야합니다.",
      condition: () => (value.length >= 8 ? true : false),
      disable: true,
    },
  ];
  return rulebook;
}

export default myf;
