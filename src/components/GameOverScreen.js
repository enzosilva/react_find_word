import "./GameOverScreen.css";

const GameOverScreen = ({ retry, score }) => {
    return (
        <div className="end">
            <h1>Game Over</h1>
            <h2>Your score was: <span>{score}</span></h2>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default GameOverScreen;
