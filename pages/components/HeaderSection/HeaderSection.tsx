import React from "react";
import classes from "./HeaderSection.module.css";

interface HeaderSectionProps {
  updateRegion: () => void;
  region: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  updateRegion,
  region,
}) => {
  const handleRegionButtonClick = () => {
    updateRegion();
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
