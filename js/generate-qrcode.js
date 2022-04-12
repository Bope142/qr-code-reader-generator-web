var i = 0;
const generateQrCode = () => {
    document.querySelector('.btn-generate').addEventListener('click', () => {
        document.querySelector('.form-information').childNodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.value === '') {
                    node.classList.add('invalid-input')
                }
            }
        })
        console.log(qr_code_option)
        qrcode(qr_code_option)
        i = 1;

    })

}
const qrcode = (optionIndex) => {
    switch (optionIndex) {
        case 0: {
            if (i === 0) {
                var qrc = new QRCode(document.querySelector(".qr-code-generate"), {
                    text: `mailto:${document.querySelector('#EmailUser').value}`,
                    colorDark: "#063970",
                    colorLight: "#ffffff",
                    // QRCode.CorrectLevel.L | QRCode.CorrectLevel.M | QRCode.CorrectLevel.H
                    //correctLevel: QRCode.CorrectLevel.H

                });
                document.querySelector('.output-code').classList.add('visible')
            } else {
                var qrc = new QRCode(document.querySelector(".qr-code-generate"), {
                    text: `mailto:${document.querySelector('#EmailUser').value}`,
                    colorDark: "#063970",
                    colorLight: "#ffffff",
                    // QRCode.CorrectLevel.L | QRCode.CorrectLevel.M | QRCode.CorrectLevel.H
                    //correctLevel: QRCode.CorrectLevel.H

                });
                qrc.clear()
                qrc.makeCode(`mailto:${document.querySelector('#EmailUser').value}`)
            }

        }
        break;
    case 1: {
        var qrc = new QRCode(document.querySelector(".qr-code-generate"), {
            text: `mailto:${document.querySelector('#urlAddress').value}`,
            colorDark: "#063970",
            colorLight: "#ffffff",
            // QRCode.CorrectLevel.L | QRCode.CorrectLevel.M | QRCode.CorrectLevel.H
            correctLevel: QRCode.CorrectLevel.H

        });
        document.querySelector('.output-code').classList.add('visible')
    }
    break;
    }
}

window.addEventListener('load', () => {
    generateQrCode()
})
