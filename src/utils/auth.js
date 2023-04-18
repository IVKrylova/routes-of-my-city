const API_URL = "http://mycitybackend.pythonanywhere.com/api";

export const register = (data) => {
  return fetch(`${API_URL}/users/register`, {
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
          birth_date: data.captaindate,
          phone: data.captainphone,
          email: data.captainemail,
          is_captain: true,
        },
        {
          member_number: 2,
          full_name: data.player2name,
          birth_date: data.player2date,
          phone: data.player2phone,
          email: data.player2email,
          is_captain: false,
        },
      ],
    }),
  }).then((response) => {
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error("Unsuccessful registration");
    }
  });
};

export const login = (email, password) => {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
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
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
};
