

const salvarEmail = () => {
    let emailSalvo = document.getElementById('email')

    let dados = JSON.parse(localStorage.getItem('dadosEmail'))

    if(dados == null){
        localStorage.setItem('dadosEmail', '[]')
        dados = []
    }

    let registro = {
        email: emailSalvo.nodeValue
    }

    dados.push(registro)

    localStorage.setItem("dadosEmail", JSON.stringify(dados))

}
salvarEmail()