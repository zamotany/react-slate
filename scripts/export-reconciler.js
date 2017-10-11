const fs = require('fs');
const path = require('path');

const REACT_DOM_MODULE = path.join(__dirname, '../node_modules/react-dom/cjs');
const REACT_DOM_DEV = path.join(REACT_DOM_MODULE, 'react-dom.development.js');
const REACT_DOM_PROD = path.join(
  REACT_DOM_MODULE,
  'react-dom.production.min.js'
);

const LINE_TO_ADD_DEV =
  'module.exports.ReactFiberReconciler = ReactFiberReconciler;';
const ADD_LINE_AFTER_DEV = 'module.exports = ReactDOMFiberEntry;';

const LINE_TO_ADD_PROD = 'module.exports.ReactFiberReconciler=Xj;';

const reactDomDev = fs.readFileSync(REACT_DOM_DEV);
if (!reactDomDev.includes(LINE_TO_ADD_DEV)) {
  fs.writeFileSync(
    REACT_DOM_DEV,
    reactDomDev
      .toString()
      .replace(ADD_LINE_AFTER_DEV, `${ADD_LINE_AFTER_DEV}\n${LINE_TO_ADD_DEV}`)
  );
}

const reactDomProd = fs.readFileSync(REACT_DOM_PROD);
if (!reactDomProd.includes(LINE_TO_ADD_PROD)) {
  fs.writeFileSync(
    REACT_DOM_PROD,
    `${reactDomProd.toString()}${LINE_TO_ADD_PROD}`
  );
}
