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
  if (!player) {
    return <></>;
  }

  const handleClick = () => {
    try {
      if (setViewingPlayer) {
        setViewingPlayer(player.name);
      } else {
        throw new Error("setViewingPlayer function is not provided.");
      }
    } catch (error) {
      console.error("error");
    }
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
