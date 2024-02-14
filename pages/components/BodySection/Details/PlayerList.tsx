import React, { useState, useEffect } from "react";
import classes from "./PlayerList.module.css";

import NoData from "./NoData";
import PlayerItem from "./PlayerItem";
import PlayerBio from "./PlayerBio";
import { Player } from "../../..";

interface PlayerListProps {
  viewingPlayer: string;
  setViewingPlayer: (id: string) => void;
  playersInLocation: Player[];
}

const PlayerList: React.FC<PlayerListProps> = ({
  viewingPlayer,
  setViewingPlayer,
  playersInLocation,
}) => {
  const [sortBy, setSortBy] = useState<"name" | "regiment">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortedPlayers, setSortedPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const updatedSortedPlayers = [...playersInLocation].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortBy === "regiment") {
        return sortOrder === "asc"
          ? a.regiment.localeCompare(b.regiment)
          : b.regiment.localeCompare(a.regiment);
      }
      return 0;
    });

    setSortedPlayers(updatedSortedPlayers);
  }, [playersInLocation, sortBy, sortOrder]);

  const toggleSort = (criteria: "name" | "regiment") => {
    setSortOrder((prevOrder) =>
      sortBy === criteria ? (prevOrder === "asc" ? "desc" : "asc") : "asc"
    );
    setSortBy(criteria);
  };

  if (viewingPlayer !== "") {
    return (
      <PlayerBio
        player={viewingPlayer}
        playersInLocation={playersInLocation}
        setViewingPlayer={setViewingPlayer}
      />
    );
  }

  return (
    <React.Fragment>
      {sortedPlayers.length > 0 ? (
        <div className={classes.listContainer}>
          <div className={classes.buttonContainer}>
            <button
              style={{
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
              className={classes.sortButton}
              onClick={() => toggleSort("regiment")}
            >
              Players - {sortedPlayers.length}
            </button>
          </div>
          <div className={classes.playerList}>
            {sortedPlayers.map((player) => (
              <PlayerItem
                key={player.id}
                player={player}
                setViewingPlayer={setViewingPlayer}
              />
            ))}
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </React.Fragment>
  );
};

export default PlayerList;
