const xl = require('excel4node');

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

const match =  /NOME TRABALHADOR/i;
const notMatch =  /LOGRADOURO/i;

const isCorrectPage = (page) => page.some((str) => str.match(match)) 
  && !page.some((str) => str.match(notMatch));

const convertPages = (pages) => {
  for (let i = 0; i < pages.length; i++) {
    // fintro de paginas ok 
    console.log('Page', i + 1, isCorrectPage(pages[i]));
    // criar a remoção das informaçoes nescessárias verificar os campos vazios
  }
  // saveToExcel('Fabio');
  console.log('total pages', pages.length);
};

module.exports = {
  convertPages
};