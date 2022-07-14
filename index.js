const formEl = document.getElementById("form")
const inputNumberEl = document.getElementById("get-number")
const outputLengthEl = document.getElementById("output-length")
const outputVolumeEl = document.getElementById("output-volume")
const outputMassEl = document.getElementById("output-mass")

function createUnit(name, converter) {
    return {
        name,
        convert: converter
    }
}

const metersUnit = createUnit('meters', (meters) => (meters * 3.281).toFixed(3))
const feetUnit = createUnit('feet', (feet) => (feet / 3.281).toFixed(3))
const litersUnit = createUnit('liters', (liters) => (liters * 0.264).toFixed(3))
const gallonsUnit = createUnit('gallons', (gallons) => (gallons / 0.264).toFixed(3))
const kilogramsUnit = createUnit('kilograms', (kilograms) => (kilograms * 2.204).toFixed(3))
const poundsUnit = createUnit('pounds', (pounds) => (pounds / 2.204).toFixed(3))

inputNumberEl.addEventListener("focus", function () {
    inputNumberEl.value = ""
})

formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    const inputValue = parseInt(inputNumberEl.value)
    outputLengthEl.textContent = renderValue(inputValue, metersUnit, feetUnit)
    outputVolumeEl.textContent = renderValue(inputValue, litersUnit, gallonsUnit)
    outputMassEl.textContent = renderValue(inputValue, kilogramsUnit, poundsUnit)
})

function renderValue(value, unit1, unit2) {
    let str = `
    ${value} ${unit1.name} = ${unit1.convert(value)} ${unit2.name} | ${value} ${unit2.name} = ${unit2.convert(value)} ${unit1.name}
    `
    return str
}