import clientPromise from "../lib/mongodb";

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id.$oid}>
            <h2>{movie.Region}</h2>
            <ul>
              {movie.players.map((player) => (
                <li key={player.id}>
                  <h3>{player.name}</h3>
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
      props: { movies: JSON.parse(JSON.stringify(allData)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { movies: [] },
    };
  }
}
