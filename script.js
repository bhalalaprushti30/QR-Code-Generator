document.getElementById("generate-btn").addEventListener("click", function () {
    let inputText = document.getElementById("qr-input").value;
    let qrCodeDiv = document.getElementById("qr-code");
    let downloadBtn = document.getElementById("download-btn");

    qrCodeDiv.innerHTML = ""; // Clear previous QR code

    if (inputText.trim() === "") {
        alert("Please enter text or a URL.");
        return;
    }

    let qrCode = new QRCode(qrCodeDiv, {
        text: inputText,
        width: 200,
        height: 200
    });

    downloadBtn.style.display = "block";
    
    // Download QR Code as Image
    downloadBtn.onclick = function () {
        let qrCanvas = qrCodeDiv.querySelector("canvas");
        let qrImage = qrCanvas.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = qrImage;
        link.download = "QRCode.png";
        link.click();
    };
});
