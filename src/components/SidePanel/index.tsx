import { SelectedItemType } from "ts/types";

import { DarkButton } from "components/Button";

import {
  Container,
  Panel,
  SelectedItemsDisplay,
  SelectedItems,
} from "./styles";
import React from "react";

interface SidePanelProps {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: SelectedItemType[];
  setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItemType[]>>;
}

function SidePanel({
  isSidePanelOpen,
  setIsSidePanelOpen,
  selectedItems,
  setSelectedItems,
}: SidePanelProps) {
  if (!isSidePanelOpen) return null;
  return (
    <Container>
      <Panel>
        <span onClick={() => setIsSidePanelOpen(false)}>&#215;</span>
        <SelectedItemsDisplay>
          {selectedItems.map((selectedItem) => (
            <SelectedItems>
              <h1>
                {selectedItem.selection_name}{" "}
                {selectedItem.market_name.split(" ").slice(1).join(" ")}
              </h1>
              <h2>{selectedItem.selection_price}</h2>
              <DarkButton
                onClick={() => {
                  setSelectedItems((prevState) => {
                    const removedClickedItem = prevState.filter(
                      (element) =>
                        element.market_id !== selectedItem.market_id &&
                        element.selection_id !== selectedItem.selection_id
                    );
                    return removedClickedItem;
                  });
                }}
              >
                Delete
              </DarkButton>
            </SelectedItems>
          ))}
        </SelectedItemsDisplay>
      </Panel>
    </Container>
  );
}

export default SidePanel;
