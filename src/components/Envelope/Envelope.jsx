import "./Envelope.css";
import { motion } from "framer-motion";

import Paper from "../../assets/svg/envelope/Paper";
import Back from "../../assets/svg/envelope/Back";
import Front from "../../assets/svg/envelope/Front";
import Flap from "../../assets/svg/envelope/Flap";
import Seal from "../../assets/svg/envelope/Seal";

export default function Envelope({ onOpen }) {
  return (
    <section className="scene">

      <motion.div
        className="envelope"
        whileHover={{ y: -8 }}
        transition={{ duration: .45 }}
      >

        <div className="ambient-light"/>

        <div className="paper-layer">
          <Paper/>
        </div>

        <div className="back-layer">
          <Back/>
        </div>

        <div className="front-layer">
          <Front/>
        </div>

        <div className="flap-layer">
          <Flap/>
        </div>

        <button
          className="seal-layer"
          onClick={onOpen}
          aria-label="Open Envelope"
        >
          <Seal/>
        </button>

      </motion.div>

      <span className="click-text">
        Click To Open
      </span>

    </section>
  );
}