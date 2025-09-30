function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// React 컴포넌트를 Dom 컨테이너에 렌더링
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);