const form = document.getElementById("generate_form");
const qrCode = document.getElementById("qrcode");

const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === ""){
             alert("Please enter a URL");
    }else{
        showSpinner(); //show spinner for 1 sec
        setTimeout(()=>{
            hideSpinner();
            generateQRCode(url, size);
        }, 1000)
    }
}

const generateQRCode = (url, size)=>{
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: "blue",
    })
}

const showSpinner = () =>{
    document.getElementById("spinner").style.display = "block"
}
const hideSpinner = () =>{
    document.getElementById("spinner").style.display = "none"
}

const clearUI = ()=>{
    qrCode.innerHTML = "";
};

const createSaveBtn = (saveUrl)=>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated');
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);