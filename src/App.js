/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useState, useEffect, use, useCallback
} from "react";
import Container from "react-materialize/lib/Container";
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

  function ativarButton() {
    const ativo = document.querySelector(".back-to-top");
    if (window.pageYOffset > 300) {
      ativo.classList.add("active");
    }
    if (window.pageYOffset == 0) {
      ativo.classList.remove("active");
    }
  }

  const backToTop = () => window.scrollTo(0, 0);

  window.addEventListener("scroll", ativarButton);

  return (
    <>
            {autenticado ? <HeaderLogado /> : <Header />}
            <Rotas />
            <a onClick={backToTop} className="back-to-top" id="scroll-to-top">
                <i className="icon-top material-icons prefix">keyboard_arrow_up</i>
            </a>
    </>
  );
}

export default App;
