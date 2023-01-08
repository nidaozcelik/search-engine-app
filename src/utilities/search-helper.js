const savedData = function (word) {
    localStorage.setItem(JSON.stringify(word), [])
}

module.exports = savedData