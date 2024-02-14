import React from "react";
import classes from "./PlayerBio.module.css";
import { Player } from "../../..";

import Image from "next/image";
import Austro from "./bioImages/Austro.png";
import Kalani from "./bioImages/Kalani.png";
import DefaultIcon from "./bioImages/DefaultIcon.png";
import Giveup from "./bioImages/Giveup.jpg";
import Hotspot from "./bioImages/Hotspot.jpg";
import Peprika from "./bioImages/Peprika.png";

interface PlayerBioProps {
  player: string;
  playersInLocation: Player[];
  setViewingPlayer: (id: string) => void;
}

const PlayerBio: React.FC<PlayerBioProps> = ({
  player,
  playersInLocation,
  setViewingPlayer,
}) => {
  // Find the player in the array based on the name
  const foundPlayer = playersInLocation.find((p) => p.name === player);

  const handleClick = () => {
    setViewingPlayer("");
  };

  const findImage = (name: string) => {
    switch (name) {
      case "Austro":
        return Austro;
      case "Kalani":
        return Kalani;
      case "Giveup":
        return Giveup;
      case "Hotspot":
        return Hotspot;
      case "Peprika":
        return Peprika;
      default:
        return DefaultIcon;
    }
  };

  return (
    <div className={classes.bioContainer}>
      <div className={classes.bio}>
        {foundPlayer ? (
          <>
            <button className={classes.close} onClick={handleClick}>
              Close
            </button>
            <div className={classes.container}>
              <div className={classes.mainInfo}>
                <Image
                  src={findImage(foundPlayer.name)}
                  alt="img"
                  height={150}
                  width={150}
                  className={classes.pfp}
                />
                <div className={classes.header}>
                  <div className={classes.plrName}>
                    {foundPlayer.regiment !== "" ? (
                      <div
                        className={classes.info}
                      >{`${foundPlayer.regiment} ${foundPlayer.name}`}</div>
                    ) : (
                      <div
                        className={classes.info}
                      >{`${foundPlayer.name}`}</div>
                    )}
                  </div>
                  <div className={classes.location}>
                    {foundPlayer.city ? (
                      <div
                        className={classes.info}
                      >{`Location: ${foundPlayer.city}, ${foundPlayer.state}`}</div>
                    ) : (
                      <div
                        className={classes.info}
                      >{`Location: ${foundPlayer.state}`}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.mainInfo}>
                {foundPlayer.bio !== "" ? (
                  <div className={classes.info}>{`${foundPlayer.bio}`}</div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ) : (
          <div>Player not found</div>
        )}
      </div>
    </div>
  );
};

export default PlayerBio;
