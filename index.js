const path = require('path');

const pdfPath = path.resolve(__dirname, 'PDF', 'Relatório RE.pdf');

const ReadPDF = require('./models/pdfReader');

try {
  ReadPDF(pdfPath);  
} catch (e) {
  console.log(e.message);
}
