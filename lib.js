class Alerts {
    constructor() {}

    error(str) {
        console.log('\x1b[31m', '[ ERROR ]', '\x1b[0m', str.toString())
    }

    warn(str) {
        console.log('\x1b[33m', '[ WARNING ]', '\x1b[0m', str.toString())
    }

    alert(str) {
        console.log('\x1b[32m', '[ ALERT ]', '\x1b[0m', str.toString())
    }
}

module.exports = new Alerts();

// thanks to my friend Atorify for this cool lib. (reposting if it's on his github profile)
