import React, { useState } from "react";

function SignUp(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [study, setStudy] = useState("");

  const hanldeChangeId = (event) => {
    setId(event.target.value);
  };

  const hanldeChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const hanldeChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const hanldeChangeBirthday = (event) => {
    setBirthday(event.target.value);
  };

  const hanldeChangeStudy = (event) => {
    setStudy(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`${name}님 환영합니다.\n 참여 스터디: ${study}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디
        <br />
        <input type="text" value={id} onChange={hanldeChangeId} placeholder="아이디를 입력해주세요." />
      </label>
      <br />
      <label>
        비밀번호
        <br />
        <input type="password" value={password} onChange={hanldeChangePassword} placeholder="비밀번호를 입력해주세요." />
      </label>
      <br />
      <label>
        이름
        <br />
        <input type="text" value={name} onChange={hanldeChangeName} placeholder="이름을 입력해주세요."/>
      </label>
      <br />
      <label>
        성별
        <br />
        <input type="checkbox" value={gender} onChange={handleChangeGender} />
        여자
      </label>
      <label>
        <input type="checkbox" value={gender} onChange={handleChangeGender} />
        남자
      </label>
      <br />
      <label>
        생년월일
        <br />
        <input type="date" value={birthday} onChange={hanldeChangeBirthday} />
      </label>
      <br />
      <label>
        참여 스터디
        <br />
        <select value={study} onChange={hanldeChangeStudy}>
          <option value="" disabled hidden>참여 스터디를 선택해주세요.</option>
          <option value="React">React</option>
          <option value="Flutter">Flutter</option>
          <option value="Spring">Spring</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
      </label>
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUp;