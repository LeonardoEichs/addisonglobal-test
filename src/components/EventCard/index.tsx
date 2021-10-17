import { EventType } from "ts/types";

import {
  Container,
  Header,
  MarketCard,
  MarketHeader,
  SelectionContainer,
} from "./styles";

import { WhiteButton } from "components/Button";

interface EventCardProp {
  event: EventType;
}

function EventCard({ event }: EventCardProp) {
  return (
    <Container>
      <Header>
        <h1>{event.name}</h1>
      </Header>
      <hr />
      {event.markets.map((market) => (
        <MarketCard key={market.id}>
          <MarketHeader>{market.name}</MarketHeader>
          <SelectionContainer>
            {market.selections.map((selection) => (
              <WhiteButton>
                <p>{selection.name}</p>
                <p>{selection.price}</p>
              </WhiteButton>
            ))}
          </SelectionContainer>
        </MarketCard>
      ))}
    </Container>
  );
}

export default EventCard;
