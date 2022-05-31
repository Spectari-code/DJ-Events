import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

// fetch data from api to use in the home page dynamically at each request/reload
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // pass events in as object then catch at HomePage as a prop
  return {
    props: { events },
    // if data has not been found and data has changed, one second delay
    revalidate: 1,
  };
}
