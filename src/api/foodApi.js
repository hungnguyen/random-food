import axios from "axios";

export function getAllFood() {
  return axios
    .get("/foods")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function getSingleFood(data) {
  return axios
    .get(`/foods/${data}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function createFood(data) {
  return axios
    .post("/foods", data.body)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function updateFood(data) {
  return axios
    .put(`/foods/${data.foodId}`, data.body)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function deleteFood(data) {
  return axios
    .delete(`/foods/${data}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}
