import { EventType, SelectedItemType } from "ts/types";

import {
  Container,
  Header,
  MarketCard,
  MarketHeader,
  SelectionContainer,
} from "./styles";

import { WhiteButton } from "components/Button";

interface EventCardProp {
  event?: EventType;
  selectedItems: SelectedItemType[];
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItemType[]>>;
}

function EventCard({ event, setSelectedItems, selectedItems }: EventCardProp) {
  if (!event) return null;
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
              <WhiteButton
                key={selection.id}
                className={
                  // Check if market id and selection id are in the list of selections
                  selectedItems
                    .map((selected) => selected.market_id)
                    .includes(market.id) &&
                  selectedItems
                    .map((selected) => selected.selection_id)
                    .includes(selection.id)
                    ? "selected"
                    : ""
                }
                onClick={() => {
                  setSelectedItems((prevState) => {
                    // Remove the selected items that have the same market
                    // so can't bet on selection from same market at the same time
                    const removedSelectionFromSameMarket = prevState.filter(
                      (selectedItem) => selectedItem.market_id !== market.id
                    );
                    return [
                      ...removedSelectionFromSameMarket,
                      {
                        market_id: market.id,
                        market_name: market.name,
                        selection_id: selection.id,
                        selection_name: selection.name,
                        selection_price: selection.price,
                      },
                    ];
                  });
                }}
              >
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
