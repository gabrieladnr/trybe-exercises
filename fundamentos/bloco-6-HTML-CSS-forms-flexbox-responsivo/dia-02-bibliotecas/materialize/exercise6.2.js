window.onload = function() {
// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() .

    function stopSubmit() {
    const buttonSubmit = document.getElementById("submit");

        buttonSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        }); 
    }

    //stopSubmit()

    // Faça a validação dos campos com limite de caracteres.
    // Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'.
    //  Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.

    function habilitaSubmit(){
    const buttonSubmit = document.getElementById("submit");
    const divulgaFoto = document.getElementById("divulgaFoto");    
    buttonSubmit.disabled = !divulgaFoto.checked;
        
      
    }
    const divulgaFoto = document.getElementById("divulgaFoto"); 
    divulgaFoto.addEventListener("change", habilitaSubmit());


    // function validaForm(){
    //     const buttonSubmit = document.getElementById("submit");
    //     const validaNome = document.getElementById("name");
    //     const validaEmail = document.getElementById("email");
    //     const validaOpenField = document.getElementById("openfield")

    //     if(validaNome.value == ""){
    //         alert('Dados Inválidos');
    //         return
    //     }
    //     if(validaEmail.value == ""){
    //         alert('Dados Inválidos');
    //         return
    //     }
    //     if(validaOpenField.value ==""){
    //         alert('Dados Inválidos');
    //         return
    //     }
    //     alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        
    //     // else{
    //     // buttonSubmit.addEventListener("click", function (event) {
    //     //     event.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    //     //   })
    //     // }
    // } 

    // validaForm()

}   