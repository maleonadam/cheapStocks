# cheapStocks
In this application, I have used Node.js to build a solution to the challenge. 
I started by making a directory “cheapStocks” to hold my project files. 
Created a package.json to manage my project dependencies.
$npm init
Installed the following Node.js packages in the project:
(i) Commander – Node.js library that makes writing command line applications easy.
(ii) Chalk – Node.js package that colorizes the output.
$npm install commander chalk --save
I then organized the project into modules like below:
(i) src folder with the following files:
    (a) commands.js – Where the commands for the app are created. Also contains the main function which fetches our data.
    (b) index.js – Main application file which holds the application logic.
(ii) currency.json – This is the file which acts as our data source. What I did basically was I got the CSV file with the data which is hosted at
https://focusmobile-interview-materials.s3.eu-west-3.amazonaws.com/Cheap.Stocks.Internationalization.Currencies.csv. and 
converted it to JSON file so I can get an API-like data source. So all our data is served locally from the “currency.json” file.

#HOW TO RUN THE APPLICATION

1. Open any CMD of choice.
2. Navigate to project folder root
3. Run the following command
$node src/index.js details <ISO 4217 CODE>
For example, for Algeria 
$node src/index.js details DZD
The results will be an object with currency details associated with that ISO 4217 CODE. E.g for Algeria again:
{ country: 'Algeria',        
  currency: 'Algerian dinar',
  iso_4217_code: 'DZD' }
4. Other useful commands are:
$node src/index.js d <ISO 4217 CODE>
“d” is an alias for “details” so you can use it instead of details.
$node src/index.js - -version
5. To view the application version
$node src/index.js - -help
6. To view the help menu and the available commands
NB. If the ISO 4217 CODE doesn’t exist in our data source, then you’ll get a message:
“ISO CODE not supported!”
