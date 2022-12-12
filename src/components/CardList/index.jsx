import Card from "../Card";

import './styles.css'

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => {
      return (
        <Card monster={monster} key={monster.id} />
    )})}
  </div>
);

export default CardList;