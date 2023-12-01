function entrar(){
    document.getElementById('infos').style.display = "block";
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let nick = document.getElementById('nick');

    document.getElementById('infonome').innerHTML = `${nome.value}`;
    document.getElementById('infoemail').innerHTML = `${email.value}`;
    document.getElementById('infonick').innerHTML = `${nick.value}`;
}