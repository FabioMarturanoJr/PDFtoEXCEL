const path = require('path');

const pdfPath = path.resolve(__dirname, 'PDFs', 'Relatório RE.pdf');

const ReadPDF = require('./models/pdfReader');

ReadPDF(pdfPath);
