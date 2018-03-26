var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
var MOVE_UP = new Buffer('1b5b3141', 'hex').toString();
var CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString();

const stream = (stream) => {
    const log = (text) => {
        stream.write(MOVE_LEFT)
        stream.write(text)
    }
    return log
}

module.exports = stream(process.stdout)