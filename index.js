let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let savePassw = document.getElementById("savePassw")

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numerik = "0123456789"
    const symbol = "!@#%&*_+=:;-?/><~"

    const data = lowerAlphabet + upperAlphabet + numerik + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
        
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password has been generated!')
    }, 1500)

}

const savePass = () => {
    document.title = password.value
    savePassw.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    savePassw.setAttribute('download', 'myPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('password has been saved')
    }, 1500)
}