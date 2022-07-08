
function generateCSV(json) {
    try {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(json[0])
        let csv = json.map(row => header.map(fieldName => 
        JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(header.join(','))
        csv = csv.join('\r\n')
    
        let BOM = "\uFEFF"
        csv = BOM + csv
        let blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
        return blob
    } catch (error) {
        let csv = "\r\n"
         
        let BOM = "\uFEFF"
        csv = BOM + csv
        let blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
        return blob
    }
    //saveAs(blob, `${name}.csv`)


    // let zip = new JSZip()
    // zip.file(`${name}.csv`, blob)
    // zip.generateAsync({type:"blob"})
    // .then(function(content) {
    //     // see FileSaver.js
    //     saveAs(content, "SENAP-CSV-FILES.zip")
    // })
}