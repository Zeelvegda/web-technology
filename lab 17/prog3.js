const fs=require('fs');

//--method:exist(given path exist or not)
// fs.exists('prog3.js',(err,ans)=>{
// console.log("ans=",ans);
// });
//console.log("bye");

//stat (info about file nd directory)
// fs.stat('prog3.js',(err,ans)=>{
//     console.log("ans=",ans);
//     });
//console.log("bye");

//open
// fs.open('prog3.js',(err,ans)=>{
//          console.log("ans=",ans);
//   });
// console.log("bye");

//readfile
//   fs.readFile('prog3.js',(err,ans)=>{
//     console.log("ans=",ans.tostring());
// });
// console.log("bye");

//write file
//  fs.writeFile('newfilehello.txt',"this is callback ",(err)=>{
//      console.log('file written successful');
//  });
// console.log("bye");

//append
// fs.appendFile('hellofile.txt',"this is callback ",(err)=>{
//          console.log('file written successful');
//          });
//console.log("bye");


//close
// fs.close('prog3.js',(err,ans)=>{
//          console.log("ans=",ans);
//   });
//console.log("bye");


//---->delete file
//to delete a file with the File System module,  use the fs.unlink() method.
// fs.unlink('newfilehello.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });
// console.log("bye");

//rename file
// fs.rename('hellofile.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });
//console.log("bye");




