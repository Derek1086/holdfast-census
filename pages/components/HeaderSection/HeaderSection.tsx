import React from "react";
import classes from "./HeaderSection.module.css";

interface HeaderSectionProps {
  updateRegion: () => void;
  region: string;
  setFilteredPlayers: (id: string) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  updateRegion,
  region,
  setFilteredPlayers,
}) => {
  const handleRegionButtonClick = () => {
    updateRegion();
    setFilteredPlayers("");
  };

  return (
    <div className={classes.headContainer}>
      <div className={classes.title}>HOLDFAST MELEE CENSUS</div>
      <div className={classes.region}>
        REGION:
        <div className={classes.buttonContainer}>
          <button
            onClick={handleRegionButtonClick}
            className={classes.regionButton}
          >
            {region}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
