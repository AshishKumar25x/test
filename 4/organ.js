document.getElementById("downloadBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const mainDiv = document.querySelector(".main");

    html2canvas(mainDiv, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = 190;
        const pdfHeight = 297;

        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Add extra pages if needed
        while (heightLeft > 0) {
            position -= pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save("Organ_Donation_Pledge.pdf");
    });
});
