const Handlebars = require('handlebars');

Handlebars.registerHelper('copyright', () => {
  const year = new Date().getFullYear();
  const str = `${String.fromCharCode(169)} ${year} Daniel Rivers`;
  return new Handlebars.SafeString(str);
});
