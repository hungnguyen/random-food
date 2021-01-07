import axios from "axios";

export function getAllUser() {
  return axios
    .get("/users")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function getSingleUser(data) {
  return axios
    .get(`/users/${data.userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function createUser(data) {
  return axios
    .post("/users", data)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function updateUser(data) {
  return axios
    .put(`/users/${data.userId}`, data.body)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function deleteUser(data) {
  return axios
    .delete(`/users/${data.userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}
