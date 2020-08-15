export const getArrayFiltered = ({ value, array, key }) => {
  const query = value.toLowerCase();
  const filtered = array.map((item) => {
    return { ...item, display: item[key].toLowerCase().indexOf(query) >= 0 };
  });
  return filtered;
};
