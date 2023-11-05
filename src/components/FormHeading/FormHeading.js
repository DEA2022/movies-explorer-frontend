import './FormHeading.css';


function FormHeading({ name, additionalClass, heading }) {
  return (
    <h2 className={`form-heading ${additionalClass}`}>{heading} {name}</h2>
  )
}

export default FormHeading;