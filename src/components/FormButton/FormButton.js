import './FormButton.css';


function FormButton({ textButton, isValid }) {
  return (
    <button className={`form-button ${isValid ? '' : 'form-button_disabled'}`} type="submit" disabled={!isValid} aria-label={textButton}>{textButton}</button>
  )
}

export default FormButton;