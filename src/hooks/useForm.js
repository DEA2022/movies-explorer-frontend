import { useState } from 'react';

function useForm(initValues) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    let error = evt.target.validationMessage;
    let isValid = evt.target.closest("form").checkValidity();
    const updatedValues = { ...values, [name]: value };

    if (name === "name" && (!/^[a-zA-Zа-яА-ЯёЁ\s-]*$/.test(value))) {
      error = "Должно содержать только латиницу, кириллицу, пробел или дефис."
      isValid = false;
    }

    if (name === "email" && (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))) {
      error = "e-mail введен некорректно"
      isValid = false;
    }

    // Если значения не изменились, то такую форма не проходит валидацию.
    // Проверка должна быть самой последней.
    if (Object.entries(initValues).every(([name, value]) => updatedValues[name] === value)) {
      isValid = false;
    }

    setValues(updatedValues);
    setErrors({ ...errors, [name]: error });
    setIsValid(isValid);
  };

  function resetValidation() {
    setIsValid(false);
  }

  return {
    values,
    errors,
    handleChange,
    resetValidation,
    isValid
  }
}

export default useForm;