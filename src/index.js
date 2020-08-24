const program = require("commander");
const { getCountry } = require("./commands");

// use program library to set version and description for the app
program.version("1.0.0").description("Command line Currency Application");

// specify how to run commands in the CLI
program
    .command("details <isocode>")
    .alias("d")
    .description("view currency details of a specified country")
    .action((isocode) => getCountry(isocode));

// read all parameters and arguments to the program
program.parse(process.argv);