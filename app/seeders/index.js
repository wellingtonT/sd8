const faker = require("faker");

const amount = Array.from(Array(25).keys());

const contatos = new Array();

amount.map((e) => {
  let contato = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    cidade: faker.address.city(),
    estado: faker.address.stateAbbr(),
    telefone: faker.phone.phoneNumber(),
  };
  contatos.push(contato);
});

module.exports = contatos;
