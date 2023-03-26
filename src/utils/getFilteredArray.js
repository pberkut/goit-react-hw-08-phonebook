const getFilteredArray = (items, filterValue) =>
  items.filter(item =>
    [item.name.toLowerCase(), item.phone]
      .join(' ')
      .includes(filterValue.toLowerCase().trim())
  );

// const getFilteredArray = (items, key, filteredValue) =>
//   items.filter(item =>
//     item[key].toLowerCase().includes(filteredValue.toLowerCase().trim())
//   );

export { getFilteredArray };
