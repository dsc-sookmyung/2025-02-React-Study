import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 리액트" numOfPage={100}/>
            <Book name="처음 만난 스프링" numOfPage={300}/>
            <Book name="처음 만난 플러터" numOfPage={500}/>
        </div>
    );
}

export default Library;
