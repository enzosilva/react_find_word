import "./GameScreen.css";

const GameScreen = ({
    letterValidation,
    chosenWord,
    chosenCategory,
    chosenLetters,
    guessedLetters,
    wrongLetters
}) => {
    return (
        <div className="game">
            <h1>Find Word</h1>
            <p className="score">
                <span>Score: 000</span>
            </p>
            <h2 className="tip">
                Word tip: <span>Tip...</span>
            </h2>
            <p>You still have 0 try(ies) left</p>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Try to guess a word letter:</p>
                <form>
                    <input type="text" name="letter" maxLength="1" required />
                    <button>Play</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <h4>Letters already used:</h4>
                <span>A, B, C</span>
            </div>
        </div>
    );
}

export default GameScreen;
