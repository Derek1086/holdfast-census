import axios from "axios";
import React, { useEffect, useState } from "react";
import { Player } from "../../..";
import classes from "./PlayerRating.module.css";

interface PlayerRatingProps {
  region: string;
  player: Player;
}

interface PlayerRatingData {
  playerName: string;
  teamRating: string;
  impactRating: string;
}

async function getSpreadsheetValues(region: string, playerId: string) {
  const spreadsheetId = "13U3pfFnv7kvx6j5YdUs7lEu57V07QEPdFeFWjHO79v4";
  const range = region === "NA" ? "NA Ranks" : "EU Ranks";
  const dateTimeRenderOption = "FORMATTED_STRING";
  const majorDimension = "ROWS";
  const valueRenderOption = "FORMATTED_VALUE";
  const apiKey = "AIzaSyACJKfpcLrOvyXD0KmuUbhEPAcEzNO7RZo";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?dateTimeRenderOption=${dateTimeRenderOption}&majorDimension=${majorDimension}&valueRenderOption=${valueRenderOption}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response) {
      //console.log(response.data);
      const values: string[][] = response.data.values;

      if (!values || values.length === 0) {
        console.log("No data found in the spreadsheet.");
        return;
      }

      // Assuming the first row contains headers
      const headers: string[] = values[0];
      const playerIndex: number = headers.indexOf("Player Name");

      if (playerIndex === -1) {
        console.log("Player Name column not found in the spreadsheet.");
        return;
      }

      const plrRow: string[] | undefined = values.find((row) =>
        row[playerIndex]?.toLowerCase().includes(playerId.toLowerCase())
      );

      if (plrRow) {
        const playerData: PlayerRatingData = {
          playerName: plrRow[playerIndex],
          teamRating: plrRow[headers.indexOf("Team Rating")],
          impactRating: plrRow[headers.indexOf("Impact Rating")],
        };

        console.log(`Player data for ${playerId}:`, playerData);
        console.log(playerData.impactRating);
        return playerData.impactRating;
      } else {
        console.log(`Player named ${playerId} not found in the spreadsheet.`);
        return undefined;
      }
    }
  } catch (error: any) {
    console.error("Error fetching spreadsheet values:", error.message);
    return undefined;
  }
}

const PlayerRating: React.FC<PlayerRatingProps> = ({ region, player }) => {
  if (!player) {
    return <></>;
  }
  const [playerImpact, setPlayerImpact] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchPlayerImpact = async () => {
      const impactRating = await getSpreadsheetValues(region, player.name);
      setPlayerImpact(impactRating);
    };

    if (player) {
      fetchPlayerImpact();
    }
  }, [region, player]);

  if (playerImpact === undefined) {
    return (
      <div
        className={classes.infoLocation}
      >{`Average Impact Rating: ${player.rating}`}</div>
    );
  }
  return (
    <div
      className={classes.infoLocation}
    >{`Average Impact Rating: ${playerImpact}`}</div>
  );
};

export default PlayerRating;
