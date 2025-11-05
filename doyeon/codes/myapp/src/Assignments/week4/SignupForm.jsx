import React, { useState } from "react";

function SignupForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [study, setStudy] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${name}님 환영합니다.\n참여 스터디: ${study}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            아이디: <br />
            <input
                type="text"
                placeholder="아이디를 입력해주세요."
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            </label>
        </div>

        <div>
            <label>
            비밀번호: <br />
            <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
        </div>

        <div>
            <label>
            이름: <br />
            <input
                type="text"
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>

        <div>
            <label>
            성별: <br />
            <label>
                <input
                type="radio"
                name="gender"
                value="여자"
                checked={gender === "여자"}
                onChange={(e) => setGender(e.target.value)}
                />
                여자
            </label>
            <label>
                <input
                type="radio"
                name="gender"
                value="남자"
                checked={gender === "남자"}
                onChange={(e) => setGender(e.target.value)}
                />
                남자
            </label>
            </label>
        </div>

        <div>
            <label>
            생년월일: <br />
            <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
            />
            </label>
        </div>

        <div>
            <label>
            참여 스터디: <br />
            <select
                value={study}
                onChange={(e) => setStudy(e.target.value)}
            >
                <option value="">참여 스터디를 선택해주세요</option>
                <option value="React">React</option>
                <option value="Flutter">Flutter</option>
                <option value="Spring">Spring</option>
                <option value="Machine Learning">Machine Learning</option>
            </select>
            </label>
        </div>

        <div>
            <button type="submit">회원가입</button>
        </div>
        </form>
    );
}

export default SignupForm;