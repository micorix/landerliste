const Locales = require('../locales.json')
const Countries = {}
Object.keys(Locales).map(key => {
  if(key.includes('_')){
    Countries[key] = Locales[key].match(/\(([^)]+)\)/)[1];
    delete Locales[key]
  }
})
console.log(Locales);
console.log(Countries);

const fs = require('fs');
fs.writeFile("Locales.json", JSON.stringify(Locales), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The Locales file was saved!");
});
fs.writeFile("Countries.json", JSON.stringify(Countries), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The Countries file was saved!");
});
