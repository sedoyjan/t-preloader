const log = require('./stream')
const hour = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛']
let interval = null

const getProgressLine = (percent) => {
    const line = []

    for (let index = 0; index <= 100; index++) {
        if (index <= percent) {
            line.push('\u2588')
        } else {
            line.push('\u2591')
        }
    }

    return `\x1b[47m\x1b[32m${line.join('')}\x1b[0m ${percent}% `
}


class Bar {
    update(value, total) {
        const percent = Math.round(value * 100 / total)
        if (percent <= 100) {
            log(getProgressLine(percent))
        } else {
            console.log('')
        }
    }
    finish() {
        console.log('\x1b[0m')
    }
}

class Clock {
    constructor() {
        this.interval = null
    }
    start() {
        let index = 0
        this.interval = setInterval(() => {
            index++
            if (index >= hour.length) {
                index = 0
            }
            log(`${hour[index]}  `)
        }, 100)
    }
    stop() {
        if (this.interval) {
            clearInterval(this.interval)
            console.log('')
        }
    }
}


module.exports = {
    Bar: Bar,
    Clock: Clock
}