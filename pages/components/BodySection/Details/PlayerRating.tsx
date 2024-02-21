import { Player } from "../../..";
import classes from "./PlayerRating.module.css";

interface PlayerRatingProps {
  player: Player;
}

const PlayerRating: React.FC<PlayerRatingProps> = ({ player }) => {
  if (!player) {
    return <></>;
  }
  return (
    <div
      className={classes.infoLocation}
    >{`Average Impact Rating: ${player.rating}`}</div>
  );
};

export default PlayerRating;
