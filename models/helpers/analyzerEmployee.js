const analyzer = (employeeLength, employeeData, haveDeposito) => {

  const employee = {};
  // console.log(employeeLength, employeeData, haveDeposito);

  const dontHave = '0';

  if (employeeLength == 5) {
    employee.name = employeeData[4];
    employee.remSem = dontHave; // number
    employee.rem = dontHave; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = dontHave; // number
    employee.admissao = employeeData[2];
    employee.conSeg = dontHave; // number
    employee.cat = employeeData[3];
    employee.ocor = dontHave; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = dontHave;
    employee.jam = dontHave; // number
    return employee;
  }

  if (employeeLength == 6) {
    employee.name = employeeData[5];
    employee.remSem = dontHave; // number
    employee.rem = dontHave; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = dontHave; // number
    employee.admissao = employeeData[2];
    employee.conSeg = dontHave; // number
    employee.cat = employeeData[3];
    employee.ocor = dontHave; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = employeeData[4];
    employee.jam = dontHave; // number
    return employee;
  }

  if (employeeLength == 7) {
    employee.name = employeeData[5] + employeeData[6];
    employee.remSem = dontHave; // number
    employee.rem = dontHave; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = dontHave; // number
    employee.admissao = employeeData[2];
    employee.conSeg = dontHave; // number
    employee.cat = employeeData[3];
    employee.ocor = dontHave; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = employeeData[4];
    employee.jam = dontHave; // number
    return employee;
  }

  if (employeeLength == 8 && !haveDeposito) {
    
  }

  if (employeeLength == 11 && !haveDeposito) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[0];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[1];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[2];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = dontHave;
    employee.cbo = employeeData[3];
    employee.jam = employeeData[7]; // number
    return employee;
  }

  if (employeeLength == 11) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[2];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[3];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = dontHave;
    employee.jam = employeeData[7]; // number
    return employee;
  }  

  if (employeeLength == 12 && !haveDeposito) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[0];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[1];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[2];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = dontHave;
    employee.cbo = employeeData[3];
    employee.jam = employeeData[7]; // number
    return employee;
  }

  if (employeeLength == 12) {
    employee.name = employeeData[5];
    employee.remSem = employeeData[6]; // number
    employee.rem = employeeData[7]; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = employeeData[10]; // number
    employee.admissao = employeeData[2];
    employee.conSeg = employeeData[9]; // number
    employee.cat = employeeData[3];
    employee.ocor = employeeData[11]; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = employeeData[4];
    employee.jam = employeeData[8]; // number
    return employee;
  }

  if (employeeLength == 13) {
    employee.name = employeeData[6];
    employee.remSem = employeeData[7]; // number
    employee.rem = employeeData[8]; // number
    employee.pis = employeeData[1];
    employee.baseSalPrev = employeeData[11]; // number
    employee.admissao = employeeData[2];
    employee.conSeg = employeeData[10]; // number
    employee.cat = employeeData[3];
    employee.ocor = employeeData[12]; // number
    employee.dataCodMov = employeeData[0];
    employee.cbo = employeeData[4];
    employee.jam = employeeData[9]; // number
    return employee;
  }

  if (employeeLength == 17 && !haveDeposito) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[0];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[1];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[2];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = dontHave;
    employee.cbo = employeeData[3];
    employee.jam = employeeData[7]; // number
    return employee;
  }

  if (employeeLength == 18 && !haveDeposito) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[0];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[1];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[2];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = dontHave;
    employee.cbo = employeeData[3];
    employee.jam = employeeData[7]; // number
    return employee;
  }

  if (employeeLength == 19 && !haveDeposito) {
    employee.name = employeeData[4];
    employee.remSem = employeeData[5]; // number
    employee.rem = employeeData[6]; // number
    employee.pis = employeeData[0];
    employee.baseSalPrev = employeeData[9]; // number
    employee.admissao = employeeData[1];
    employee.conSeg = employeeData[8]; // number
    employee.cat = employeeData[2];
    employee.ocor = employeeData[10]; // number
    employee.dataCodMov = dontHave;
    employee.cbo = employeeData[3];
    employee.jam = employeeData[7]; // number
    return employee;
  }

  // check non-existent conditions
  // if (Object.keys(employee).length == 0) console.log(employeeLength, employeeData, haveDeposito);

  return employee;
};

module.exports = {
  analyzer,
};