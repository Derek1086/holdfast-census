import React from "react";
import classes from "./PlayerItem.module.css";
import { Player } from "../../..";

interface PlayerItemProps {
  setViewingPlayer: (id: string) => void;
  player: Player;
}

const PlayerItem: React.FC<PlayerItemProps> = ({
  setViewingPlayer,
  player,
}) => {
  const handleClick = () => {
    setViewingPlayer(player.name);
  };

  return (
    <button className={classes.card} onClick={handleClick}>
      {player.regiment !== "" ? (
        <React.Fragment>
          <div className={classes.inner}>
            {player.regiment} {player.name}
          </div>
          <div className={classes.outer}>{player.bio}</div>
        </React.Fragment>
      ) : (
        <div className={classes.inner}>{player.name}</div>
      )}
    </button>
  );
};

export default PlayerItem;
