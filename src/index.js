const view = document.getElementById("view");

view.innerHTML = `<button id="pdf-button">Generate pdf</button>
<br>
<iframe id="pdf" style="width: 350px; height: 600px"></iframe>`;

import("pdf-lib").then(({ PDFDocument }) => {
  const pdfButton = document.getElementById("pdf-button");

  pdfButton.addEventListener("click", async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([350, 400]);
    page.moveTo(110, 200);
    page.drawText("Hello World!");
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    document.getElementById("pdf").src = pdfDataUri;
  });
});
