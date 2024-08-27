const { ESLint } = require('eslint');

module.exports = async function (results) {
    const eslint = new ESLint();
    const formatter = await eslint.loadFormatter('stylish');
    const output = formatter.format(results);
    const hasErrors = results.some(result => result.errorCount > 0);

    if (!hasErrors) {
        console.log('\x1b[32m%s\x1b[0m', 'All ESLint checks passed!');
    }

    return output;
};
