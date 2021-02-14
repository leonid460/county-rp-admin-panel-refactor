function adaptDateString(dateString: string) {
  const date = new Date(dateString);
  const localeString = date.toLocaleString();

  return localeString.replaceAll('/', '.');
}

export function adaptDateInFilterByItem(
  filterByItem: { [key: string]: string },
  datePropKey: string
) {
  return {
    ...filterByItem,
    [datePropKey]: adaptDateString(filterByItem[datePropKey])
  };
}

export function dateInFilterByItemAdaptorFactory(datePropKey: string) {
  const adaptor = function (filterByItem: { [key: string]: string }) {
    return adaptDateInFilterByItem(filterByItem, datePropKey);
  };

  adaptor.displayName = `adapt${datePropKey}InFilterByItem`;

  return adaptor;
}
