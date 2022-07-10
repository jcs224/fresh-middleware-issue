/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import Map from '../islands/Map.tsx';
import { Head } from '$fresh/src/runtime/head.ts'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://esm.sh/leaflet@1.8.0/dist/leaflet.css" />
      </Head>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Map />
    </div>
  );
}
