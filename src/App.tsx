import { useState } from "react";
import GlobalStyles from "styles/globalStyles";

import EventList from "pages/EventList";
import SidePanel from "components/SidePanel";

function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(true);

  return (
    <>
      <GlobalStyles />
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
      <EventList />
    </>
  );
}

export default App;
