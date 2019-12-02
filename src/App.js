/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useState, useEffect, use, useCallback
} from "react";
import { Header } from "./components/Header";
import HeaderLogado from "./components/Header/Logado";
import Rotas from "./routes/routes";
import { isAuthenticated } from "./services/auth";

function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [deslogar, setDeslogar] = useState(false);
  const [time, setTime] = useState(false);


  const handleUpdateState = () => {
    if (isAuthenticated()) setAutenticado(true);
    // if (isAuthenticated()) setAutenticado(false);
  };

  const handleUpdate = () => {
    if (!isAuthenticated()) setAutenticado(false);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleUpdateState();
    });
  }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      handleUpdate();
    });
  }, 1000);


  return (
    <>
            {autenticado ? <HeaderLogado /> : <Header />}
            <Rotas />
    </>
  );
}

export default App;
