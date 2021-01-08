import axios from "axios";

export function getAllCategory() {
  return axios
    .get("/categories")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function getSingleCategory(data) {
  return axios
    .get(`/categories/${data.categoryId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function createCategory(data) {
  return axios
    .post("/categories", data.body)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function updateCategory(data) {
  return axios
    .put(`/categories/${data.categoryId}`, data.body)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export function deleteCategory(data) {
  return axios
    .delete(`/categories/${data.categoryId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}
