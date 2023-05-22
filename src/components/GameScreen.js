import { useRef, useState } from "react";
import "./GameScreen.css";

const GameScreen = ({
    letterValidation,
    chosenWord,
    chosenCategory,
    chosenLetters,
    guessedLetters,
    wrongLetters,
    attempts,
    score
}) => {
    const [letter, setLetter] = useState("");
    const letterInputReference = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        letterValidation(letter);
        setLetter("");

        letterInputReference.current.focus();
    }

    return (
        <div className="game">
            <h1>Find Word</h1>
            <p className="score">
                <span>Score: {score}</span>
            </p>
            <h2 className="tip">
                Word tip: <span>{chosenCategory}</span>
            </h2>
            <p>You still have {attempts} try(ies) left</p>
            <div className="wordContainer">
                {chosenLetters.map((letter, i) => (
                    (guessedLetters.includes(letter)) ?
                        (<span key={i} className="letter">{letter}</span>) :
                        (<span key={i} className="blankSquare"></span>)
                ))}
            </div>
            <div className="letterContainer">
                <p>Try to guess a word letter:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="letter"
                        maxLength="1"
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputReference} />
                    <button>Play</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <h4>Letters already used:</h4>
                {wrongLetters.map((letter, i) => (
                    (<span key={i}>{letter}, </span>)
                ))}
            </div>
        </div>
    );
}

export default GameScreen;
