import React, { useEffect, useState, ReactElement } from "react";

import { EventType } from "ts/types";

import { Container, ContentView } from "./styles";

interface EventListProps {
  header: ReactElement;
  card: ReactElement;
}

function EventList({ header, card }: EventListProps) {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchData = await fetch("http://localhost:3333/events");
        const dataJSON = await fetchData.json();
        setEvents(dataJSON);
        console.log(dataJSON);
      } catch (error) {}
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (events.length === 0) return <h1>There are no events!</h1>;

  return (
    <Container>
      {header}
      <ContentView>
        {events.map(
          (event: EventType) =>
            event.markets.length > 0 &&
            React.cloneElement(card, { key: event.id, event: event })
        )}
      </ContentView>
    </Container>
  );
}

export default EventList;
