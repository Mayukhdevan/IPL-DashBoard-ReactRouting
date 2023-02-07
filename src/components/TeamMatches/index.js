import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchesDetails: {}, isLoading: true}

  componentDidMount() {
    this.fetchTeamMatches()
  }

  fetchTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachMatch => ({
        umpires: eachMatch.umpires,
        result: eachMatch.result,
        manOfTheMatch: eachMatch.man_of_the_match,
        id: eachMatch.id,
        date: eachMatch.date,
        venue: eachMatch.venue,
        competingTeam: eachMatch.competing_team,
        competingTeamLogo: eachMatch.competing_team_logo,
        firstInnings: eachMatch.first_innings,
        matchStatus: eachMatch.match_status,
      })),
    }

    this.setState({teamMatchesDetails: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesDetails} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
    } = teamMatchesDetails

    return (
      <div className={`team-matches ${id}`}>
        <div className="responsive-wrapper">
          <img src={teamBannerUrl} alt="team banner" className="banner-image" />
          <p className="latest-matches-text">Latest Matches</p>
          <LatestMatch latestMatches={latestMatchDetails} />
          <ul className="match-cards-list-wrapper">
            {recentMatches.map(eachMatch => (
              <MatchCard key={eachMatch.id} recentMatch={eachMatch} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
