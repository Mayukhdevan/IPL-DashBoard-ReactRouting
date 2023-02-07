import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatches

  return (
    <div className="latest-match-card">
      <div className="heading-date-logo-wrapper">
        <div className="heading-date-texts-container">
          <p className="latest-competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="para-100">{venue}</p>
          <p className="para-100">{result}</p>
        </div>
        <img
          className="latest-match-competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <div className="innings-details-container">
        <p className="para-100">First Innings</p>
        <p className="para-100">{firstInnings}</p>
        <p className="para-100">Second Innings</p>
        <p className="para-100">{secondInnings}</p>
        <p className="para-100">Man Of The Match</p>
        <p className="para-100">{manOfTheMatch}</p>
        <p className="para-100">Umpires</p>
        <p className="para-100">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
