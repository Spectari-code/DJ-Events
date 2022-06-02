import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  // fetch data
  const res = await fetch(`${API_URL}/api/events`);
  // parse the response
  const events = await res.json();

  // map through each event(evt) and return an array of objects {params: {slug: evt.slug}}
  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
      revalidate: 1,
    },
  };
}
