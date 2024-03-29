import React from "react";
import "./style.css";
import Button from "../../components/Button";
import HeroImg from "../../assets/img/brand/ourVision.svg";
const OurVision = () => {
  return (
    <div className="ourvision-container" id="vision">
      <div className="ourvision-container2">
        <div className="ourvision-container3">
          <div className="hero--left">
            <div
              className="ourvision--left-title"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              <u style={{ textDecorationThickness: "3px" }}>OUR VISION</u>
            </div>
            <div className="ourvision--left-description-a">
              Project Daylight receives its inspiration from The Icarus
              Syndrome, having seen many attempts in the DeFi 3.0 space receive
              setbacks as a result of lack of sustainability and breach of
              limitations.
            </div>
            <div className="ourvision--left-description-a">
              The Icarus syndrome is a characteristic of leaders in
              organizations who start excessively ambitious projects that fail,
              harming both themselves and others in the process. These leaders
              can't control their misdirected enthusiasm because they are too
              enthused to do so before it's too late.
            </div>
            <div className="ourvision--left-description-a">
              As a meticulous and financially propelled team, we aim to not only
              simplify earning over time, but to also make it a constant,
              reducing sell pressure, sustaining invest-ability and to set
              baseline limitations that will provide appreciative value to
              investors. Daylight Protocol operates in favor of the retail
              investor and the risk-free value aspect of DeFi, by implementing
              consistent and well-calculated mechanisms, stabilizing the
              protocol.
            </div>
            <Button
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              Litepaper →
            </Button>
          </div>
          <div className="hero--right wave2 aic">
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="icon--img"
              src={HeroImg}
              alt="brand animation"
              draggable="false"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
