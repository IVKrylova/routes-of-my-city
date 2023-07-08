export const countPlayers = (arr) => {
  let count = 2;
  return arr.map(el => {
    if (el.status !== 'Капитан') {
      el.status = `${count} игрок`;
      count += 1;
    }

    return el;
  });
}
