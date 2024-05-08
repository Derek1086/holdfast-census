import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
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
      .limit(10)
      .toArray();

    // Fetch data from the EUREGION collection
    const euRegionData = await db
      .collection("EUREGION")
      .find({})
      .sort({
        /* Specify your sorting criteria here */
      })
      .limit(10)
      .toArray();

    const transformData = (data) => {
      return data.map((entry) => ({
        _id: entry._id,
        Region: entry.Region,
        players: entry.players.map((player) => ({
          id: player.id,
          name: player.name,
          regiment: player.regiment,
          city: player.city,
          bio: player.bio,
        })),
      }));
    };

    const transformedNaRegionData = transformData(naRegionData);
    const transformedEuRegionData = transformData(euRegionData);

    const allData = {
      NAREGION: transformedNaRegionData,
      EUREGION: transformedEuRegionData,
    };

    res.json(allData);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
