
function s2ab(s) {
    //convertir a arrayBuffer
    var buf = new ArrayBuffer(s.length);
    //crear uint8array
    var view = new Uint8Array(buf);
    //convertir a octeto
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function generateExcel({name, data, headers = [[]]}) {
    let wb = XLSX.utils.book_new()
    //XLSX.utils.sheet_add_aoa(wb, headers)
    wb.Props = {
        Title: "SheetJS Tutorial",
        Subject: "Test",
        Author: "Red Stapler",
        CreatedDate: new Date()
    }
    wb.SheetNames.push("Document")
    let ws = XLSX.utils.json_to_sheet(data)
    //let ws = XLSX.utils.sheet_add_json(wb, data, { origin: 'A2', skipHeader: true })
    wb.Sheets["Document"] = ws
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), `${name}.xlsx`)
}