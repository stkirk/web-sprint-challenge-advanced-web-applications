import axiosWithAuth from "../helpers/axiosWithAuth";

export const fetchColorService = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log("Colors get res: ", res);
      return res;
    })
    .catch((err) => {
      console.log("Colors get err: ", err);
    });
};
