import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`<${props.name}>`}</h1>
            <h2>{`→ 총 ${props.numOfPage} 페이지`}</h2>
        </div>
    );
}

export default Book;
