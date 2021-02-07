import React from "react"
import { Link } from "gatsby-plugin-intl"

const CourseInfo = props => {
  console.log(props.title)
  return (
    <div style={{ marginBottom: "20px" }}>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />

      {props.title === "Driver's Manual Course" ||
      props.title === "Educación para conductores adolescentes" ? (
        ``
      ) : (
        <Link to="/registration" className="waves-effect waves-light btn">
          Register
        </Link>
      )}
    </div>
  )
}

export default CourseInfo
