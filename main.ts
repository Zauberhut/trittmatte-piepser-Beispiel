music.onEvent(MusicEvent.MelodyStarted, function () {
    for (let index = 0; index < 10; index++) {
        informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light1, StartbitRGBColors.Red)
        informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light2, StartbitRGBColors.Orange)
        basic.pause(200)
        informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light1, StartbitRGBColors.Orange)
        informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light2, StartbitRGBColors.Red)
        basic.pause(200)
    }
    informatiktheater.startbit_clearLight()
})
informatiktheater.trittmatte_pressed(informatiktheater.startbit_trittmattePort.port1, function () {
    music.playMelody("G B A G C5 G E C ", 180)
})
