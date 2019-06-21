import queryString from 'query-string';

function queryBuilder(queries) {
  let baseQuery = '?';

  let query = queryString.stringify(queries);
  return `${baseQuery}${query}`;
}

export { queryBuilder };