import axios from "axios";

export default axios.create({
  baseURL: "https://eshoppers-db.firebaseio.com/",
  responseType: "json"
});