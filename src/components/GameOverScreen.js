import "./GameOverScreen.css";

const GameOverScreen = ({retry}) => {
    return (
        <div className="end">
            <h1>Find Word</h1>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default GameOverScreen;
