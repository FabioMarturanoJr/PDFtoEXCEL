const fs = require('fs');

const PDFParser = require('pdf2json');

const ReadPDF = (pathPDF) => {

  if (fs.existsSync(pathPDF)) {
    const pdfParser = new PDFParser();
  
    pdfParser.on("pdfParser_dataError", (errData) => {
      console.error(errData.parserError);
    });
  
    pdfParser.on("pdfParser_dataReady", ({ formImage: { Pages } }) => {
      const NewPages = [];

      // Pages.forEach((page) => {
        
      // });
      const PageOnlyText = Pages[1].Texts.map(({ R })=> unescape(R[0].T) )

      console.log(PageOnlyText);
      // console.log(Pages[0].Texts);
      // console.log(Pages[0].Texts[1]);
      // console.log(Pages[0].Texts[1].R[0].T);
    });
  
    pdfParser.loadPDF(pathPDF);
  
    return 'Arq localizado';
  } else {
    return 'Arq não localizado';
  }  
};

module.exports = ReadPDF;