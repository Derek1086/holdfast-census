import React, { useState, useEffect } from "react";
import clientPromise from "../lib/mongodb";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import BodySection from "./components/BodySection/BodySection";
import { GetStaticProps } from "next";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export type Player = {
  id: string;
  name: string;
  regiment: string;
  city: string;
  bio: string;
  state: string;
  rating: string;
};

export type RegionData = {
  _id: string;
  Region: string;
  players: Player[];
};

export type Props = {
  players: RegionData[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("HOLDFASTMAP");

    // Fetch data from the NAREGION collection
    const naRegionData = await db
      .collection("NAREGION")
      .find({})
      .sort({
        /* Specify your sorting criteria here */
      })
      .limit(500)
      .toArray();

    // Fetch data from the EUREGION collection
    const euRegionData = await db
      .collection("EUREGION")
      .find({})
      .sort({
        /* Specify your sorting criteria here */
      })
      .limit(500)
      .toArray();

    const transformData = (data: any): RegionData[] => {
      return data.map((entry: any) => ({
        _id: entry._id,
        Region: entry.Region,
        players: entry.players.map((player: any) => ({
          id: player.id,
          name: player.name,
          regiment: player.regiment,
          city: player.city,
          bio: player.bio,
          state: player.state,
          rating: player.rating,
        })),
      }));
    };

    const transformedNaRegionData = transformData(naRegionData);
    const transformedEuRegionData = transformData(euRegionData);

    const allData = transformedNaRegionData.concat(transformedEuRegionData);
    console.log(allData);
    return {
      props: { players: JSON.parse(JSON.stringify(allData)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { players: [] },
    };
  }
};

const Home: React.FC<Props> = ({ players }) => {
  const [region, setRegion] = useState<string>("NA");
  const [location, setLocation] = useState<string>("");
  const [viewingPlayer, setViewingPlayer] = useState<string>("");
  const [filteredPlayers, setFilteredPlayers] = useState<string>("");
  const [searchedPlayers, setSearchedPlayers] = useState<Player[] | null>(null);

  const updateRegionHandler = () => {
    setRegion((prevRegion) => (prevRegion === "NA" ? "EU" : "NA"));
    setLocation("");
    setViewingPlayer("");
  };

  // get players from either NA or EU
  const regionalPlayers = players.find(
    (regionData) => regionData.Region === region
  );

  // returns an array of players to use for counting
  const playersInLocation = regionalPlayers
    ? regionalPlayers.players.filter((player) => player.state === location)
    : [];

  useEffect(() => {
    if (regionalPlayers && regionalPlayers.players) {
      const initialSearchedPlayers = regionalPlayers.players;
      setSearchedPlayers(initialSearchedPlayers);
    }
  }, [regionalPlayers, setSearchedPlayers]);

  const searchHandler = (text: string) => {
    if (text === "" && regionalPlayers && regionalPlayers.players) {
      setSearchedPlayers(regionalPlayers.players);
    }
    if (regionalPlayers && regionalPlayers.players) {
      const searchResults = regionalPlayers.players.filter(
        (player: Player) =>
          player.name.toLowerCase().includes(text) ||
          player.regiment.toLowerCase().includes(text)
      );
      setSearchedPlayers(searchResults);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <title>Holdfast Melee Census</title>
      <link rel="icon" href="/favicon.ico" />
      <HeaderSection
        updateRegion={updateRegionHandler}
        region={region}
        setViewingPlayer={setViewingPlayer}
        setLocation={setLocation}
        filteredPlayers={filteredPlayers}
        setFilteredPlayers={setFilteredPlayers}
        searchHandler={searchHandler}
      />
      <BodySection
        region={region}
        location={location}
        setLocation={setLocation}
        setViewingPlayer={setViewingPlayer}
        viewingPlayer={viewingPlayer}
        regionalPlayers={regionalPlayers}
        playersInLocation={playersInLocation}
        setFilteredPlayers={setFilteredPlayers}
        searchedPlayers={searchedPlayers}
      />
    </ThemeProvider>
  );
};

export default Home;
