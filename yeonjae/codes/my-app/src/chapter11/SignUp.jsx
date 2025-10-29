import React, { useState } from "react";
import './SignUp.css';

function SignUp(props) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [study, setStudy] = useState("");

    const handleSubmit = (event) => {
        alert(`${name}님 환영합니다.\n참여 스터디: ${study}`);
        event.preventDefault();
    };

    return (
        <div className="signup">
            <form className="form" onSubmit={handleSubmit}>
                {/* 아이디 */}
                <div className="container">
                    <label className="label">아이디</label>
                    <input 
                        className="field" 
                        type="text" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        placeholder="아이디를 입력해주세요."
                        required
                    />
                </div>

                {/* 비밀번호 */}
                <div className="container">
                    <label className="label">비밀번호</label>
                    <input 
                        className="field" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="비밀번호를 입력해주세요."
                        required
                    />
                </div>

                {/* 이름 */}
                <div className="container">
                    <label className="label">이름</label>
                    <input 
                        className="field" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="이름을 입력해주세요."
                        required
                    />
                </div>

                {/* 성별 */}
                <div className="container">
                    <label className="label">성별</label>
                    <div className="gender">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            여자
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            남자
                        </label>
                    </div>
                </div>

                {/* 생년월일 */}
                <div className="container">
                    <label className="label">생년월일</label>
                    <input 
                        className="field" 
                        type="date" 
                        value={birthdate} 
                        onChange={(e) => setBirthdate(e.target.value)} 
                        required
                    />
                </div>

                {/* 참여 스터디 */}
                <div className="container">
                    <label className="label">참여 스터디</label>
                    <select 
                        className="field" 
                        value={study} 
                        onChange={(e) => setStudy(e.target.value)} 
                        required
                    >
                        <option value="" disabled hidden>
                            참여 스터디를 선택해주세요.
                        </option>
                        <option value="React">React</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Spring">Spring</option>
                        <option value="Machine Learning">Machine Learning</option>
                    </select>
                </div>

                <button className="btn" type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default SignUp;
