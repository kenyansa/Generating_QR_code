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

            setTimeout(() => {
                const saveUrl = qrCode.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000)
    }
}

const generateQRCode = (url, size)=>{
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: "black",
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
    const saveLink = document.getElementById('save-link');
    if(saveLink){
        saveLink.remove();
    }
};

const createSaveBtn = (saveUrl)=>{
    const generatedElement = document.getElementById('generated');
    //before appending the link element, the code checks if the generated element exists and only then proceeds with appending the link. 
    //It should prevent the "Cannot read properties of null" error when the generated element is not found.
    if (generatedElement) {
        const link = document.createElement('a');
        link.id = 'save-link';
        link.classList = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
        link.href = saveUrl;
        link.download = 'qrcode.png';
        link.innerHTML = 'Save Image';
        document.getElementById('generated').appendChild(link);
    }
   
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);