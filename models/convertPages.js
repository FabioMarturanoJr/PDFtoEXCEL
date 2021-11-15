
const { analyzer, generateExcel } = require('./helpers')

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

  // console.log(structEmployee);
  return structEmployee;
};

const separateEmployees = (page, separetors) => {
  const employees = [];
  separetors.forEach((separator, index) => {
    const startData = haveDeposito(page[separator - 1]) ? separator - 1 : separator;
    let endData = 0;

    if (!separetors[index + 1]) {
      endData = page.length
    } else {
      endData = haveDeposito(page[separetors[index + 1] - 1]) ? separetors[index + 1] - 1 : separetors[index + 1];
    }
    
    let employeeData = page.slice(startData, endData);
    employeeData = structureEmproyeesData(employeeData);
    
    const employee = { ...analyzer(employeeData.length, employeeData, haveDeposito(page[separator - 1])) };    

    employees.push(employee);
  });

  // console.log(employees);
  return employees
};

const convertPages = (pages) => {
  let employeesData = [];
  for (let i = 0; i < pages.length; i++) {
    if (isCorrectPage(pages[i])) {
    // if (isCorrectPage(pages[i]) && i == 1) {
      const separetors = findSeparators(pages[i]);
      employeesData = [...employeesData, ...separateEmployees(pages[i], separetors)];
      console.log('pagina', i + 1, isCorrectPage(pages[i]) && 'carregada');
    }
  }
  generateExcel(employeesData);
  console.log('arquivo convertido');
};

module.exports = {
  convertPages
};