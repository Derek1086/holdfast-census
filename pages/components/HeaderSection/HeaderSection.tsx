import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import classes from "./HeaderSection.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.container}>
            <div className={classes.titleContainer}>
              <div className={classes.title}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  HOLDFAST MELEE CENSUS
                </Typography>
              </div>
            </div>
            <div className={classes.searchContainer}>
              <div className={classes.searchBar}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Players…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={inputHandler}
                    value={filteredPlayers}
                  />
                </Search>
              </div>
            </div>
            <div className={classes.menuContainer}>
              <div className={classes.menu}>
                <div className={classes.regionTitle}>
                  <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    REGION
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleRegionButtonClick}
                >
                  {region}
                </Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
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
