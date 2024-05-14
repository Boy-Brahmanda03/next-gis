export async function getHospital(token) {
  console.log(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital");
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.json();
}

export async function getHospitalById(id, token) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital/" + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!res.ok) {
    throw new Error("Erorr Fetching Data");
  }

  return res.json();
}

export async function createHospital(formData, token) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  });
  return res.json();
}

export async function editHospital(id, formData, token) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital/" + id, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  });
  return res.json();
}

export async function deleteHospital(id, token) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/hospital/" + id, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.json();
}

export async function register(name, email, password) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}
