import './App.css';

import { useState } from 'react';
import { wordsList } from './data/words.js';

import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" }
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);

    const [words] = useState(wordsList);

    const [chosenWord, setChosenWord] = useState();
    const [chosenCategory, setChosenCategory] = useState();
    const [chosenLetters, setChosenLetters] = useState();

    const chooseWordAndCategory = () => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)];

        return { category, word };
    }

    const startGame = () => {
        const { category, word } = chooseWordAndCategory();

        let letters = word.split("").map(
            (letter) => letter.toLowerCase()
        );

        setChosenCategory(category);
        setChosenWord(word);
        setChosenLetters(letters);

        setGameStage(stages[1].name);
    }

    const letterValidation = () => {
        setGameStage(stages[2].name);
    }

    const retry = () => {
        setGameStage(stages[0].name);
    }

    return (
        <div className="App">
            {(gameStage) === "start" && <StartScreen startGame={startGame} />}
            {(gameStage) === "game" && <GameScreen letterValidation={letterValidation} />}
            {(gameStage) === "end" && <GameOverScreen retry={retry} />}
        </div>
    );
}

export default App;
