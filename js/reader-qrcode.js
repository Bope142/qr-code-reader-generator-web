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
        document.querySelector('#scan').textContent = "START SCANNING"
        document.querySelector('.modal-result-scan .message .head').innerHTML = 'Scan result'
        document.querySelector('.result').innerHTML = decodedText;
        document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
    }).catch((err) => {
        document.querySelector('#scan').textContent = "START SCANNING"
        document.querySelector('.modal-result-scan .message .head').innerHTML = 'Scan error'
        document.querySelector('.result').innerHTML = 'QR code error reading ! Please try again';
        document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
    });
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


const stopScan = () => {
    html5QrCode.stop().then((ignore) => {
        document.querySelector('#scan').textContent = "START SCANNING"
    }).catch((err) => {
        document.querySelector('.modal-result-scan .message .head').innerHTML = 'Scan stop error'
        document.querySelector('.result').innerHTML = `QR code error stop ! Please try again [error:${err}]`;
        document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
    });
}

async function scanImage(img) {
    html5QrCode.scanFile(img, true)
        .then(decodedText => {
            document.querySelector('.modal-result-scan .message .head').innerHTML = ' Scan result'
            document.querySelector('.result').innerHTML = decodedText;
            document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
        })
        .catch(err => {
            document.querySelector('.modal-result-scan .message .head').innerHTML = 'Scan error'
            document.querySelector('.result').innerHTML = 'QR code error reading ! Please try again';
            document.querySelector('.modal-result-scan').classList.add('modal-result-scan-show')
        });
}
window.addEventListener('load', () => {
    document.querySelector('#scan').addEventListener('click', () => {
        if (document.querySelector('#scan').textContent === 'STOP SCAN') {
            document.querySelector('#scan').textContent = "START SCANNING"
            stopScan()
        } else {
            ScanManager()

        }

    })
    document.querySelector('.galery-image').addEventListener('click', () => {
        document.querySelector('#qr-input-file').click()
    })
    document.querySelector('#qr-input-file').addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            scanImage(e.target.files[0])
        }
    })
})
