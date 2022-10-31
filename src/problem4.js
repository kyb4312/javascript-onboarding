/*
 * <기능 목록>
 * 1. 청개구리 사전대로 알파벳 하나를 변환하는 changeAlphabetGreenFrog() 함수.
 * 2. 청개구리 사전대로 입력받은 문자열 전체를 변환하는 changeWordGreenFrog() 함수.
 */

function problem4(word) {
  var answer;
  return answer;
}

function changeAlphabetGreenFrog(inputLetter) {
  const inputAscii = inputLetter.charCodeAt(0);
  const UPPER_FIRST = "A".charCodeAt(0);
  const UPPER_LAST = "Z".charCodeAt(0);
  const LOWER_FIRST = "a".charCodeAt(0);
  const LOWER_LAST = "z".charCodeAt(0);
  let outputAscii = 0;
  let outputLetter = "";

  if (inputAscii >= UPPER_FIRST && inputAscii <= UPPER_LAST) {
    outputAscii = UPPER_FIRST + UPPER_LAST - inputAscii;
  } else if (inputAscii >= LOWER_FIRST && inputAscii <= LOWER_LAST) {
    outputAscii = LOWER_FIRST + LOWER_LAST - inputAscii;
  } else {
    outputAscii = inputAscii;
  }
  outputLetter = String.fromCharCode(outputAscii);

  return outputLetter;
}

module.exports = problem4;
