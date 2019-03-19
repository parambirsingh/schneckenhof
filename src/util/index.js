export const filterPremium = (data, isPremium) =>
  data.allWine.edges
    .map(edge => edge.node)
    .filter(node => node.premium == isPremium);

// const read = (key) => localStorage[key] ? JSON.parse(localStorage[key]) : null
// const write = (key, value) => localStorage[key] = JSON.stringify(value)
// const clear = (key) => localStorage.removeItem(key)

// export const store = {read, write, clear}
