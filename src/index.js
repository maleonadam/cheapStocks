const program = require("commander");
const { getCountry } = require("./commands");

program.version("1.0.0").description("Command line Currency Application");

program
    .command("details <isocode>")
    .alias("d")
    .description("view currency details of a specified country")
    .action((isocode) => getCountry(isocode));

program.parse(process.argv);