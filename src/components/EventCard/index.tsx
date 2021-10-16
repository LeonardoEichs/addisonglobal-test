import { ReactNode } from "react";

import {
  Container,
  Header,
  Content,
  MarketHeader,
  SelectionContainer,
} from "./styles";

import { WhiteButton } from "components/Button";

function EventCard() {
  return (
    <Container>
      <Header>
        <h1>Man. United vs Chelsea</h1>
      </Header>
      <hr />
      <Content>
        <MarketHeader>To WIN</MarketHeader>
        <SelectionContainer>
          <WhiteButton>
            <p>Arsenal</p>
            <p>1.2</p>
          </WhiteButton>
          <WhiteButton>
            <p>Arsenal</p>
            <p>1.2</p>
          </WhiteButton>
          <WhiteButton>
            <p>Arsenal</p>
            <p>1.2</p>
          </WhiteButton>
        </SelectionContainer>
      </Content>
    </Container>
  );
}

export default EventCard;
