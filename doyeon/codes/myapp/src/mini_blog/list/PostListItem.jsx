import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    background: white; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    :hover {
        background: #f7f7f7;
        transform: translateY(-2px);
    }
    `;

    const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #222; 
    margin: 0;
    `;

    function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
        <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;