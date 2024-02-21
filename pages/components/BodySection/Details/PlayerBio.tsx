import React from "react";
import classes from "./PlayerBio.module.css";
import { Player } from "../../..";
import PlayerRating from "./PlayerRating";

import Image from "next/image";
import DefaultIcon from "./bioImages/DefaultIcon.png";
import _7nation from "./bioImages/7nation.png";
import AdamTheMeta from "./bioImages/AdamTheMeta.png";
import Amit from "./bioImages/Amit.png";
import Almondo from "./bioImages/Almondo.png";
import Alphastar from "./bioImages/Alphastar.png";
import Algida from "./bioImages/algida.png";
import Amy from "./bioImages/Amy.png";
import August from "./bioImages/August.png";
import Austro from "./bioImages/Austro.png";
import BaconIsAwesome from "./bioImages/BaconIsAwesome.png";
import Bandej from "./bioImages/Bandej.png";
import Billjet from "./bioImages/Billjet.png";
import Bliinx from "./bioImages/Bliinx.png";
import Brax from "./bioImages/Brax.png";
import bushlinebyrant from "./bioImages/bushlinebyrant.png";
import Buxa from "./bioImages/Buxa.png";
import catboy from "./bioImages/catboy.png";
import Cerb from "./bioImages/Cerb.png";
import Charleslee from "./bioImages/Charleslee.png";
import Charmy from "./bioImages/Charmy.png";
import chrome from "./bioImages/chrome.png";
import CL0UD from "./bioImages/CL0UD.png";
import Clear from "./bioImages/Clear.png";
import Comandosim47 from "./bioImages/Comandosim47.png";
import Constantine from "./bioImages/Constantine.png";
import Crashy from "./bioImages/Crashy.png";
import crazy from "./bioImages/crazy.png";
import DankLee from "./bioImages/Danklee.png";
import DannyG from "./bioImages/DannyG.png";
import Davidgabri from "./bioImages/Davidgabri_28.png";
import Doomer from "./bioImages/Doomer.png";
import Dorri from "./bioImages/Dorri.png";
import Duncan from "./bioImages/Duncan.png";
import Ecko from "./bioImages/Ecko.png";
import Ecual from "./bioImages/Ecual.png";
import Felton from "./bioImages/Felton.png";
import Fires from "./bioImages/Fires.png";
import FoX from "./bioImages/FoX.png";
import Frankiemcnutslap from "./bioImages/frankiemcnutslap.png";
import Frewbay from "./bioImages/Frewbay.png";
import Ghost from "./bioImages/Ghost.png";
import Gendalf from "./bioImages/Gendalf.png";
import Giveup from "./bioImages/Giveup.jpg";
import GreenDan from "./bioImages/GreenDan.png";
import Gryphon from "./bioImages/Gryphon.png";
import Gustav from "./bioImages/Gustav.png";
import Haines from "./bioImages/Haines.png";
import Ed from "./bioImages/Ed.png";
import Hellameme from "./bioImages/Hellameme.png";
import Highlander from "./bioImages/Highlander.png";
import Hotspot from "./bioImages/Hotspot.jpg";
import Incapablo from "./bioImages/Incapablo.png";
import Inglorian from "./bioImages/Inglorian.png";
import ItalianTurtle from "./bioImages/ItalianTurtle.png";
import JaysonH from "./bioImages/JaysonH.png";
import Jerry from "./bioImages/Jerry.png";
import Jewourgie from "./bioImages/Jewourgie.png";
import JulianVHipper from "./bioImages/JulianVHipper.png";
import Kalani from "./bioImages/Kalani.png";
import KaputBasket3192 from "./bioImages/KaputBasket3192.png";
import Kasu from "./bioImages/Kasu.png";
import Keth from "./bioImages/keth.png";
import KillerShark from "./bioImages/KillerShark.png";
import klawik from "./bioImages/klawik.png";
import Lobcity from "./bioImages/Lobcity.png";
import Lynx from "./bioImages/Lynx.png";
import Madbox from "./bioImages/Madbox.png";
import ManiakiAX from "./bioImages/ManiakiAX.png";
import MattGS from "./bioImages/MattGS.png";
import Mattrobes from "./bioImages/Mattrobes.png";
import MilkMan from "./bioImages/MilkMan.png";
import moxeetwo from "./bioImages/moxeetwo.png";
import Muszy from "./bioImages/Muszy.png";
import NoahMcMoney from "./bioImages/NoahMcMoney.png";
import NDK from "./bioImages/NDK.jpg";
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
import Russell from "./bioImages/russell.png";
import Shane from "./bioImages/Shane.png";
import Shmadie from "./bioImages/Shmadie.png";
import Sock from "./bioImages/Sock.png";
import Spicypaper from "./bioImages/Spicypaper.png";
import Stryker from "./bioImages/Stryker.png";
import Svenypoo from "./bioImages/Svenypoo.png";
import Thad from "./bioImages/Thad.png";
import TheDutchMan from "./bioImages/TheDutchMan.png";
import Tigo from "./bioImages/Tigo.png";
import Toasted from "./bioImages/toasted.png";
import ToasterCoaster from "./bioImages/ToasterCoaster.png";
import Trainboy from "./bioImages/Trainboy.png";
import Turtles from "./bioImages/Turtles.png";
import VG from "./bioImages/VG.png";
import VHA from "./bioImages/VHA.png";
import Warden from "./bioImages/Warden.png";
import WifiBills from "./bioImages/WifiBills.png";
import Wink from "./bioImages/Wink.png";
import ytug from "./bioImages/ytug.png";

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
  if (!playersInLocation) {
    return <></>;
  }
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
      case "algida":
        return Algida;
      case "AlphaStar":
        return Alphastar;
      case "Amit":
        return Amit;
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
      case "Bliinx":
        return Bliinx;
      case "Brax":
        return Brax;
      case "bushlinebyrant":
        return bushlinebyrant;
      case "Buxa":
        return Buxa;
      case "catboy":
        return catboy;
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
      case "Kingsman Constantine":
        return Constantine;
      case "Clear":
        return Clear;
      case "crazy":
        return crazy;
      case "Crashy":
        return Crashy;
      case "Davidgabri_28":
        return Davidgabri;
      case "Doomer":
        return Doomer;
      case "Dank Lee":
        return DankLee;
      case "Danny G":
        return DannyG;
      case "Dorri":
        return Dorri;
      case "Duncan":
        return Duncan;
      case "Ecko":
        return Ecko;
      case "Ecual":
        return Ecual;
      case "Felton":
        return Felton;
      case "Fires":
        return Fires;
      case "FoX":
        return FoX;
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
      case "Gryphon":
        return Gryphon;
      case "GHO5T":
        return Ghost;
      case "Gustav":
        return Gustav;
      case "Haines":
        return Haines;
      case "Ed":
        return Ed;
      case "HellaMeme":
        return Hellameme;
      case "Highlander":
        return Highlander;
      case "Hotspot":
        return Hotspot;
      case "Incapablo":
        return Incapablo;
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
      case "Julian v. Hipper":
        return JulianVHipper;
      case "Kalani":
        return Kalani;
      case "KaputBasket3192":
        return KaputBasket3192;
      case "Kasu":
        return Kasu;
      case "keth":
        return Keth;
      case "KillerShark":
        return KillerShark;
      case "klawik":
        return klawik;
      case "Lobcity":
        return Lobcity;
      case "Lynx":
        return Lynx;
      case "Madbox":
        return Madbox;
      case "Αχιλλέας":
        return ManiakiAX;
      case "MattGS":
        return MattGS;
      case "Mattrobes":
        return Mattrobes;
      case "The Milk Man":
        return MilkMan;
      case "moxeetwo":
        return moxeetwo;
      case "Muszy":
        return Muszy;
      case "Nine":
        return Nine;
      case "Noah McMoney":
        return NoahMcMoney;
      case "Noah":
        return NDK;
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
      case "TheDutchMan":
        return TheDutchMan;
      case "Tigo":
        return Tigo;
      case "Toasted":
        return Toasted;
      case "ToasterCoaster":
        return ToasterCoaster;
      case "Trainboy":
        return Trainboy;
      case "Turtles":
        return Turtles;
      case "VHA":
        return VHA;
      case "VG":
        return VG;
      case "Warden":
        return Warden;
      case "Wifi Bills":
        return WifiBills;
      case "Wînk":
        return Wink;
      case "ytug":
        return ytug;

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
                      <PlayerRating player={foundPlayer} />
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
