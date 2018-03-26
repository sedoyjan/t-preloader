const progress = require('./index')
const { Bar, Clock } = progress
const progressBar = new Bar()
const clockPreloader = new Clock()

const update = (val) => {
    let value = val
    if (value <= 100) {
        value++
        setTimeout(() => {
            progressBar.update(value, 100)
            update(value)
        }, 50);
    } else {
        progressBar.finish()

        console.log('demo clock')
        clockPreloader.start()
        setTimeout(() => {
            clockPreloader.stop()
        }, 3000)

    }
}

console.log('demo progress bar')
update(1)

