import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

// fetch data from api to use in the home page dynamically at each request/reload
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // pass events in as object then catch at HomePage as a prop
  return {
    props: { events },
    // if data has not been found and data has changed, one second delay then revalidate
    revalidate: 1,
  };
}
