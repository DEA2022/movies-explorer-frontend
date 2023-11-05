function saveStateToLocalStorage(key, value) {
    localStorage.setItem(`state_${key}`, JSON.stringify(value))
}

export default saveStateToLocalStorage
