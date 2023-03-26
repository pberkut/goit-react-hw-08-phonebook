const handleFilterContacts = (contacts, filterValue) =>
  contacts.filter(contact =>
    [contact.name.toLowerCase(), contact.phone]
      .join(' ')
      .includes(filterValue.toLowerCase().trim())
  );

// const handleFilterContacts = (items, key, filteredValue) =>
//   items.filter(item =>
//     item[key].toLowerCase().includes(filteredValue.toLowerCase().trim())
//   );

export { handleFilterContacts };
