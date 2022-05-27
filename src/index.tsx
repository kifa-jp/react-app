import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

// type SquareState = '0' | 'X' | null;

// type SquareProps = {
//     value: SquareState
//     onclick: () => void
// }

type SquareProps = {
  value: string | null;
  onclick: () => void;
};

type BoardState = {
  squares: Array<string | null>;
};

// type SquareState = {
//     value: string | null;
// };

class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onclick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  hundleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onclick={() => this.hundleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);
root.render(<Game />);
