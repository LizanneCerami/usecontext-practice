// 1. import useContext
import { useContext } from "react";
// 2. import variable
import { UserStatus } from "../App.js";
import SubPage from "./SubPage.jsx";
import Button from "./Button.jsx"

export default function Page () {

  // 3. Use UserText
  const [signedIn, setSignedIn] = useContext(UserStatus)

  return (

    <>
      <h2>Page</h2>
      <Button />
      <SubPage />
    </>
  )
}