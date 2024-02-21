import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { playerId, updatedData, region } = req.body;

  try {
    const client = await clientPromise;
    const db = client.db("HOLDFASTMAP");
    let collect = region === "NA" ? "NAREGION" : "EUREGION";

    // Update player data in the database
    const result = await db.collection(collect).updateOne(
      { "players.id": playerId },
      {
        $set: {
          "players.$.rating": updatedData.rating,
        },
      }
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Player data updated successfully" });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
