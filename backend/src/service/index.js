//FORMAT DATE
const FormataStringData = (date) => {
  var dia = date.split("/")[0];
  var mes = date.split("/")[1];
  var ano = date.split("/")[2];
  console.log(ano)
  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}
// module.exports = FormataStringData();
export default FormataStringData;