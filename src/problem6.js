/*
 * <기능 목록>
 * 1. 이메일과 닉네임이 포함된 2차원 배열에서 닉네임만을 포함한 배열을 반환하는 getNickname() 함수.
 * 2. 모든 닉네임에서 모든 연속된 글자를 Object 타입으로 반환하는 getEverySeqLetters() 함수.
 *     이 때, Object의 keys는 연속된 두 글자이고 values는 연속된 두 글자가 나타난 횟수이다.
 * 3. 연속된 글자 Object에서 연속된 두 글자가 나타난 횟수(value)가 2 이상인 연속된 두 글자(key)만을 반환하는 findDuplicatedLetters() 함수.
 * 4. 입력받은 연속된 두 글자를 포함하는 닉네임의 인덱스 리스트를 반환하는 findIndexOfNickname() 함수.
 *     이 때, 해당되는 연속된 두 글자를 포함하는 닉네임이 하나인 경우는 포함하지 않는다. (한 닉네임에 연속글자가 중복으로 들어가 있는 경우는 닉네임 중복에 포함하지 않는다.)
 * 5. 주어진 인덱스에 해당하는 이메일 리스트를 반환하는 findEmail() 함수.
 */

function problem6(forms) {
  var answer;
  return answer;
}

function getNickname(forms) {
  let nicknames = [];
  for (let form of forms) {
    nicknames.push(form[1]);
  }

  return nicknames;
}

module.exports = problem6;
