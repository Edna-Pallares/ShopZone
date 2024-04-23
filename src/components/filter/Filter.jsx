export const filterByCategory = (items, category) => {
  return items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
};

export const filterByPrice = (items, minPrice, maxPrice) => {
  return items.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );
};
/*IN PROGRESS*/