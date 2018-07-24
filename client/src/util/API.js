import Axios from "axios";

export default {
  register: function(data) {
    // console.log(data)
    // let headers = {
    //     'Content-Type': 'application/json',
    //     'Access-Contol-Allow-Origin': '*'
    // }
    return Axios.post("/api/register", data);
    // console.log(data)
  }
};
