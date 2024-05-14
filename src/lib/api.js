export async function getHospital(token) {
  const res = await fetch(process.env.LOCAL_API_URL + "/hospital", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.json();
}

export async function getHospitalById(id) {
  const res = await fetch(process.env.LOCAL_API_URL + "/hospital" + id, {
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

export async function login(email, password) {
  console.log(process.env.NEXT_PUBLIC_LOCAL_API_URL);
  const res = await fetch(process.env.NEXT_PUBLIC_LOCAL_API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log(data);
  if (!data.success) {
    throw new Error(data.message);
  }
  return data;
}
