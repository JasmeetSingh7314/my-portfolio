export default function textToChar(inputString: string) {
  let charArray = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) === " ") {
      charArray.push("");
    } else {
      charArray.push(inputString.charAt(i));
    }
  }
  return charArray;
}
