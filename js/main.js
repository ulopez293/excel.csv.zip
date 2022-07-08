
let fechaInicio = document.getElementById("fechaInicio").value.trim() + ` 00:00:00 `
let fechaFin = document.getElementById("fechaFin").value.trim() + ` 00:00:00 `

document.getElementById("1_noticia_criminal").addEventListener("click", async () => {
    let data = await getData(`senap/export/1_noticia_criminal/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-01CarpetasInvestigacion-${fechaInicio}${fechaFin}`)
})
document.getElementById("2_carpeta_investigacion").addEventListener("click", async () => {
    let data = await getData(`senap/export/2_carpeta_investigacion/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-02CarpetasInvestigacion-${fechaInicio}${fechaFin}`)
})
document.getElementById("3_actos_investigacion").addEventListener("click", async () => {
    let data = await getData(`senap/export/3_actos_investigacion/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-03ActosInvestigacion-${fechaInicio}${fechaFin}`)
})
document.getElementById("4_delitos").addEventListener("click", async () => {
    let data = await getData(`senap/export/4_delitos/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-04Delitos-${fechaInicio}${fechaFin}`)
})
document.getElementById("5_aseguramientos").addEventListener("click", async () => {
    let data = await getData(`senap/export/5_aseguramientos/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-05Aseguramientos-${fechaInicio}${fechaFin}`)
})
document.getElementById("6_victimas_delitos").addEventListener("click", async () => {
    let data = await getData(`senap/export/6_victimas_delitos/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-06VictimasDelito-${fechaInicio}${fechaFin}`)
})
document.getElementById("7_imputados_delitos").addEventListener("click", async () => {
    let data = await getData(`senap/export/7_imputados_delitos/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-07ImputadoDelito-${fechaInicio}${fechaFin}`)
})
document.getElementById("8_victima_imputado").addEventListener("click", async () => {
    let data = await getData(`senap/export/8_victima_imputado/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-08VictimaImputado-${fechaInicio}${fechaFin}`)
})
document.getElementById("9_determinacion").addEventListener("click", async () => {
    let data = await getData(`senap/export/9_determinacion/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-9Determinacion-${fechaInicio}${fechaFin}`)
})
document.getElementById("10_proceso").addEventListener("click", async () => {
    let data = await getData(`senap/export/10_proceso/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-10Proceso-${fechaInicio}${fechaFin}`)
})
document.getElementById("11_mandamientos_judiciales").addEventListener("click", async () => {
    let data = await getData(`senap/export/11_mandamientos_judiciales/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-11MandamientosJudiciales-${fechaInicio}${fechaFin}`)
})
document.getElementById("12_proceso_penal_audiencia").addEventListener("click", async () => {
    let data = await getData(`senap/export/12_proceso_penal_audiencia/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-12ProcesoPenalAudiencia-${fechaInicio}${fechaFin}`)
})
document.getElementById("13_medidas_cautelares").addEventListener("click", async () => {
    let data = await getData(`senap/export/13_medidas_cautelares/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-13MedidasCautelares-${fechaInicio}${fechaFin}`)
})
document.getElementById("14_etapa_intermedia").addEventListener("click", async () => {
    let data = await getData(`senap/export/14_etapa_intermedia/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-14EtapaIntermedia-${fechaInicio}${fechaFin}`)
})
document.getElementById("15_masc").addEventListener("click", async () => {
    let data = await getData(`senap/export/15_masc/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-15MASC-${fechaInicio}${fechaFin}`)
})
document.getElementById("16_sobreseimiento").addEventListener("click", async () => {
    let data = await getData(`senap/export/16_sobreseimiento/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-16Sobreseimiento-${fechaInicio}${fechaFin}`)
})
document.getElementById("17_suspencion_condicional").addEventListener("click", async () => {
    let data = await getData(`senap/export/17_suspencion_condicional/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-17SuspensionCondicional-${fechaInicio}${fechaFin}`)
})
document.getElementById("18_sentencia").addEventListener("click", async () => {
    let data = await getData(`senap/export/18_sentencia/${fechaInicio}/${fechaFin}`)
    saveCSV(data, `SENAP-18Sentencia-${fechaInicio}${fechaFin}`)
})

document.getElementById("download_all").addEventListener("click", async () => {
    let blobsCSV = []
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/1_noticia_criminal/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-01CarpetasInvestigacion-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/2_carpeta_investigacion/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-02CarpetasInvestigacion-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/3_actos_investigacion/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-03ActosInvestigacion-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/4_delitos/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-04Delitos-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/5_aseguramientos/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-05Aseguramientos-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/6_victimas_delitos/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-06VictimasDelito-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/7_imputados_delitos/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-07ImputadoDelito-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/8_victima_imputado/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-08VictimaImputado-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/9_determinacion/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-9Determinacion-${fechaInicio}${fechaFin}`
    })

    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/10_proceso/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-10Proceso-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/11_mandamientos_judiciales/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-11MandamientosJudiciales-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/12_proceso_penal_audiencia/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-12ProcesoPenalAudiencia-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/13_medidas_cautelares/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-13MedidasCautelares-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/14_etapa_intermedia/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-14EtapaIntermedia-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/15_masc/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-15MASC-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/16_sobreseimiento/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-16Sobreseimiento-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/17_suspencion_condicional/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-17SuspensionCondicional-${fechaInicio}${fechaFin}`
    })
    blobsCSV.push({
        blob: generateCSV(await getData(`senap/export/18_sentencia/${fechaInicio}/${fechaFin}`)),
        name: `SENAP-18Sentencia-${fechaInicio}${fechaFin}`
    })

    blobsFilesToZip(blobsCSV)
})