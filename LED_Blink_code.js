input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
    }
})
