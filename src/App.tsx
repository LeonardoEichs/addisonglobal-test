import { useState } from "react";
import GlobalStyles from "styles/globalStyles";

import EventList from "pages/EventList";
import SidePanel from "components/SidePanel";
import Header from "components/Header";

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(true);

  return (
    <>
      <GlobalStyles />
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
      <EventList
        header={<Header openSidePanel={() => setIsSidePanelOpen(true)} />}
      />
    </>
  );
}

export default App;
