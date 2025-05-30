export function createSearch() {
  let query = $state('');
  let results = $state([]);
  let loading = $state(false);

  return {
    get query() { return query; },
    set query(value) { query = value; },
    get results() { return results; },
    set results(value) { results = value; },
    get loading() { return loading; },
    set loading(value) { loading = value; }
  };
}