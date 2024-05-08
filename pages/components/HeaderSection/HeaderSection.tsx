"use client";
import React from "react";

import classes from "./HeaderSection.module.css";

interface HeaderSectionProps {
  updateRegion: () => void;
  region: string;
  setLocation: (newLocation: string) => void;
  filteredPlayers: string;
  setViewingPlayer: (id: string) => void;
  setFilteredPlayers: (id: string) => void;
  searchHandler: (input: string) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  updateRegion,
  region,
  setLocation,
  filteredPlayers,
  setViewingPlayer,
  setFilteredPlayers,
  searchHandler,
}) => {
  const handleRegionButtonClick = () => {
    updateRegion();
    setFilteredPlayers("");
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredPlayers(event.target.value);
    setLocation("");
    setViewingPlayer("");
    searchHandler(event.target.value);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            <h4>HOLDFAST MELEE CENSUS</h4>
          </div>
        </div>
        <div className={classes.searchContainer}>
          <div className={classes.searchBar}>
            <input
              className={classes.search}
              placeholder="Search Players…"
              onChange={inputHandler}
              value={filteredPlayers}
            />
          </div>
        </div>
        <div className={classes.menuContainer}>
          <div className={classes.menu}>
            <div className={classes.regionTitle}>
              <span>REGION</span>
            </div>
            <button className={classes.btn} onClick={handleRegionButtonClick}>
              {region}
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className={classes.headContainer}>
    //   <div className={classes.title}>HOLDFAST MELEE CENSUS</div>
    //   <div className={classes.region}>
    //     REGION:
    //     <div className={classes.buttonContainer}>
    //       <button
    //         onClick={handleRegionButtonClick}
    //         className={classes.regionButton}
    //       >
    //         {region}
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeaderSection;
