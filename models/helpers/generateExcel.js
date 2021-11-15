const xl = require('excel4node');

const generateExcel = (employees) => {
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

  // fill employees
  employees.forEach((employee, index) => {
    ws.cell(2 + index, 1).string(employee.name).style(style);
    ws.cell(2 + index, 2).string(employee.remSem).style(style);
    ws.cell(2 + index, 3).string(employee.rem).style(style);
    ws.cell(2 + index, 4).string(employee.pis).style(style);
    ws.cell(2 + index, 5).string(employee.baseSalPrev).style(style);
    ws.cell(2 + index, 6).string(employee.admissao).style(style);
    ws.cell(2 + index, 7).string(employee.conSeg).style(style);
    ws.cell(2 + index, 8).string(employee.cat).style(style);
    ws.cell(2 + index, 9).string(employee.ocor).style(style);
    ws.cell(2 + index, 10).string(employee.dataCodMov).style(style);
    ws.cell(2 + index, 11).string(employee.cbo).style(style);
    ws.cell(2 + index, 12).string(employee.jam).style(style);
  });

  // create excel file
  wb.write('./EXCEL/Excel.xlsx');
};

module.exports = { generateExcel };