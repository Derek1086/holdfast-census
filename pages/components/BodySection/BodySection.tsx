import React from "react";
import classes from "./BodySection.module.css";
import NAMap from "./Maps/NAMap";
import EUMap from "./Maps/EUMap";
import LocationDetails from "./Maps/LocationDetails";
import PlayerList from "./Details/PlayerList";
import { Player, RegionData } from "../..";

interface BodySectionProps {
  region: string;
  location: string;
  setLocation: (newLocation: string) => void;
  setViewingPlayer: (id: string) => void;
  viewingPlayer: string;
  regionalPlayers: RegionData | undefined;
  playersInLocation: Player[];
}

const BodySection: React.FC<BodySectionProps> = ({
  region,
  location,
  setLocation,
  setViewingPlayer,
  viewingPlayer,
  regionalPlayers,
  playersInLocation,
}) => {
  return (
    <div className={classes.bodyContainer}>
      <div className={classes.mapContainer}>
        {region === "NA" ? (
          <NAMap
            setSelectedLocation={setLocation}
            setViewingPlayer={setViewingPlayer}
            regionalPlayers={regionalPlayers}
          />
        ) : (
          <EUMap
            setSelectedLocation={setLocation}
            setViewingPlayer={setViewingPlayer}
            regionalPlayers={regionalPlayers}
          />
        )}
      </div>
      <div className={classes.locationContainer}>
        <div className={classes.detailContainer}>
          <h2 className={classes.locationTitle}>
            <LocationDetails region={region} selectedLocation={location} />
          </h2>
          <div className={classes.details}>
            {location !== "" ? (
              <PlayerList
                setViewingPlayer={setViewingPlayer}
                viewingPlayer={viewingPlayer}
                playersInLocation={playersInLocation}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
