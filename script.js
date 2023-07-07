const form = document.getElementById("generate_form");
const qrCode = document.getElementById("qrcode");

const onGenerateSubmit = (e)=>{
    e.preventDefault();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

}
form.addEventListener('submit', onGenerateSubmit);