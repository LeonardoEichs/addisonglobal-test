import React from "react";
import GlobalStyles from "styles/globalStyles";

import EventList from "pages/EventList";
import SidePanel from "components/SidePanel";

function App() {
  return (
    <>
      <GlobalStyles />
      <SidePanel />
      <EventList />
    </>
  );
}

export default App;
