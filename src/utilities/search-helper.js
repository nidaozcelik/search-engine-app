const savedData = function (word, type) {

    let localStorageValue = []
    let localStrogeKey = type

    if (JSON.parse(localStorage.getItem(`${localStrogeKey}`))) {
        localStorageValue = JSON.parse(localStorage.getItem(`${localStrogeKey}`))
        localStorageValue.push(word)
        localStorage.setItem(`${localStrogeKey}`, JSON.stringify(localStorageValue))
    } else {
        localStorage.setItem(`${localStrogeKey}`, JSON.stringify([word]))
    }
}

module.exports = savedData