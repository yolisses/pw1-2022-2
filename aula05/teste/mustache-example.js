const mustache = require('mustache');

const template = mustache.render('Olá, {{ nome }} {{ sobrenome }}', {
  nome: 'Paulo',
  sobrenome: 'Ewerton',
});

console.log(template);
