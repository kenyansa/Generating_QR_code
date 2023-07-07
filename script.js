const form = document.getElementById("generate_form");
const qrCode = document.getElementById("qrcode");

const onGenerateSubmit = (e)=>{
    e.preventDefault();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === ""){
             alert("Please enter a URL");
    }else{
        showSpinner();
        setTimeout(()=>{
            hideSpinner();
        }, 1000)
    }
}

const showSpinner = () =>{
    document.getElementById("spinner").style.display = "block"
}
const hideSpinner = () =>{
    document.getElementById("spinner").style.display = "none"
}
hideSpinner();

form.addEventListener('submit', onGenerateSubmit);