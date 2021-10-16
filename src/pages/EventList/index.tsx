import { ReactNode } from "react";

import { Container, ContentView } from "./styles";

import Header from "components/Header";
import EventCard from "components/EventCard";

function EventList() {
  return (
    <Container>
      <Header />
      <ContentView>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ContentView>
    </Container>
  );
}

export default EventList;
