import { useState } from "react";

import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import Envelope from "./components/Envelope/Envelope";

export default function App() {
  const [opened, setOpened]=useState(false)
  return (
    <main>
        <Background />

        {opened ? (
          <Hero />
        ) : (
            <Envelope onOpen={() => setOpened(true)} />
        )}
    </main>
  );
}