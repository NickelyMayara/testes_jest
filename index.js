const ConversorDeTemperatura = (temp) => {
  const conversao = temp * 1.8 + 32;
  return conversao;
};
module.exports = ConversorDeTemperatura;
