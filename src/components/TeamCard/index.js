import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {name, id, teamImageUrl} = teamCard

  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="nav-link">
        <img className="team-image" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
