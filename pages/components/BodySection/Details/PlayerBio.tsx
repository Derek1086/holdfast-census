import React from "react";
import classes from "./PlayerBio.module.css";
import { Player } from "../../..";
import PlayerRating from "./PlayerRating";

import Image, { StaticImageData } from "next/image";

interface PlayerBioProps {
  region: string;
  player: string;
  playersInLocation: Player[];
  setViewingPlayer: (id: string) => void;
  iconImg: StaticImageData;
}

const PlayerBio: React.FC<PlayerBioProps> = ({
  region,
  player,
  playersInLocation,
  setViewingPlayer,
  iconImg,
}) => {
  if (!playersInLocation) {
    return <></>;
  }

  // Find the player in the array based on the name
  const foundPlayer = playersInLocation.find((p) => p.name === player);

  const handleClick = () => {
    setViewingPlayer("");
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
                  src={iconImg}
                  alt="img"
                  height={150}
                  width={150}
                  className={classes.pfp}
                />
                <div className={classes.header}>
                  <div className={classes.plrName}>
                    {foundPlayer.regiment !== "" ||
                    foundPlayer.regiment !== undefined ? (
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
                    {foundPlayer.rating === "" ||
                    foundPlayer.rating === undefined ? (
                      <div
                        className={classes.infoLocation}
                      >{`Average Impact Rating: None`}</div>
                    ) : (
                      <PlayerRating region={region} player={foundPlayer} />
                    )}
                  </div>
                  <div className={classes.location}>
                    {foundPlayer.city === "" ||
                    foundPlayer.city === undefined ? (
                      <div
                        className={classes.infoLocation}
                      >{`Location: ${foundPlayer.state}`}</div>
                    ) : (
                      <div
                        className={classes.infoLocation}
                      >{`Location: ${foundPlayer.city}, ${foundPlayer.state}`}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.bioInfo}>
                {foundPlayer.bio === "" || foundPlayer.bio === undefined ? (
                  <div className={classes.infoBio}></div>
                ) : (
                  <div className={classes.infoBio}>{`${foundPlayer.bio}`}</div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className={classes.error}>Player not found</div>
        )}
      </div>
    </div>
  );
};

export default PlayerBio;
