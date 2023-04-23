const API_URL = "http://mycitybackend.pythonanywhere.com/api";

export const register = (data) => {
  return fetch(`${API_URL}/users/register/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      team: {
        name: data.team,
      },
      members: [
        {
          member_number: 1,
          full_name: data.captainname,
          birth_date: `${data.captaindate.toISOString().slice(0, 10)}`,
          phone: data.captainphone,
          email: data.captainemail,
          is_captain: true,
        },
        {
          member_number: 2,
          full_name: data.player2name,
          birth_date: `${data.player2date.toISOString().slice(0, 10)}`,
          phone: data.player2phone,
          email: data.player2email,
          is_captain: false,
        },
      ],
    }),
  }).then(checkResponse);
};

export const login = (data) => {
  return fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: data.email, password: data.password }),
  }).then(checkResponse);
};
export const checkToken = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

const checkResponse = (response) => {
  if (response.ok) return response.json();
  return response.json().then((response) => {
    return response;
  });
};
