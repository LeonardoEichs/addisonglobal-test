import { ReactNode } from "react";

import { Container } from "./styles";
import HamburguerMenu from "components/HamburguerMenu";

function Header() {
  return (
    <Container>
      <HamburguerMenu />
    </Container>
  );
}

export default Header;
