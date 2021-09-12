import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log("Colors get res: ", res);
      return res.data;
    })
    .catch((err) => {
      console.log("Colors get err: ", err);
    });
};

export default fetchColorService;
