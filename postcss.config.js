const autoprefixer = require('autoprefixer');
const plugin = autoprefixer({ grid: true });
module.exports = { plugins: [ plugin ] }