import './App.css';

import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/words.js';

import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" }
];

const attemptsQuantity = 3;

function App() {
    const [words] = useState(wordsList);
    const [gameStage, setGameStage] = useState(stages[0].name);

    const [chosenCategory, setChosenCategory] = useState("");
    const [chosenWord, setChosenWord] = useState("");
    const [wordLetters, setWordLetters] = useState([]);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const [attempts, setAttempts] = useState(attemptsQuantity);
    const [score, setScore] = useState(0);

    const chooseCategoryAndWord = useCallback(() => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)];

        return { category, word };
    }, [words]);

    const startGame = useCallback(() => {
        resetGame();

        const { category, word } = chooseCategoryAndWord();

        let letters = word.split("").map((letter) => letter.toLowerCase());

        setChosenCategory(category);
        setChosenWord(word);
        setWordLetters(letters);

        setGameStage(stages[1].name);
    }, [chooseCategoryAndWord]);

    const letterValidation = (letter) => {
        let normalizeLetter = letter.toLowerCase();

        if (
            guessedLetters.includes(normalizeLetter) ||
            wrongLetters.includes(normalizeLetter)
        ) {
            return;
        }

        if (wordLetters.includes(normalizeLetter)) {
            setGuessedLetters((currentGuessedLetters) => [
                ...currentGuessedLetters,
                normalizeLetter
            ]);
        } else {
            setWrongLetters((currentWrongLetters) => [
                ...currentWrongLetters,
                normalizeLetter
            ]);

            setAttempts((currentAttempts) => (currentAttempts - 1));
        }
    }

    const resetGame = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    }

    const retry = () => {
        setScore(0);
        setAttempts(attemptsQuantity);
        setGameStage(stages[0].name);
    }

    useEffect(() => {
        if (attempts <= 0) {
            resetGame();

            setGameStage(stages[2].name);
        }
    }, [attempts]);

    useEffect(() => {
        const uniqueLetters = [...new Set(wordLetters)];

        if (
            guessedLetters.length > 0 &&
            guessedLetters.length === uniqueLetters.length
        ) {
            setScore((currentScore) => (currentScore + 100));

            startGame();
        }
    }, [guessedLetters, wordLetters]);

    return (
        <div className="App">
            {(gameStage) === "start" && <StartScreen startGame={startGame} />}
            {(gameStage) === "game" && <GameScreen
                letterValidation={letterValidation}
                chosenCategory={chosenCategory}
                chosenWord={chosenWord}
                wordLetters={wordLetters}
                guessedLetters={guessedLetters}
                wrongLetters={wrongLetters}
                attempts={attempts}
                score={score} />}
            {(gameStage) === "end" && <GameOverScreen retry={retry} score={score} />}
        </div>
    );
}

export default App;
