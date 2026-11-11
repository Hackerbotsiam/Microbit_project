basic.forever(function () {
    if (input.lightLevel() < 30) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    basic.pause(100)
})
