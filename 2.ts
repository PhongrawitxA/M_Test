function getClockAngle(hh_mm:string):number {
    var splitted = hh_mm.split(":",2)
    var short = (parseInt(splitted[0]) * 30) + (parseInt(splitted[1]) * 0.5)
    var long = parseInt(splitted[1]) * 6
    var angle = 360 - Math.abs(long-short)
    return angle
}
console.log(getClockAngle("19:45"))