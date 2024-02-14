import clientPromise from "../lib/mongodb";

export default function Top({ players }) {
  return (
    <div>
      <ul>
        {players.map((player) => (
          <li key={player._id.$oid}>
            <h2>{player.Region}</h2>
            <ul>
              {player.players.map((player) => (
                <li key={player.id}>
                  <h3>{player.name}</h3>
                  <p>Regiment: {player.regiment}</p>
                  <p>City: {player.city}</p>
                  <p>Bio: {player.bio}</p>
                  <p>State: {player.state}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
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
          state: player.state,
        })),
      }));
    };

    // Transform the data from both collections
    const transformedNaRegionData = transformData(naRegionData);
    const transformedEuRegionData = transformData(euRegionData);

    // Combine the transformed data from both collections
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
}
