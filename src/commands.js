const chalk = require("chalk");
const data = require("../currency.json");

const getCountry = (isocode) => {
    data.map((datamap) => {
        if (datamap.iso_code == isocode) {
            const details = {
                country: datamap.country,
                currency: datamap.currency,
                iso_4217_code: datamap.iso_code,
            };
            console.log(details);
        }
    });
};

module.exports = {
    getCountry,
};