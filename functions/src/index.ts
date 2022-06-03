// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//admin.initializeApp();

// export const addproRole = functions.https.onCall((data, context) => {
//   //get user and add custom claim
//   return admin
//     .auth()
//     .getUserByEmail(data.email)
//     .then(user => {
//       return admin.auth().setCustomUserClaims(user.uid, {
//         pro: true
//       });
//     })
//     .then(() => {
//       return {
//         message: `Success! ${data.email} has been made a pro`
//       };
//     })
//     .catch(err => {
//       return err;
//     });
// });

export async function addProRole(email: string) {
  //get user and add custom claim
  return admin
    .auth()
    .getUserByEmail(email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        pro: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${email} has been made a pro`
      };
    })
    .catch(err => {
      return err;
    });
}
