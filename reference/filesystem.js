const fs = require('fs');
const path = require('path');

//create foler
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     console.log('folder created');
// });

//write in the file 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'this is Hello from Hello.txt', err => {
//     if(err) console.log('error occurred');
//     console.log('file written.');

//     //append in the file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Updated value', err => {
//         if(err) console.log('err occured');
//         console.log('file written successfully.');
//     })
// });

//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
// })

//rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
//     if(err) console.log('error occured');
//     console.log('file renamed');
// })

