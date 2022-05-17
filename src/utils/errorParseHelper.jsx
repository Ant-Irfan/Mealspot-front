const parseError = (error) => (error.response ? error.response.data.error.message
  : error.toString());
export { parseError };
