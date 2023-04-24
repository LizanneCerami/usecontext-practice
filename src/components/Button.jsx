import { useContext } from "react"

import { UserStatus } from "../App.js"

export default function Button() {

  const[signedIn, setSignedIn] = useContext(UserStatus)

  return (

    <>
      <button onClick= {() => setSignedIn(!signedIn)}>
        {signedIn ? "Sign Out" : "Sign In"}
      </button>
      
    </>
  )
}