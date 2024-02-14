import React, { useState } from "react";
import clientPromise from "../lib/mongodb";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import BodySection from "./components/BodySection/BodySection";
import { GetStaticProps } from "next";

export type Player = {
  id: string;
  name: string;
  regiment: string;
  city: string;
  bio: string;
  state: string;
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

  return (
    <React.Fragment>
      <title>Holdfast Melee Census</title>
      <link rel="icon" href="/favicon.ico" />
      <HeaderSection updateRegion={updateRegionHandler} region={region} />
      <BodySection
        region={region}
        location={location}
        setLocation={setLocation}
        setViewingPlayer={setViewingPlayer}
        viewingPlayer={viewingPlayer}
        regionalPlayers={regionalPlayers}
        playersInLocation={playersInLocation}
      />
    </React.Fragment>
  );
};

export default Home;
