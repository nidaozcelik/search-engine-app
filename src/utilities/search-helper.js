let localStorageValue = []
let localStrogeKey

function savedData(word, type) {

    localStrogeKey = type

    if (JSON.parse(localStorage.getItem(`${localStrogeKey}`))) {
        localStorageValue = JSON.parse(localStorage.getItem(`${localStrogeKey}`))
        if (!localStorageValue.includes(word)) {
            localStorageValue.push(word)
        }
        localStorage.setItem(`${localStrogeKey}`, JSON.stringify(localStorageValue))
    } else {
        localStorage.setItem(`${localStrogeKey}`, JSON.stringify([word]))
    }
}

function removeData(word, type) {
    localStrogeKey = type
    localStorageValue = JSON.parse(localStorage.getItem(`${localStrogeKey}`))
    const filteredLocalStorageValue = localStorageValue.filter(item => item !== word)
    localStorage.setItem(`${localStrogeKey}`, JSON.stringify(filteredLocalStorageValue))
}

module.exports = {
    save: savedData,
    remove: removeData
}