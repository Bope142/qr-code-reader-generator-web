const SetLinkDownloadQrcode = () => {
    if (document.querySelector('.qr-code-generate img').getAttribute('src') !== null) {
        document.querySelector('.btn-save-qr-code').setAttribute('href', document.querySelector('.qr-code-generate img').getAttribute('src'))
        document.querySelector('.btn-save-qr-code').setAttribute('download', 'qr-code-img.png')

    } else {
        document.querySelector('.btn-save-qr-code').setAttribute('href', document.querySelector('.qr-code-generate canvas').toDataURL())
        document.querySelector('.btn-save-qr-code').setAttribute('download', 'qr-code-img.png')
    }
}



async function generateQrCode() {
    let FormIsValid = true;
    document.querySelector('.btn-generate').addEventListener('click', () => {
        if (!document.querySelector('.btn-generate').classList.contains('generate-btn-await')) {
            document.querySelector('.btn-generate').classList.add('generate-btn-await')
            document.querySelector('.btn-generate').textContent = 'Please wait'
            document.querySelector('.form-information').childNodes.forEach((node, index, array) => {
                if (node.nodeType === 1) {
                    if (node.value === '') {
                        node.classList.add('invalid-input')
                        FormIsValid = false;
                    }
                }

            })
            //Qr code generator
            if (document.querySelectorAll('.form-information .invalid-input').length === 0) {
                //let result = await qrcode(qr_code_option)
                (async () => {
                    let response = await qrcode(qr_code_option);
                    document.querySelector('.btn-generate').textContent = 'Generate Qr Code'
                    document.querySelector('.btn-generate').classList.remove('generate-btn-await')
                    if (response) {
                        SetLinkDownloadQrcode()
                    }
                })();

            } else {
                document.querySelector('.btn-generate').textContent = 'Generate Qr Code'
                document.querySelector('.btn-generate').classList.remove('generate-btn-await')

            }
        }

    })

}

function qrcode(optionIndex) {
    try {
        switch (optionIndex) {
            case 0: {
                document.querySelector('.qr-code-generate').innerHTML = ''
                document.querySelector('.output-code').classList.remove('visible')
                new QRCode(document.querySelector(".qr-code-generate"), {
                    text: `mailto:${document.querySelector('#EmailUser').value}`,
                    colorDark: "#063970",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H

                });
                document.querySelector('.message-error').classList.remove('message-visible')
                document.querySelector('.output-code').classList.add('visible')
            }
            break;
        case 1: {
            document.querySelector('.qr-code-generate').innerHTML = ''
            document.querySelector('.output-code').classList.remove('visible')
            new QRCode(document.querySelector(".qr-code-generate"), {
                text: `${document.querySelector('#urlAddress').value}`,
                colorDark: "#063970",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H

            });
            document.querySelector('.message-error').classList.remove('message-visible')
            document.querySelector('.output-code').classList.add('visible')
        }
        break;
        case 2: {
            document.querySelector('.qr-code-generate').innerHTML = ''
            document.querySelector('.output-code').classList.remove('visible')
            new QRCode(document.querySelector(".qr-code-generate"), {
                text: `tel:${document.querySelector('#telAddress').value}`,
                colorDark: "#063970",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H

            });
            document.querySelector('.message-error').classList.remove('message-visible')
            document.querySelector('.output-code').classList.add('visible')
        }
        break;
        case 3: {
            document.querySelector('.qr-code-generate').innerHTML = ''
            document.querySelector('.output-code').classList.remove('visible')
            new QRCode(document.querySelector(".qr-code-generate"), {
                text: `sms:${document.querySelector('#SMSAddress').value}`,
                colorDark: "#063970",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H

            });
            document.querySelector('.message-error').classList.remove('message-visible')
            document.querySelector('.output-code').classList.add('visible')
        }
        break;
        case 4: {
            document.querySelector('.qr-code-generate').innerHTML = ''
            document.querySelector('.output-code').classList.remove('visible')
            let card = `NAME : ${document.querySelector('#UserName').value}\r\n`;
            card += `PHONE NUMBER: ${document.querySelector('#PhoneUser').value}\r\n`;
            card += `EMAIL ADDRESS: ${document.querySelector('#EmailUser').value}`;
            new QRCode(document.querySelector(".qr-code-generate"), {
                text: card,
                colorDark: "#063970",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H

            });
            document.querySelector('.message-error').classList.remove('message-visible')
            document.querySelector('.output-code').classList.add('visible')
        }
        break;
        case 5: {
            document.querySelector('.qr-code-generate').innerHTML = ''
            document.querySelector('.output-code').classList.remove('visible')
            new QRCode(document.querySelector(".qr-code-generate"), {
                text: `${document.querySelector('#textContent').value}`,
                colorDark: "#063970",
                colorLight: "#ffffff",

            });
            document.querySelector('.message-error').classList.remove('message-visible')
            document.querySelector('.output-code').classList.add('visible')
        }
        break;
        }
        clearValueInput()

        return true
    } catch (err) {
        console.log(err)
        document.querySelector('.qr-code-generate').innerHTML = ''
        document.querySelector('.output-code').classList.remove('visible')
        document.querySelector('.message-error').classList.add('message-visible')
        return false
    }
}

window.addEventListener('load', () => {
    generateQrCode()
})
