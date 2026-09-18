// TVMaze API — https://www.tvmaze.com/api
const BASE_URL = "https://api.tvmaze.com";

// Strips the HTML tags TVMaze wraps summaries in, e.g. "<p>...</p>".
const stripHtml = (html) => (html ? html.replace(/<[^>]+>/g, "") : "");

const normalizeShow = (show) => ({
  id: show.id,
  title: show.name,
  poster: show.image?.medium || show.image?.original || null,
  backdrop: show.image?.original || show.image?.medium || null,
  year: show.premiered ? show.premiered.slice(0, 4) : "N/A",
  releaseDate: show.premiered || "Unknown",
  rating: show.rating?.average ?? null,
  summary: stripHtml(show.summary) || "No overview available.",
  genres: show.genres || [],
  network: show.network?.name || show.webChannel?.name || "N/A",
  runtime: show.runtime || show.averageRuntime || null,
  status: show.status || "N/A",
});

// GET /shows — fetches a page of all shows in the TVMaze catalogue (250 per page).
export const getShows = async (page = 0) => {
  const result = await fetch(`${BASE_URL}/shows?page=${page}`);
  if (!result.ok) {
    throw new Error("Failed to fetch shows");
  }
  const data = await result.json();
  return data.map(normalizeShow);
};

// GET /search/shows?q=:query — searches shows by title.
export const searchShows = async (query) => {
  const result = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!result.ok) {
    throw new Error("Failed to search shows");
  }
  const data = await result.json();
  return data.map((item) => normalizeShow(item.show));
};
