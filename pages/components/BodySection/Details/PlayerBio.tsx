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
import Perc from "./bioImages/Perc.png";
import August from "./bioImages/August.png";
import AdamTheMeta from "./bioImages/AdamTheMeta.png";
import BaconIsAwesome from "./bioImages/BaconIsAwesome.png";
import Charmy from "./bioImages/Charmy.png";
import chrome from "./bioImages/chrome.png";
import Clear from "./bioImages/Clear.png";
import Ed from "./bioImages/Ed.png";
import Frewbay from "./bioImages/Frewbay.png";
import Gendalf from "./bioImages/Gendalf.png";
import Hellameme from "./bioImages/Hellameme.png";
import Jerry from "./bioImages/Jerry.png";
import Jewourgie from "./bioImages/Jewourgie.png";
import MattGS from "./bioImages/MattGS.png";
import Rave from "./bioImages/Rave.png";
import Ghost from "./bioImages/Ghost.png";
import GreenDan from "./bioImages/GreenDan.png";
import Inglorian from "./bioImages/Inglorian.png";
import ItalianTurtle from "./bioImages/ItalianTurtle.png";
import Pilot from "./bioImages/Pilot.png";
import Power from "./bioImages/Power.png";
import Svenypoo from "./bioImages/Svenypoo.png";
import VHA from "./bioImages/VHA.png";
import Warden from "./bioImages/Warden.png";
import DannyG from "./bioImages/DannyG.png";
import Gustav from "./bioImages/Gustav.png";
import KaputBasket3192 from "./bioImages/KaputBasket3192.png";
import Okaykoay from "./bioImages/Okaykoay.png";
import VG from "./bioImages/VG.png";

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
      case "Danny G":
        return DannyG;
      case "Gustav":
        return Gustav;
      case "KaputBasket3192":
        return KaputBasket3192;
      case "Okaykoay":
        return Okaykoay;
      case "VG":
        return VG;
      case "Warden":
        return Warden;
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
      case "Perc":
        return Perc;
      case "Captain August":
        return August;
      case "Adam The Meta":
        return AdamTheMeta;
      case "Bacon Is Awesome":
        return BaconIsAwesome;
      case "Charmy":
        return Charmy;
      case "chrome":
        return chrome;
      case "Clear":
        return Clear;
      case "Ed":
        return Ed;
      case "Frewbay":
        return Frewbay;
      case "Gendalf":
        return Gendalf;
      case "HellaMeme":
        return Hellameme;
      case "Jerry":
        return Jerry;
      case "Jewourgie":
        return Jewourgie;
      case "MattGS":
        return MattGS;
      case "Rave":
        return Rave;
      case "GHO5T":
        return Ghost;
      case "Green Dan":
        return GreenDan;
      case "Inglorian":
        return Inglorian;
      case "Italian Turtle":
        return ItalianTurtle;
      case "Pilot":
        return Pilot;
      case "Power":
        return Power;
      case "Svenypoo":
        return Svenypoo;
      case "VHA":
        return VHA;
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
                        className={classes.infoLocation}
                      >{`Location: ${foundPlayer.city}, ${foundPlayer.state}`}</div>
                    ) : (
                      <div
                        className={classes.infoLocation}
                      >{`Location: ${foundPlayer.state}`}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.bioInfo}>
                {foundPlayer.bio !== "" ? (
                  <div className={classes.infoBio}>{`${foundPlayer.bio}`}</div>
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
