// Exemplo de exportação de módulo;
// const brl = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brl;

// module.exports = usdToBrl;

// Exemplo de exportação de módulo em objeto (para exportar mais de 1 valor);
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};