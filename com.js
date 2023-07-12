const value = "dddddddddd?552";

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
  for (let i = 0; i <= array.length - 2; i++) {
    result = result && rulebook[i].condition();
    array.push(result);
  }
  return array;
};

console.log(showAble2()[0]);
