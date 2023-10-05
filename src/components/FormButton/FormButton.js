import './FormButton.css';


function FormButton({ textButton, additionalClass }) {
  return (
    <button className={`form-button ${additionalClass}`} type="submit" aria-label={textButton}>{textButton}</button>
  )
}

export default FormButton;