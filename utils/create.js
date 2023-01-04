function createLink (license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
};

function createBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
};