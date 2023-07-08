export const sortPlayers = (arr) => {
  const sortArr = arr.sort((a, b) => a.status.localeCompare(b.status));
  return [...sortArr.slice(-1), ...sortArr.slice(0, sortArr.length - 1)];
}
