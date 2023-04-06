import Card from "../Card";

import { Monster } from "../../App";

import './styles.css'

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map(monster => {
      return (
        <Card monster={monster} key={monster.id} />
    )})}
  </div>
);

export default CardList;