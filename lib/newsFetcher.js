const newsFetcher = async () => {
  let fetchedData = [];
  // Try fetching data from both the APIs
  try {
    const response1 = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/news"
    );
    const data1 = await response1.json();
    fetchedData = [...data1.articles];
  } catch (err) {
    console.log(err);
  }
  try {
    const response2 = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/football/college-football/news"
    );
    const data2 = await response2.json();
    fetchedData = [...fetchedData, ...data2.articles];
  } catch (err) {
    console.log(err);
  }

  return fetchedData;
};

export default newsFetcher;
