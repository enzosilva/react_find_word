import "./GameScreen.css";

const GameScreen = ({letterValidation}) => {
    return (
        <div className="game">
            <h1>Find Word</h1>
            <button onClick={letterValidation}>Insert</button>
        </div>
    );
}

export default GameScreen;
