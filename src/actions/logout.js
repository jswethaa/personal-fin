import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helper";

export async function logoutAction() {
 
  deleteItem({
    key: "userName"
  })
  deleteItem({
    key: "budgets"
  })
  deleteItem({
    key: "expenses"
  })
  toast.success("You’ve deleted your account!")

  return redirect("/")
}