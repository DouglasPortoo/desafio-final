import { Container } from "./styles";

import Logo from "../../assets/logo.svg";
import LogoAdmin from "../../assets/logoAdmin.svg";

import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";

import { OrderButton } from "../OrderButton";
import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function Header() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleNewPlate() {
    navigate(`/AdicionarPrato`);
  }

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      {user.role === "admin" ? <img src={LogoAdmin} alt="Logo" />: <img src={Logo} alt="Logo" />}
      <label htmlFor="search">Busque por pratos ou ingredientes</label>

      <Input
        placeholder="Busque por pratos ou ingredientes"
        id="search"
        type="text"
        icon={MagnifyingGlass}
      />
      {user.role === "admin" ? (
        <OrderButton title="Novo prato" onClick={() => handleNewPlate()} />
      ) : (
        <OrderButton title="Meu pedido (0)" />
      )}

      <SignOut size={62} onClick={handleSignOut} />
    </Container>
  );
}
