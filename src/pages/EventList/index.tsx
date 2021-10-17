import React, { ReactNode } from "react";

import { Container, ContentView } from "./styles";

import EventCard from "components/EventCard";

interface EventListProps {
  header: ReactNode;
}

function EventList({ header }: EventListProps) {
  return (
    <Container>
      {header}
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
