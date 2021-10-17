import React, { ReactNode } from "react";

import { Container } from "./styles";
import HamburguerMenu from "components/HamburguerMenu";

interface HeaderProps {
  openSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ openSidePanel }: HeaderProps) {
  return (
    <Container>
      <HamburguerMenu onClick={openSidePanel} />
    </Container>
  );
}

export default Header;
