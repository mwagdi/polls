export const API_URL = "/api";

export const checkForEmptyFields = fields =>
  fields.some(field => field === "" || field === null);
