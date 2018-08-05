import Axios from "axios";

export default {
  // post user to okta and trigger email password recovery
  forgotPassword: function(user) {
    Axios.post(
      "https://dev-298287.oktapreview.com/api/v1/authn/recovery/password",
      {
        username: user,
        factorType: "EMAIL"
      }
    ).then(res => console.log(res))
    .catch(err => console.log("Recovery Error: " + err))
  },
  // deactivateAcct: function(userId){
  //   Axios.post(
  //       `https://dev-298287.oktapreview.com/api/v1/users/${userId}/lifecycle/deactivate`
  //   ).then(res => console.log(res))
  //   .catch(err => console.log("Deactivation Error: " + err))
  // }
};
