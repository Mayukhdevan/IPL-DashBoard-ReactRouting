import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.fetchTeams()
  }

  fetchTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamsData = teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({teamCardsList: updatedTeamsData, isLoading: false})
  }

  renderTeamCards = () => {
    const {teamCardsList} = this.state

    return (
      <ul className="team-cards-container">
        {teamCardsList.map(eachItem => (
          <TeamCard key={eachItem.id} teamCard={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-bg-container">
        <div className="home-main-heading-wrapper">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-main-heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamCards()
        )}
      </div>
    )
  }
}

export default Home
