const pdfreader = require('pdfreader');
const xl = require('excel4node');

const pages = [];
var rows = {};

const saveToExcel = (employee) => {
  const headerFile = ['Nome do Trabalhador', 'Rem SEM 13º Sal', 'Rem 13º Sal', 'PIS', 'Base Cal 13º SAL prev', 'Admissao', 'Cont Seg Devida', 'cat', 'ocor Deposito', 'Data/Cod Movimentação', 'cbo', 'jam'];
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet('Sheet 1');
  const style = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
  });

  // fill headerFile
  headerFile.forEach((collumnName, index) => {
    ws.cell(1, 1 + index).string(collumnName).style(style);
  });

  // create excel file
  wb.write('./EXCEL/Excel.xlsx');
};

const filterPage =  'NOME TRABALHADOR';

const selectPages = (page, i) => {
  // 
  console.log('page', i + 1);
  console.log(page[0].length);
};

const convertPages = (pages) => {
  for (let i = 0; i < 1; i++) {
    selectPages(pages[i], i);    
  }
  saveToExcel('Fabio');
  console.log(pages.length);
};

const SavePage = () => {
  const page = [];
  // order row and save the page
  Object.keys(rows)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2))
    .forEach((y) => page.push((rows[y] || [])));

  if (page.length !== 0) pages.push(page);
};

const Reader = (pathPDF) => {
  new pdfreader.PdfReader().parseFileItems(pathPDF, (err, item) => {
    if (err) console.log(err);

    if (!item || item.page) {
      SavePage();
      rows = {};
    } else if (item.text) {
      (rows[item.y] = rows[item.y] || []).push(item.text);
    }
    // end of file
    if (item === undefined) convertPages(pages);
  });
};

module.exports = Reader;