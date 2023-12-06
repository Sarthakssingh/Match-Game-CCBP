import './index.css'

const Navbar = props => {
  const {time, score} = props
  return (
    <nav className="nav-bar">
      <img
        className="top-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="score-div">
        <p className="score-name">
          Score: <span className="score">{score}</span>
        </p>
        <div className="score-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time">{time} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
