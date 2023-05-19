import './App.css';

import { useState } from 'react';
import { wordsList } from './data/words.js';

import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

function App() {
    const stages = [
        {id: 1, name: "start"},
        {id: 2, name: "game"},
        {id: 3, name: "end"}
    ];

    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    console.log(words);

    return (
        <div className="App">
            {(gameStage) === "start" && <StartScreen />}
            {(gameStage) === "game" && <GameScreen />}
            {(gameStage) === "end" && <GameOverScreen />}
        </div>
    );
}

export default App;
