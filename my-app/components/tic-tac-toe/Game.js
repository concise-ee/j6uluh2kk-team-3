import React, {useState} from 'react'
import Board from "./Board";

const Game = () => {
    const initialState = {
        history: [
            {
                squares: Array(9).fill(null)
            }
        ],
        stepNumber: 0,
        xIsNext: true
    };

    const [state, setState] = useState(initialState);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? "X" : "O";
        setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext
        });
    }

    const jumpTo = (step) => {
        const newState = {
            ...state,
            stepNumber: step,
            xIsNext: (step % 2) === 0
        }
        setState(newState);
    }

    const history = state.history;
    const current = history[state.stepNumber];

    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <button onClick={() => jumpTo(move)} style={{ width: '100%', margin: '0.25rem', border: 'none', background: '#DADADA', color: '#000' }}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (state.xIsNext ? "X" : "O");
    }

    return (
        <div style={styles.body} className="game">
            <div className="game-board" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <div>{status}</div>
                <ol style={{ margin: 0, padding: 0 }}>{moves}</ol>
            </div>
        </div>
    );
}
const styles = {
    body: {
        fontSize: "14px",
        padding: "20px",
    }
};

export default Game
