import React, { useEffect } from "react";
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 150, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 199, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const latestcollection=()=>{
    window.scrollTo({ top: 2200, behavior: "smooth" });
  }
  return (
    <div className="hero">
      <div className="hero-left" >
        <h2 data-aos="fade-right" data-aos-delay="100" data-aos-once="true">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon" data-aos="fade-right" data-aos-delay="300" data-aos-once="true" >
            <p>new</p>
            <img src="./images/discount1.jpeg" />
          </div>
          <p data-aos="fade-right" data-aos-delay="500" data-aos-once="true">collections</p>
          <p data-aos="fade-right" data-aos-delay="500" data-aos-once="true">for everyone</p>
        </div>
        <div className="hero-latest-btn" data-aos="fade-right" data-aos-delay="200" data-aos-once="true">
          <div onClick={latestcollection}>Latest collections</div>
          <img src="./images/arrow.png" className="h-9 block mix-blend-multiply arrow" />
        </div>
      </div>
      <div className="hero-right" data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
        <img src="./images/discount1.jpeg"/>
      </div>
    </div>
  );
}
