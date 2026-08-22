import { useState } from "react";

import Envelope from "./components/Envelope/Envelope";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Timeline from "./components/Timeline/Timeline";
import Memories from "./components/Memories/Memories";
import LoveLetter from "./components/LoveLetter/LoveLetter";
import FinalSurprise from "./components/FinalSurprise/FinalSurprise";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      {!opened && (
        <Envelope
          onOpen={() => setOpened(true)}
        />
      )}

      {opened &&(
        <>
          <Hero />
          <Story />
          <Timeline />
          <Memories />
          <LoveLetter />
          <FinalSurprise />
        </>
      ) }
    </main>
  );
}