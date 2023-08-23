import React from "react";
import "../index.css";

export default function Projects() {
  const projectCardStyle = {
    marginLeft: "222px",
    marginRight: "226px",
    marginTop: "50px",
  };

  const sectionTitleStyle = {
    color: "var(--font-high-emphasis, #25282B)",
    textAlign: "center",
    fontFamily: "Playfair Display",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "72px",
  };

  const projectTitleStyle = {
    marginTop: "160px",
    color: "var(--font-high-emphasis, #25282B)",
    fontFamily: "Playfair Display",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "150%",
  };

  const projectDescriptionStyle = {
    color: "var(--font-medium-emphasis, #828282)",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%",
  };

  const buttonStyle = {
    background: "var(--bg-white, #FFF)",
    borderRadius: "24px",
    border: "1px solid var(--font-high-emphasis, #25282B)",
  };

  return (
    <div id="projects" style={projectCardStyle}>
      <div className="text-center">
        <h1 style={sectionTitleStyle}>Projects</h1>
        <svg
          width="100"
          height="4"
          viewBox="0 0 100 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="4" rx="2" fill="#FDC435" />
        </svg>

        <div
          style={{
            background: "var(--bg-white, #FFF)",
            marginTop: "80px",
            borderRadius: "15px",
            alignItems: "center",
          }}
        >
          {/* Project 1 */}
          <div className="row">
            <div className="col-6">
              <h1 style={projectTitleStyle}>Project Name</h1>
              <p style={projectDescriptionStyle}>
                I created this personal project in order to show how to create
                an interface in Figma using a portfolio as an example.
              </p>
              <button style={buttonStyle}>View Project</button>
            </div>
            <div className="col-6">
              <img src="/images/pexels-elly-fairytale-38232071.png" />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          style={{
            background: "var(--bg-white, #FFF)",
            marginTop: "80px",
            borderRadius: "15px",
          }}
        >
          <div className="row">
            <div className="col-6">
              <img src="/images/rectangle-7.png" alt="" />
            </div>
            <div className="col-6">
              <h1 style={projectTitleStyle}>Project Name</h1>
              <p style={projectDescriptionStyle}>
                What was your role, your deliverables, if the project was
                personal, freelancing.
              </p>
              <button style={buttonStyle}>View Project</button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          style={{
            background: "var(--bg-white, #FFF)",
            marginTop: "80px",
            borderRadius: "15px",
          }}
        >
          <div className="row">
            <div className="col-6">
              <h1 style={projectTitleStyle}>Project Name</h1>
              <p style={projectDescriptionStyle}>
                You can also add in this description the type of the project, if
                it was for web, mobile, electron.
              </p>
              <button style={buttonStyle}>View Project</button>
            </div>
            <div className="col-6">
              <img src="/images/rectangle-8.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
