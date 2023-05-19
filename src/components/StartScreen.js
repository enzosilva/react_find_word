import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return (
        <div className="start">
            <h1>Find Word</h1>
            <p>Click the button below to play</p>
            <button onClick={startGame}>Start Game</button>
        </div>
    );
}

export default StartScreen;
