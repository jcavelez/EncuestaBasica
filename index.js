
const f = getParameterByName('f')
const iid = getParameterByName('iid')
console.log(f)
console.log(iid)

// modal
const isVisible = "is-visible";

document
    .getElementById('btnEnviar')
    .addEventListener("click", () => document.getElementById('modal').classList.add(isVisible))

//reemplazo fecha en intro
let introElement = document.getElementById('lblIntro')
let introText = introElement.innerText.replace('{{fecha}}', `${f.split('-')[2]}/${f.split('-')[1]}/${f.split('-')[0]}`)

introElement.innerText = introText


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}