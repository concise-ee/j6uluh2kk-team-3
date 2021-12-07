import React from 'react'
import Square from "./Square";

const Board = (props) => {
    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div style={styles.boardRowAfter}></div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div style={styles.boardRowAfter}></div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div style={styles.boardRowAfter}></div>
        </div>
    );

}

const styles = {
    boardRowAfter: {
        clear: "both",
        content: "",
        display: "table"
    }
};

export default Board
