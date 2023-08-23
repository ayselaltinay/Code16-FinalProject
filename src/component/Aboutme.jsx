import React from "react";
import "../index.css";

export default function Aboutme() {
  return (
    <div id="aboutme" style={{ marginTop: "143px" }}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1
              style={{
                color: "var(--font-high-emphasis, #25282B)",
                fontFamily: "Playfair Display",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "72px",
              }}
            >
              About me
            </h1>
            <p
              style={{
                color: "var(--font-medium-emphasis, #828282)",
                fontFamily: "Nunito",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis
              tortor neque auctor dis ipsum. Pretium cras amet odio amet
              eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet
              sit.
            </p>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                borderRadius: "8px",
                background: "var(--brand-yellow, #FDC435)",
              }}
            >
              Resume
            </a>
          </div>
          <div className="col-6">
            <img
              src="/images/Ekran Resmi 2023-08-07 11.52.53.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
