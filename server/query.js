// Server query helper for dataset access.
// This file is a placeholder for REST or API data requests.
// If you later add a backend, you can implement endpoints here.

const BASE_GEOJSON_PATH = '../data/geojson/';
const BASE_QMD_PATH = '../data/qmd/';

async function fetchGeoJSON(filename) {
  const url = `${BASE_GEOJSON_PATH}${filename}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch GeoJSON: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function fetchQMD(filename) {
  const url = `${BASE_QMD_PATH}${filename}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch QMD: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

export { fetchGeoJSON, fetchQMD };
