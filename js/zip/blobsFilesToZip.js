
function blobsFilesToZip(blobsCSV) {
    let zip = new JSZip()
    blobsCSV.forEach(csv => {
        zip.file(`${csv.name}.csv`, csv.blob)
    })
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "SENAP-CSV-FILES.zip")
    })
}