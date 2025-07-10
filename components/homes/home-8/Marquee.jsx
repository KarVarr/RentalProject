import React from "react";

export default function Marquee() {
  return (
    <div className="pt-40 pb-40 pt-md-0 pb-md-0">
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-3 mb-30 mb-md-0 z-index-1">
        <div className="marquee-track marquee-animation-1a">
          <div>Benefits</div>
          <div aria-hidden="true">H&M</div>
          <div aria-hidden="true">M&S</div>
          <div aria-hidden="true">SINSAY</div>
          <div aria-hidden="true">RESERVED</div>
          <div aria-hidden="true">& more</div>
          <div aria-hidden="true">H&M</div>
          <div aria-hidden="true">M&S</div>
          <div aria-hidden="true">SINSAY</div>
          <div aria-hidden="true">RESERVED</div>
          <div aria-hidden="true">& more</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-4 clearfix">
        <div className="marquee-track marquee-animation-2a float-end">
          <div>Unique Design</div>
          <div>Premium Support</div>
          <div aria-hidden="true">Lasting comfort</div>
          <div aria-hidden="true">Signature touch</div>
          <div aria-hidden="true">Elevated experience</div>
          <div aria-hidden="true">Authentic materials</div>
          <div aria-hidden="true">Intelligent design</div>
          <div aria-hidden="true">Exceptional value</div>
          <div aria-hidden="true">Unmatched precision</div>
          <div aria-hidden="true">Everyday luxury</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
    </div>
  );
}
