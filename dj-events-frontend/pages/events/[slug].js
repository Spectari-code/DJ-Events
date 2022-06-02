import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Event.module.css";
import { API_URL } from "@/config/index";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>

          {/* not a link, instead calls a method, deleteEvent */}
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {/* Check if image is there then render in div */}
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} alt="" />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
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
