const modules = (process.env.MODULES === "true") || false
const autoprefixer = require('autoprefixer');
const plugin = autoprefixer({ grid: true });
module.exports = { modules: modules, plugins: [ plugin ] }