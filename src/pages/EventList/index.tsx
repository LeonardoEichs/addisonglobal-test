import { useEffect, useState, ReactNode } from "react";

import { EventType } from "ts/types";

import { Container, ContentView } from "./styles";

import EventCard from "components/EventCard";

interface EventListProps {
  header: ReactNode;
}

function EventList({ header }: EventListProps) {
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
  if (events.length == 0) return <h1>There are no events!</h1>;

  return (
    <Container>
      {header}
      <ContentView>
        {events.map(
          (event: EventType) =>
            event.markets.length > 0 && (
              <EventCard key={event.id} event={event} />
            )
        )}
      </ContentView>
    </Container>
  );
}

export default EventList;
