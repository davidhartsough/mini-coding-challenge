/*
type Metadata = {
  url: string | null;
  siteName: string | null;
  title: string | null;
  description: string | null;
  keywords: string[] | null;
  author: string | null;
};
*/
/**
 * @typedef Metadata
 * @prop {string | null} url
 * @prop {string | null} siteName
 * @prop {string | null} title
 * @prop {string | null} description
 * @prop {string[] | null} keywords
 * @prop {string | null} author
 */

/**
 * Filters the given Metadata array to only include the objects that match the given search query.
 * Match on all properties of the Metadata objects.
 * If the search query has multiple words,
 * treat each word as a separate search term to filter by,
 * in addition to gathering results from the overall query.
 * If the search query has special characters, including most punctuation,
 * run the query filter with the special characters removed.
 * If the metadata contains special characters, including most punctuation,
 * also run the query filter with those special characters removed.
 * (Consider non-alphanumeric characters, such as hyphens, periods, commas, quotes, etc.)
 * Can return an empty array if no Metadata objects match the search query.
 * @param {Metadata[]} metadata - An array of Metadata objects
 * @param {string} query - The search query string
 * @returns {Metadata[]} - An array of Metadata objects that match the given search query
 */
export default function filterMetadata(metadata, query) {
  // TODO: delete and replace this with your code
  console.log(query);
  return metadata;
}
