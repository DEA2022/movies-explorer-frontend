import './FormButton.css';


function FormButton({ textButton, isValid, disabled }) {
  return (
    <button className={`form-button ${isValid ? '' : 'form-button_disabled'}`} type="submit" disabled={!isValid || disabled} aria-label={textButton}>{textButton}</button>
  )
}

export default FormButton;