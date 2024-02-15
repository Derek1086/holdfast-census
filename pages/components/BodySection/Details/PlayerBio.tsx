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
import _7nation from "./bioImages/7nation.png";
import Almondo from "./bioImages/Almondo.png";
import Alphastar from "./bioImages/Alphastar.png";
import Amy from "./bioImages/Amy.png";
import Billjet from "./bioImages/Billjet.png";
import Cerb from "./bioImages/Cerb.png";
import Charleslee from "./bioImages/Charleslee.png";
import crazy from "./bioImages/crazy.png";
import Ecual from "./bioImages/Ecual.png";
import Fires from "./bioImages/Fires.png";
import frankiemcnutslap from "./bioImages/frankiemcnutslap.png";
import Highlander from "./bioImages/Highlander.png";
import JaysonH from "./bioImages/JaysonH.png";
import Lobcity from "./bioImages/Lobcity.png";
import Madbox from "./bioImages/Madbox.png";
import Mattrobes from "./bioImages/Mattrobes.png";
import MilkMan from "./bioImages/MilkMan.png";
import moxeetwo from "./bioImages/moxeetwo.png";
import Nine from "./bioImages/Nine.png";
import NoahMcMoney from "./bioImages/NoahMcMoney.png";
import Notacoolguy from "./bioImages/Notacoolguy.png";
import Paddy from "./bioImages/Paddy.png";
import PRC from "./bioImages/PRC.png";
import Sock from "./bioImages/Sock.png";
import Reddishh from "./bioImages/Reddishh.png";
import russell from "./bioImages/russell.png";
import Spicypaper from "./bioImages/Spicypaper.png";
import Stryker from "./bioImages/Stryker.png";
import Thad from "./bioImages/Thad.png";
import toasted from "./bioImages/toasted.png";
import ToasterCoaster from "./bioImages/ToasterCoaster.png";
import WifiBills from "./bioImages/WifiBills.png";

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
      case "Lobcity":
        return Lobcity;
      case "Sock":
        return Sock;
      case "Wifi Bills":
        return WifiBills;
      case "russell":
        return russell;
      case "Thad":
        return Thad;
      case "Toasted":
        return toasted;
      case "Spicypaper":
        return Spicypaper;
      case "Notacoolguy":
        return Notacoolguy;
      case "Nine":
        return Nine;
      case "PRC":
        return PRC;
      case "Stryker":
        return Stryker;
      case "ToasterCoaster":
        return ToasterCoaster;
      case "Paddy":
        return Paddy;
      case "Reddishh":
        return Reddishh;
      case "Mattrobes":
        return Mattrobes;
      case "Madbox":
        return Madbox;
      case "moxeetwo":
        return moxeetwo;
      case "Noah McMoney":
        return NoahMcMoney;
      case "The Milk Man":
        return MilkMan;
      case "Fires":
        return Fires;
      case "Highlander":
        return Highlander;
      case "FrankieMcNutSlap":
        return frankiemcnutslap;
      case "JaysonH":
        return JaysonH;
      case "Ecual":
        return Ecual;
      case "crazy":
        return crazy;
      case "BILLJET":
        return Billjet;
      case "Cerb":
        return Cerb;
      case "Charles":
        return Charleslee;
      case "7nation":
        return _7nation;
      case "Almondo":
        return Almondo;
      case "AlphaStar":
        return Alphastar;
      case "Amy":
        return Amy;
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
