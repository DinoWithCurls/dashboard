import React, {useState} from "react";
import { BrowserRouter} from "react-router-dom";
import { ProtectedNavigation, AuthNavigation } from './navigation';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return (
    <BrowserRouter>
    {
      isLoggedIn ? (
        <ProtectedNavigation setLogout={logOut} />
      ) : (
        <AuthNavigation setLogin={logIn} />
      )
    }
    </BrowserRouter>
  );
}

export default App;
