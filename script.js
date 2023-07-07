const form = document.getElementById("generate_form");
const qrCode = document.getElementById("qrcode");

// This function is triggered when the form is submitted. It prevents the default form submission behavior, clears the user interface (UI), 
// retrieves the URL and size values entered by the user, and performs the following steps:
// 1. If the URL is empty, it displays an alert message asking the user to enter a URL.
// 2. Otherwise, it shows a spinner (loading indicator) by calling the showSpinner function.
// 3. After a delay of 1 second (1000 milliseconds), it hides the spinner by calling the hideSpinner function.
// 4. Then, it calls the generateQRCode function, passing the URL and size values.
// 5. After a short delay of 50 milliseconds, it retrieves the source URL of the generated QR code image, creates a save button, and appends it to the generated element.
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

// This function creates a new QRCode instance using the 'QRCode' library. 
// It takes the qrcode element and generates a QR code based on the provided URL and size.
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

// This function clears the QR code element (qrCode) by setting its inner HTML to an empty string. 
// It also removes the save link ('saveLink') if it exists.
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