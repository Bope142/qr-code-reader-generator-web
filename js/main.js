var qr_code_option = 0;
const clearValueInput = () => {
    document.querySelectorAll('.form-information input,textarea').forEach(controll => controll.value = '')
}
const inputEvent = () => {
    document.querySelectorAll('.form-information input,textarea').forEach(controll => {
        controll.addEventListener('focus', () => {
            if (controll.classList.contains('invalid-input')) {
                controll.classList.remove('invalid-input')
            }
        })
        controll.addEventListener('blur', () => {
            if (controll.value === '') {
                controll.classList.add('invalid-input')
            }
        })
    })
}
const openModalGenerator = () => {
    document.querySelectorAll('.box-click').forEach((box, index) => {
        box.addEventListener('click', () => {
            switch (index) {
                case 0: {
                    document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an email address'
                    document.querySelector('.form-information').innerHTML = `
                <input type="email" name="emailAddress" id="EmailUser" placeholder="Write your email address here (e.g: abc@gmail.com)" autocomplete="off">
              `
                    showModalGenerate()
                }
                break;
            case 1: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Website URL'
                document.querySelector('.form-information').innerHTML = `
                <input type="url" name="urlAddress" id="urlAddress" placeholder="Write the site URL here (e.g: https://www.google.com)" autocomplete="off">
              `
                showModalGenerate()
            }
            break;
            case 2: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Phone Number'
                document.querySelector('.form-information').innerHTML = `
                <input type="tel" name="telAddress" id="telAddress" placeholder="Write the phone number here (e.g: +24355485559)" autocomplete="off">
              `
                showModalGenerate()
            }
            break;
            case 3: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code for SMS sending'
                document.querySelector('.form-information').innerHTML = `
                <input type="tel" name="SMSAddress" id="SMSAddress" placeholder="Write the phone number here (e.g: +24355485559)" autocomplete="off">
              `
                showModalGenerate()
            }
            break;
            case 4: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code for you'
                document.querySelector('.form-information').innerHTML = `
                <input type="text" name="user" id="UserName" placeholder="Write your name here (e.g: Norbert)" autocomplete="off">
                <input type="tel" name="telAddress" id="PhoneUser" placeholder="Write the phone number here (e.g: +24355485559)" autocomplete="off">
                <input type="email" name="emailAddress" id="EmailUser" placeholder="Write your email address here (e.g: abc@gmail.com)" autocomplete="off">
              `
                showModalGenerate()
            }
            break;
            case 5: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Text'
                document.querySelector('.form-information').innerHTML = `
                <textarea name="" id="textContent" cols="30" rows="10" placeholder="Write your text here" autocomplete="off"></textarea>
              `
                showModalGenerate()
            }
            break;
            }
            inputEvent()
            qr_code_option = index;
        })
    })
}
const showModalGenerate = () => {
    document.querySelector('.output-code').classList.remove('visible')
    document.querySelector('.message-error').classList.remove('message-visible')
    document.querySelector('.modal-generator').classList.replace('modal-hide', 'modal-show')
}
const closeModalGenerate = () => {
    document.querySelector('.close-modal-qr-code').addEventListener('click', () => {
        if (document.querySelector('.modal-generator').classList.contains('modal-show')) {
            document.querySelector('.modal-generator').classList.replace('modal-show', 'modal-hide')
        } else {
            document.querySelector('.modal-generator').classList.replace('modal-hide', 'modal-show')
        }
    })
}
const hideAllTab = () => {
    document.querySelectorAll('.tab__item').forEach(tab => tab.classList.replace('tab-active', 'tab-disabled'))
}
async function ChangeTabItem(itemIndex) {
    hideAllTab();
    document.querySelectorAll('.tab__item')[itemIndex].classList.replace('tab-disabled', 'tab-active')
}
const HomeTabEvent = () => {
    document.querySelectorAll('.btn-menu-tab').forEach((btn_tab, index) => {
        btn_tab.addEventListener('click', () => {
            ChangeTabItem(parseInt(btn_tab.getAttribute('go-item-value')))
        })
    })
}
const EventBackTabItem = () => {
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {

            ChangeTabItem(parseInt(document.querySelector('#generator-tab-item .header-tab .back-btn').getAttribute('back-item-value')))

        })
    })
}

const closeModal = () => {
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modal-camera-access-denied').classList.remove('modal-message-show')
    })
    document.querySelector('.close-result').addEventListener('click', () => {
        document.querySelector('.modal-result-scan').classList.remove('modal-result-scan-show')
    })
}




window.addEventListener('load', () => {
    HomeTabEvent()
    EventBackTabItem()
    closeModalGenerate()
    openModalGenerator()
    closeModal()
})
