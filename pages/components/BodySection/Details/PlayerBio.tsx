import React from "react";
import classes from "./PlayerBio.module.css";
import { Player } from "../../..";

import Image from "next/image";
import DefaultIcon from "./bioImages/DefaultIcon.png";
import _7nation from "./bioImages/7nation.png";
import AdamTheMeta from "./bioImages/AdamTheMeta.png";
import Almondo from "./bioImages/Almondo.png";
import Alphastar from "./bioImages/Alphastar.png";
import Amy from "./bioImages/Amy.png";
import August from "./bioImages/August.png";
import Austro from "./bioImages/Austro.png";
import BaconIsAwesome from "./bioImages/BaconIsAwesome.png";
import Bandej from "./bioImages/Bandej.png";
import Billjet from "./bioImages/Billjet.png";
import Cerb from "./bioImages/Cerb.png";
import Charleslee from "./bioImages/Charleslee.png";
import Charmy from "./bioImages/Charmy.png";
import chrome from "./bioImages/chrome.png";
import CL0UD from "./bioImages/CL0UD.png";
import Clear from "./bioImages/Clear.png";
import Comandosim47 from "./bioImages/Comandosim47.jpg";
import crazy from "./bioImages/crazy.png";
import DannyG from "./bioImages/DannyG.png";
import Dorri from "./bioImages/Dorri.png";
import Duncan from "./bioImages/Duncan.png";
import Ecual from "./bioImages/Ecual.png";
import Felton from "./bioImages/Felton.png";
import Fires from "./bioImages/Fires.png";
import Frankiemcnutslap from "./bioImages/Frankiemcnutslap.png";
import Frewbay from "./bioImages/Frewbay.png";
import Ghost from "./bioImages/Ghost.png";
import Gendalf from "./bioImages/Gendalf.png";
import Giveup from "./bioImages/Giveup.jpg";
import GreenDan from "./bioImages/GreenDan.png";
import Gustav from "./bioImages/Gustav.png";
import Ed from "./bioImages/Ed.png";
import Hellameme from "./bioImages/Hellameme.png";
import Highlander from "./bioImages/Highlander.png";
import Hotspot from "./bioImages/Hotspot.jpg";
import Inglorian from "./bioImages/Inglorian.png";
import ItalianTurtle from "./bioImages/ItalianTurtle.png";
import JaysonH from "./bioImages/JaysonH.png";
import Jerry from "./bioImages/Jerry.png";
import Jewourgie from "./bioImages/Jewourgie.png";
import Kalani from "./bioImages/Kalani.png";
import KaputBasket3192 from "./bioImages/KaputBasket3192.png";
import Kasu from "./bioImages/Kasu.png";
import Keth from "./bioImages/Keth.png";
import Lobcity from "./bioImages/Lobcity.png";
import Lynx from "./bioImages/Lynx.png";
import Madbox from "./bioImages/Madbox.png";
import MattGS from "./bioImages/MattGS.png";
import Mattrobes from "./bioImages/Mattrobes.png";
import MilkMan from "./bioImages/MilkMan.png";
import moxeetwo from "./bioImages/moxeetwo.png";
import NoahMcMoney from "./bioImages/NoahMcMoney.png";
import Nine from "./bioImages/Nine.png";
import Notacoolguy from "./bioImages/Notacoolguy.png";
import Okaykoay from "./bioImages/Okaykoay.png";
import Paddy from "./bioImages/Paddy.png";
import Peffryping from "./bioImages/peffryping.png";
import Peprika from "./bioImages/Peprika.png";
import Perc from "./bioImages/Perc.png";
import Pilot from "./bioImages/Pilot.png";
import Power from "./bioImages/Power.png";
import PRC from "./bioImages/PRC.png";
import Rave from "./bioImages/Rave.png";
import Reddishh from "./bioImages/Reddishh.png";
import Robo from "./bioImages/Robo.png";
import Russell from "./bioImages/Russell.png";
import Shane from "./bioImages/Shane.png";
import Shmadie from "./bioImages/Shmadie.png";
import Sock from "./bioImages/Sock.png";
import Spicypaper from "./bioImages/Spicypaper.png";
import Stryker from "./bioImages/Stryker.png";
import Svenypoo from "./bioImages/Svenypoo.png";
import Thad from "./bioImages/Thad.png";
import Toasted from "./bioImages/Toasted.png";
import ToasterCoaster from "./bioImages/ToasterCoaster.png";
import VG from "./bioImages/VG.png";
import VHA from "./bioImages/VHA.png";
import Warden from "./bioImages/Warden.png";
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
      case "7nation":
        return _7nation;
      case "Adam The Meta":
        return AdamTheMeta;
      case "Almondo":
        return Almondo;
      case "AlphaStar":
        return Alphastar;
      case "Amy":
        return Amy;
      case "Captain August":
        return August;
      case "Austro":
        return Austro;
      case "Bacon Is Awesome":
        return BaconIsAwesome;
      case "Bandej":
        return Bandej;
      case "BILLJET":
        return Billjet;
      case "Cerb":
        return Cerb;
      case "Charles":
        return Charleslee;
      case "Charmy":
        return Charmy;
      case "chrome":
        return chrome;
      case "CL0UD":
        return CL0UD;
      case "Comandosim47":
        return Comandosim47;
      case "Clear":
        return Clear;
      case "crazy":
        return crazy;
      case "Danny G":
        return DannyG;
      case "Dorri":
        return Dorri;
      case "Duncan":
        return Duncan;
      case "Ecual":
        return Ecual;
      case "Felton":
        return Felton;
      case "Fires":
        return Fires;
      case "FrankieMcNutSlap":
        return Frankiemcnutslap;
      case "Frewbay":
        return Frewbay;
      case "Gendalf":
        return Gendalf;
      case "Giveup":
        return Giveup;
      case "Ghost":
        return Ghost;
      case "Green Dan":
        return GreenDan;
      case "GHO5T":
        return Ghost;
      case "Gustav":
        return Gustav;
      case "Ed":
        return Ed;
      case "HellaMeme":
        return Hellameme;
      case "Highlander":
        return Highlander;
      case "Hotspot":
        return Hotspot;
      case "Inglorian":
        return Inglorian;
      case "Italian Turtle":
        return ItalianTurtle;
      case "JaysonH":
        return JaysonH;
      case "Jerry":
        return Jerry;
      case "Jewourgie":
        return Jewourgie;
      case "Kalani":
        return Kalani;
      case "KaputBasket3192":
        return KaputBasket3192;
      case "Kasu":
        return Kasu;
      case "keth":
        return Keth;
      case "Lobcity":
        return Lobcity;
      case "Lynx":
        return Lynx;
      case "Madbox":
        return Madbox;
      case "MattGS":
        return MattGS;
      case "Mattrobes":
        return Mattrobes;
      case "The Milk Man":
        return MilkMan;
      case "moxeetwo":
        return moxeetwo;
      case "Nine":
        return Nine;
      case "Noah McMoney":
        return NoahMcMoney;
      case "Notacoolguy":
        return Notacoolguy;
      case "Okaykoay":
        return Okaykoay;
      case "Paddy":
        return Paddy;
      case "peffry ping":
        return Peffryping;
      case "Peprika":
        return Peprika;
      case "Perc":
        return Perc;
      case "Pilot":
        return Pilot;
      case "PRC":
        return PRC;
      case "Power":
        return Power;
      case "Rave":
        return Rave;
      case "Reddishh":
        return Reddishh;
      case "russell":
        return Russell;
      case "Robo":
        return Robo;

      case "Shane":
        return Shane;
      case "Shmadie":
        return Shmadie;
      case "Sock":
        return Sock;
      case "Spicypaper":
        return Spicypaper;
      case "Stryker":
        return Stryker;
      case "Svenypoo":
        return Svenypoo;
      case "Thad":
        return Thad;
      case "Toasted":
        return Toasted;
      case "ToasterCoaster":
        return ToasterCoaster;
      case "VHA":
        return VHA;
      case "VG":
        return VG;
      case "Warden":
        return Warden;
      case "Wifi Bills":
        return WifiBills;

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
                    {foundPlayer.rating === "" ? (
                      <div
                        className={classes.infoLocation}
                      >{`Average Impact Rating: None`}</div>
                    ) : (
                      <div
                        className={classes.infoLocation}
                      >{`Average Impact Rating: ${foundPlayer.rating}`}</div>
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
