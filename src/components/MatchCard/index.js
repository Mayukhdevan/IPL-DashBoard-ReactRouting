import './index.css'

const MatchCard = props => {
  const {recentMatch} = props

  const {
    result,
    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = recentMatch

  return (
    <li className="recent-match-card">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-para">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={`result-declaration ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
