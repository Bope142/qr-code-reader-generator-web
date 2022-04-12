var qr_code_option=0;
const inputEvent =()=>{
    document.querySelectorAll('.form-information input,textarea').forEach(controll =>{
        controll.addEventListener('focus',()=>{
            if(controll.classList.contains('invalid-input')){
                controll.classList.remove('invalid-input')
            }
        })
        controll.addEventListener('blur',()=>{
            if(controll.value === ''){
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
                <input type="email" name="emailAddress" id="EmailUser" placeholder="Write your email address here (e.g: abc@gmail.com)">
              `
                    showModalGenerate()
                }
                break;
            case 1: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Website URL'
                document.querySelector('.form-information').innerHTML = `
                <input type="url" name="urlAddress" id="urlAddress" placeholder="Write the site URL here (e.g: https://www.google.com)">
              `
                showModalGenerate()
            }
            break;
            case 2: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Phone Number'
                document.querySelector('.form-information').innerHTML = `
                <input type="tel" name="telAddress" id="" placeholder="Write the phone number here (e.g: +24355485559)">
              `
                showModalGenerate()
            }
            break;
            case 3: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code for SMS sending'
                document.querySelector('.form-information').innerHTML = `
                <input type="tel" name="telAddress" id="" placeholder="Write the phone number here (e.g: +24355485559)">
              `
                showModalGenerate()
            }
            break;
            case 4: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code for you'
                document.querySelector('.form-information').innerHTML = `
                <input type="text" name="user" id="" placeholder="Write your name here (e.g: Norbert)">
                <input type="tel" name="telAddress" id="" placeholder="Write the phone number here (e.g: +24355485559)">
                <input type="email" name="emailAddress" id="" placeholder="Write your email address here (e.g: abc@gmail.com)">
              `
                showModalGenerate()
            }
            break;
            case 5: {
                document.querySelector('.header-conten p').textContent = 'Generate a QR Code from an Text'
                document.querySelector('.form-information').innerHTML = `
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your text here"></textarea>
              `
                showModalGenerate()
            }
            break;
            }
            inputEvent()
            qr_code_option=index;
        })
    })
}
const showModalGenerate = () => {
    document.querySelector('.modal-generator').classList.replace('modal-hide', 'modal-show')
    document.querySelector('.output-code').classList.remove('visible')
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
const ChangeTabItem = (itemIndex) => {
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







window.addEventListener('load', () => {
    HomeTabEvent()
    EventBackTabItem()
    closeModalGenerate()
    openModalGenerator()
})
