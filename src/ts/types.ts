/** Event Entity */
export type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

/** The response type of the API call */
export type ResponseType = EventType[];

/** Market Entity */
export type MarketType = {
  id: string;
  name: string;
  selections: SelectionType[];
};

/** Selection Entity */
export type SelectionType = {
  id: string;
  name: string;
  price: number;
};

// Selected Entity
export type SelectedItemType = {
  market_id: string;
  market_name: string;
  selection_id: string;
  selection_name: string;
  selection_price: number;
};
