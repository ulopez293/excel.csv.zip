
async function saveCSV(data, name) {
    let blob = generateCSV(data)
    saveAs(blob, `${name}.csv`)
}