const toast = new Toasty({
  progressBar: true,
  enableSounds: true,
  duration: 1000,
})

const requestXRP = () => {
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://economia.awesomeapi.com.br/last/XRP-BRL')

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        document.getElementById('xrp-avg').innerHTML = 'R$' + response.XRPBRL.ask
        document.getElementById('xrp-high').innerHTML = 'HIGH: ' + 'R$' + response.XRPBRL.high
        document.getElementById('xrp-low').innerHTML = 'LOW: ' + 'R$' + response.XRPBRL.low
        toast.success('Dados atualizados...')
      }
    }
  }

  xhr.send()
}

requestXRP()
