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
  setFilteredPlayers: (id: string) => void;
  searchedPlayers: Player[] | null;
}

const BodySection: React.FC<BodySectionProps> = ({
  region,
  location,
  setLocation,
  setViewingPlayer,
  viewingPlayer,
  regionalPlayers,
  playersInLocation,
  setFilteredPlayers,
  searchedPlayers,
}) => {
  return (
    <div className={classes.bodyContainer}>
      <div className={classes.mapContainer}>
        {region === "NA" ? (
          <NAMap
            setSelectedLocation={setLocation}
            setViewingPlayer={setViewingPlayer}
            regionalPlayers={regionalPlayers}
            setFilteredPlayers={setFilteredPlayers}
          />
        ) : (
          <EUMap
            setSelectedLocation={setLocation}
            setViewingPlayer={setViewingPlayer}
            regionalPlayers={regionalPlayers}
            setFilteredPlayers={setFilteredPlayers}
          />
        )}
      </div>
      <div className={classes.locationContainer}>
        <div className={classes.detailContainer}>
          <h3 className={classes.locationTitle}>
            <LocationDetails region={region} selectedLocation={location} />
          </h3>
          <div className={classes.details}>
            <PlayerList
              region={region}
              setViewingPlayer={setViewingPlayer}
              viewingPlayer={viewingPlayer}
              playersInLocation={playersInLocation}
              location={location}
              searchedPlayers={searchedPlayers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
