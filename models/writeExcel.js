const writeXlsxFile = require('write-excel-file');

const path = '../EXCEL';

const data = [
  [
    {value: 'Nome do Trabalhador', fontWeight: 'bold'},
    {value: 'Rem SEM 13º Sal', fontWeight: 'bold'},
    {value: 'Rem 13º Sal', fontWeight: 'bold'},
    {value: 'PIS', fontWeight: 'bold'},
    {value: 'Base Cal 13º SAL prev', fontWeight: 'bold'},
    {value: 'Admissao', fontWeight: 'bold'},
    {value: 'Cont Seg Devida', fontWeight: 'bold'},
    {value: 'cat', fontWeight: 'bold'},
    {value: 'ocor Deposito', fontWeight: 'bold'},
    {value: 'Data/Cod Movimentação', fontWeight: 'bold'},
    {value: 'cbo', fontWeight: 'bold'},
    {value: 'jam', fontWeight: 'bold'},
  ],
  [
    { type: String, value: 'John Smith' },
    { type: String, value: '0' },
    { type: String, value: '150' },
  ]
];

const writeToExcel = async (pages) => {
  await writeXlsxFile(data, { filePath: `${path}/test.xlsx` })
};

module.exports = writeToExcel;