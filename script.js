function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { /*se o genero for masculino (na prog se inicia com o 0 e nao com 1)*/
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) { 
                // CRIANÇA
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //CRIANÇA
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade <21) {
                //JOVEM
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade <50){
                //ADULTO
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionar elemento
    }

}