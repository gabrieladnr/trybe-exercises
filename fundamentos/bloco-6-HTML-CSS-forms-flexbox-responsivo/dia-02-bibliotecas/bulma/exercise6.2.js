window.onload = function() {
    
function liberaMagia(){
    const capReqImagem = document.querySelector("#divulgaFoto");
    capReqImagem.addEventListener("change", () => {
        const capButton = document.querySelector("#submit");
        capButton.disabled = !capReqImagem.checked;

    });
}
liberaMagia()

}