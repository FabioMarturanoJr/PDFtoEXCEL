const path = require('path');

const nameFile = 'Relatório RE.pdf'

const pdfPath = path.resolve(__dirname, 'PDF', nameFile);

const ReadPDF = require('./models/pdfReader');

const errorFile = 'no such file or directory'

try {
  ReadPDF(pdfPath);  
} catch (e) {
  if (e.message.includes(errorFile)) console.log(`Arquivo não encontrado, verifique na pasta "PDF", Arquivo esperado: "${nameFile}"`);
  else console.log(e.message);
}
