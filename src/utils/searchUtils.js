function rank(results) {
  return results.sort((a, b) => b.score - a.score);
}

export const prepareQueries = (query) => {
  const trimmedQuery = query.trim();
  let queries = [];

  if (trimmedQuery.includes(' ')) {
    const splitQuery = trimmedQuery.split(' ');
    queries = queries.concat(splitQuery);
  } else {
    queries.push(trimmedQuery);
  }

  return queries;
}

export const search = (data, queries) => {

  const returnDataSet = new Set();

  queries.forEach((q) => {
    const filteredData = data.filter(
      item => item.first_name.toLowerCase().includes(q.toLowerCase())
        || item.last_name.toLowerCase().includes(q.toLowerCase())
    );

    filteredData.forEach(item => returnDataSet.add(item))
  });

  return rank(Array.from(returnDataSet));
}
