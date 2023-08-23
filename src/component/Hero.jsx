import React from "react";
import "../index.css";

export default function Hero() {
  const cardTitleStyle = {
    marginBottom: "12px",
    width: "486px",
    color: "var(--brand-yellow, #FDC435)",
    fontFamily: "Nunito",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
    zIndex: 1,
  };

  const cardSubtitleStyle = {
    marginBottom: "32px",
    width: "486px",
    color: "var(--gray-1, #333)",
    fontFamily: "Playfair Display",
    fontSize: "64px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
  };

  const cardTextStyle = {
    marginBottom: "32px",
    width: "486px",
    color: "var(--gray-3, #828282)",
    fontFamily: "Nunito",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "36px",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div style={{ width: "18rem" }}>
            <div className="card-body">
              <p style={cardTitleStyle} className="card-title">
                UI/UX Designer
              </p>
              <p
                style={cardSubtitleStyle}
                className="card-subtitle mb-2 text-body-secondary"
              >
                Hello, my name is Madelyn Torff
              </p>
              <p style={cardTextStyle} className="card-text">
                Short text with details about you, what you do or your
                professional career. You can add more information on the about
                page.
              </p>
              <a href="index.html#projects">
                <button
                  style={{
                    borderRadius: "8px",
                    background: "var(--brand-yellow, #FDC435)",
                  }}
                >
                  Projects
                </button>
              </a>
              <button
                style={{
                  borderRadius: "8px",
                  border: "2px solid var(--bg-line, #25282B)",
                }}
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img
            style={{
              width: "720px",
              height: "629px",
              flexShrink: 0,
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: -1,
            }}
            src="/images/image.png"
          />
        </div>
      </div>
    </div>
  );
}
