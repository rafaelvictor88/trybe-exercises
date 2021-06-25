document.getElementsByTagName("p")[1].innerText = 'Formado em Desenvolvimento Web pela Trybe e trabalhando na área de tecnologia.';

document.querySelector(".main-content").style.backgroundColor = 'rgb(76,164,109)';

document.querySelector(".main-content .center-content").style.backgroundColor = "white";

document.getElementsByClassName("title")[0].innerText = 'Exercício 5.1 - Java Script';

for (let i = 0; i < document.getElementsByTagName('p').length; i += 1) {
document.getElementsByTagName('p')[i].innerText = document.getElementsByTagName('p')[i].innerText.toUpperCase();
}

for (let i = 0; i < document.getElementsByTagName("p").length; i += 1) {
console.log(document.getElementsByTagName("p")[i].innerText);
}