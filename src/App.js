// 1. Import createContext
import { createContext, useState } from 'react';
import Page from './components/Page';
import './App.css';

// 2. create and export
export const UserStatus = createContext(null)

function App() {

  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      {/* 3. Establish a provider */}
      <UserStatus.Provider value={[signedIn, setSignedIn]}>
          <h1> {signedIn ? "Sign In" : "Sign Out"}</h1>
        <Page />
      </UserStatus.Provider>
    </>
  );
}

export default App;
