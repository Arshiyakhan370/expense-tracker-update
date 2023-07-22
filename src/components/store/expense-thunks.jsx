import axios from "axios";
import { expenseActions } from "./expense-slice";
import { modalActions } from "./modal-slice";

export const getData = (email) => {
  return async (dispatch) => {
    
    if (email) {
      console.log(email,"getData");
      
      let URL = `https://authentication-expense-tracker-default-rtdb.firebaseio.com/${email}.json`;

      try {
        const res = await axios(URL);
        dispatch(expenseActions.replaceExpense(res?.data));
          } catch (error) {
        dispatch(
          modalActions.popUpAlertHandler({
            message: "Fetching data failed!",
            severity: "error",
          })
        );
      }
    }else{
      dispatch(expenseActions.replaceExpense({}));
    }
  };
};

export const putData = (expenses,email) => {
  return async (dispatch) => {
    //let email = localStorage.getItem();

    if (email) {
      //email = email.replace("@", "").replace(".", "");
      let URL = `https://authentication-expense-tracker-default-rtdb.firebaseio.com/${email}.json`;

      try {
        await axios.put(URL, expenses);
        dispatch(
          modalActions.popUpAlertHandler({
            message: "Request sent successfully",
            severity: "success",
          })
        );
      } catch (error) {
        dispatch(
          modalActions.popUpAlertHandler({
            message: "Request sent failed!",
            severity: "error",
          })
        );
      }
    }
  };
};
