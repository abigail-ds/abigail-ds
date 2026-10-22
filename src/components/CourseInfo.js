import React from "react"

const CourseInfo = props => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
      {props.enrollUrl && (
        <div style={{ marginTop: "28px", marginBottom: "12px", textAlign: "center" }}>
          <a
            href={props.enrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              fontSize: "1rem",
              height: "auto",
              padding: "12px 42px",
              lineHeight: "1.5",
              display: "inline-block",
            }}
          >
            {props.enrollLabel || "Enroll Now"}
          </a>
        </div>
      )}
    </div>
  )
}

export default CourseInfo
