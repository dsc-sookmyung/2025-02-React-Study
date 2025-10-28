import React, { useState } from "react";

function SignUp(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [study, setStudy] = useState("React");


  const handleSubmit = (event) => {
    alert(`${name}님 환영합니다!\n참여 스터디: ${study}`);
    event.preventDefault();
  };

  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "auto",
      }}
    >
      <label>
        아이디
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>

      <label>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        이름
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        성별
        <div>
          <label>
            <input
              type="radio"
              value="여자"
              checked={gender === "여자"}
              onChange={(e) => setGender(e.target.value)}
            />
            여자
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value="남자"
              checked={gender === "남자"}
              onChange={(e) => setGender(e.target.value)}
            />
            남자
          </label>
        </div>
      </label>

      <label>
        생년월일
        <input
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </label>

      <label>
        참여 스터디
        <select value={study} onChange={(e) => setStudy(e.target.value)}>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
          <option value="AI">AI</option>
        </select>
      </label>

      <button type="submit" style={{ marginTop: "20px" }}>
        회원가입
      </button>
    </form>
  );
}

export default SignUp;
