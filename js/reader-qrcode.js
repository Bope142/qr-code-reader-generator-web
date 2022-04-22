const html5QrCode = new Html5Qrcode("reader-qrcode");
async function getCameras() {
    let b = false
    await Html5Qrcode.getCameras().then(devices => {
        console.log(devices)
        b = true
    }).catch(err => {
        b = false
    })
    return b
}

const qrcodeResult = (decodedText, decodedResult) => {
    html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
        document.querySelector('#scan').textContent = "START SCANNING"
        document.querySelector('.result').innerHTML = decodedText;
        document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
    }).catch((err) => {
        // Stop failed, handle it.
    });
    console.log('decodedText :' + decodedText + ' \n decodedResult:' + decodedResult)
}
const configScan = {
    fps: 10,
    qrbox: {
        width: 250,
        height: 250
    }
}
async function ScanManager() {
    html5QrCode.start({
            facingMode: "environment"
        }, configScan, qrcodeResult)
        .then(s => {
            document.querySelector('#scan').textContent = "STOP SCAN"
        })
        .catch((err) => {
            document.querySelector('.modal-camera-access-denied').classList.add('modal-message-show')
            console.log(err)
        })
}





window.addEventListener('load', () => {
    document.querySelector('#scan').addEventListener('click', () => {
        if (document.querySelector('#scan').textContent = 'STOP SCAN') {
            document.querySelector('#scan').textContent = "START SCANNING"
        } else {
            ScanManager()
        }

    })
})
