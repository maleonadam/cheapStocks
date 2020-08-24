const chalk = require("chalk");
const data = require("../currency.json");

// function to fetch data and loop through our data
const getCountry = (isocode) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].iso_code == isocode) {
            const details = {
                country: data[i].country,
                currency: data[i].currency,
                iso_4217_code: data[i].iso_code,
            };
            console.log(details);
            break;
        } else {
            console.log(chalk.red("ISO Code is not supported!"));
            break;
        }
    }
};

// export the function so as to import in the index.js file
module.exports = {
    getCountry,
};