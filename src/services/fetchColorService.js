import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = (setter) => {
  axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log("Colors get res: ", res);
      setter(res.data);
    })
    .catch((err) => {
      console.log("Colors get err: ", err);
    });
};

export default fetchColorService;
