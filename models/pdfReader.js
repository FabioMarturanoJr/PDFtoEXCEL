const pdfreader = require('pdfreader');
const { convertPages } = require('./convertPages');

const pages = [];
var rows = {};


const SavePage = () => {
  const page = [];
  // order row and save the page
  Object.keys(rows)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2))
    .forEach((y) => page.push((rows[y] || [])));

  if (page.length !== 0) pages.push(page.flat());
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