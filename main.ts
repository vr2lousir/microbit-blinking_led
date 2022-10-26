let level = 0
basic.forever(function () {
    level = 0
    pins.analogWritePin(AnalogPin.P0, level)
    for (let index = 0; index < 102; index++) {
        level += 10
        pins.analogWritePin(AnalogPin.P0, level)
        basic.pause(10)
    }
    basic.pause(1000)
    for (let index = 0; index < 102; index++) {
        level += -10
        pins.analogWritePin(AnalogPin.P0, level)
        basic.pause(10)
    }
    basic.pause(1000)
})
