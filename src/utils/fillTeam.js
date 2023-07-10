export const fillTeam = (arr) => {
  for (let i = 0; i < 5; i++) {
    if (!arr[i]) {
      arr[i] = {
        status: '',
        name: '',
        phone: '',
        email: '',
        birthday: '',
        id: Math.random(),
      }
    }
    if (arr[i].status === 'игрок' || arr[i].status === '') {
      arr[i].status = `${i + 1} игрок`;
    }
  }

  return arr;
}
