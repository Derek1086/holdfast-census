import clientPromise from "../lib/mongodb";

export default function Players({ players }) {
  return (
    <div>
      <ul>
        {players.map((playerChar) => (
          <li key={playerChar._id.$oid}>
            <h2>{playerChar.Region}</h2>
            <ul>
              {playerChar.players.map((player, index) => (
                <li key={player.id}>
                  <h3>
                    {index + 1}. {player.name}
                  </h3>
                  <p>Regiment: {player.regiment}</p>
                  <p>City: {player.city}</p>
                  <p>Bio: {player.bio}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
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

    // Transform data structure for both collections
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

    // Transform the data from both collections
    const transformedNaRegionData = transformData(naRegionData);
    const transformedEuRegionData = transformData(euRegionData);

    // Combine the transformed data from both collections
    const allData = transformedNaRegionData.concat(transformedEuRegionData);

    return {
      props: { players: JSON.parse(JSON.stringify(allData)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { players: [] },
    };
  }
}
