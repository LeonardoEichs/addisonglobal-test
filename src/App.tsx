import { useState } from "react";
import GlobalStyles from "styles/globalStyles";

import EventList from "pages/EventList";
import SidePanel from "components/SidePanel";
import Header from "components/Header";
import EventCard from "components/EventCard";

import { SelectedItemType } from "ts/types";

function App() {
  const [selectedItems, setSelectedItems] = useState<SelectedItemType[]>([]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <EventList
        header={<Header openSidePanel={() => setIsSidePanelOpen(true)} />}
        card={
          <EventCard
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        }
      />
    </>
  );
}

export default App;
