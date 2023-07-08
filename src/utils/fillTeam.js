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
  }

  return arr;
}
