import './FormHeading.css';


function FormHeading({ heading, additionalClass }) {
  return (
    <h2 className={`form-heading ${additionalClass}`}>{heading}</h2>
  )
}

export default FormHeading;