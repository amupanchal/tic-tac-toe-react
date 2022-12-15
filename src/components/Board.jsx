import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [squreValue, setsqureValue] = useState(Array(9).fill(null));
    const [isXturn, setisXturn] = useState(true);
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic
            if (squreValue[a] !== null && squreValue[a] === squreValue[b] && squreValue[c] === squreValue[a]) {
                return squreValue[a]
            }
        }
        return false
    }
    const handleClick = (index) => {
        if (squreValue[index] !== null) {
            return;
        }
        const copyState = [...squreValue]
        copyState[index] = isXturn ? "X" : "O"
        setsqureValue(copyState)
        setisXturn(!isXturn)
    }
    const handleReset = () => {
        setsqureValue(Array(9).fill(null))
    }
    const isWinner = checkWinner();
    return (
        <div className='board-container'>
            {isWinner ? (<>
                {isWinner} is the winner
                <button onClick={handleReset}>Play Again</button>
            </>) : <>
                <h2>Player {isXturn ? "X" : "O"} turn</h2>
                <div className='borad-row'>
                    <Square onClick={() => handleClick(0)} value={squreValue[0]} />
                    <Square onClick={() => handleClick(1)} value={squreValue[1]} />
                    <Square onClick={() => handleClick(2)} value={squreValue[2]} />
                </div>
                <div className='borad-row'>
                    <Square onClick={() => handleClick(3)} value={squreValue[3]} />
                    <Square onClick={() => handleClick(4)} value={squreValue[4]} />
                    <Square onClick={() => handleClick(5)} value={squreValue[5]} />
                </div>
                <div className='borad-row'>
                    <Square onClick={() => handleClick(6)} value={squreValue[6]} />
                    <Square onClick={() => handleClick(7)} value={squreValue[7]} />
                    <Square onClick={() => handleClick(8)} value={squreValue[8]} />
                </div>
            </>}

        </div>
    )
}

export default Board
