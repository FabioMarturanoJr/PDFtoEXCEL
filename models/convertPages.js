const xl = require('excel4node');
const { analyzer } = require('./helpers/analyzerEmployee');

const saveToExcel = (employees) => {
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

const match =  /NOME TRABALHADOR/i;
const notMatch =  /LOGRADOURO/i;
const TOTAIS = 'TOTAIS';
const PIS = /\d{2}.\d{5}.\d{2}-\d/;
const DATE = "(\\d{2}/\\d{2}/\\d{4})";

const isCorrectPage = (page) => page.some((str) => str.match(match)) 
  && !page.some((str) => str.match(notMatch));

const isPIS = (str) => str.match(PIS);
const haveDeposito = (str) => str.match(DATE);

const findSeparators = (page) => { 
  const separetors = [];
  page.map((str, index) => {
    if (isPIS(str)) {
      separetors.push(index);
    }
  });
  return separetors;
};

const structureEmproyeesData = (employeeData) => {
  const structEmployee = []
  // console.log(employeeData);

  employeeData.forEach((data, index) => {
    switch (true) {
      case isPIS(data) && data.length == 26:
        structEmployee.push(data.substring(0, 14));
        structEmployee.push(data.substring(14, 24));
        structEmployee.push(data.substring(24));
        break;
      case data.includes(TOTAIS) || (data.split(',').length - 1) > 3:
        break;
      case (data.split(',').length - 1) > 1:
        const indexToSeparete = data.indexOf(',');
        structEmployee.push(data.substring(0, indexToSeparete + 3));
        structEmployee.push(data.substring(indexToSeparete + 3));
        break;
      default:
        structEmployee.push(data)
        break;
    }
  });
  // trata nome não aparece
  console.log(structEmployee.some((data) => data.length > 14));
  console.log(structEmployee);
  return structEmployee;
};

const separateEmployees = (page, separetors) => {
  const employees = [];
  separetors.forEach((separator, index) => {
    const startData = haveDeposito(page[separator - 1]) ? separator - 1 : separator;
    //verificar a pega do ultimo elemento.
    const endSeparator  = haveDeposito(page[separator - 1]) ? separetors[index + 1] - 1 : separetors[index + 1];
    const endData = separetors[index + 1] - 1 ? endSeparator : page.length;
    
    let employeeData = page.slice(startData, endData);
    // tratar os dados antes de separar o employees, dados concatenados
    employeeData = structureEmproyeesData(employeeData)
    
    const employee = { ...analyzer(employeeData.length, employeeData, haveDeposito(page[separator - 1])) };    

    employees.push(employee);
  });

  // console.log(employees);
  return employees
};

const convertPages = (pages) => {
  let employeesData = [];
  // for (let i = 0; i < 2; i++) {
  for (let i = 0; i < pages.length; i++) {
    if (isCorrectPage(pages[i])) {
    // if (isCorrectPage(pages[i]) && i == 1) {
      const separetors = findSeparators(pages[i]);
      employeesData = [...employeesData, ...separateEmployees(pages[i], separetors)];
      console.log('pagina', i + 1, isCorrectPage(pages[i]) && 'carregada');
    }
  }
  saveToExcel(employeesData);
  console.log('arquivo convertido');
};

module.exports = {
  convertPages
};