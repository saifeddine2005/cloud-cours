// const http = require('http'); 

// const server = http.createServer((request, response) => { 
//     response.statusCode("200");

    
//     response.end("Hi"); 
// });

// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });


// ///////////
// const http = require('http'); 

// const server = http.createServer((request, response) => { 
//     response.statusCode("200");
//     response.setHeader("content-type","text-plain");
   
//     response.end("Hi"); 
// });

// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });
///////
// const http = require('http'); 

// const server = http.createServer((request, response) => { 
//     response.statusCode = 200; // Correction de "statusCode('200')" -> "statusCode = 200"

//     const data = {
//         name: 10, // Correction du format JSON (pas de virgule en trop)
//     };

//     response.setHeader("Content-Type", "application/json"); // Correction de "aplication" -> "application"

//     response.end(JSON.stringify(data)); // Correction de "json.strinify" -> "JSON.stringify"
// });

// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });
//////

// const http = require('http'); 
// const content="<h3>efefefef</h3>";
// const a="<h3>ssfsfwef</h3>";
// const iscontent=false;
// const server = http.createServer((request, response) => { 
//     response.statusCode("200");
//     response.setHeader("content-type","text/html");
   
//    if(iscontent){
//     response.end(content);
//    } else{
//     response.end(a);

//    }
// });

// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });
/////

// const http = require('http'); 

// const server = http.createServer((request, response) => { 
//     // fs.readfile("index.html",(err,data)=>{

//     //     if(err){
//     //         console.log(`erroocco${err}`);
//     //     }
//     //     response.statusCode("200");
//     // response.setHeader("content-type","text/html");
//     // response.end(data);

//     // })
//     ////////////////////////
// if(request.url === "")
// {

//     fs.readfile("index.html",(err,data)=>{

//         if(err){
//             console.log(`erroocco${err}`);
//         }
//         response.statusCode("200");
//     response.setHeader("content-type","text/html");
//     response.end(data);
// }elseif(request.url === "/contact"){
//     fs.readfile("contact.html",(err,data)=>{

//         if(err){
//             console.log(`erroocco${err}`);
//         }
//         response.statusCode("200");
//     response.setHeader("content-type","text/palin");
//     response.end(data);



// }else{

//     response.statusCode("404");
//     response.setHeader("content-type","text/html");
//     response.end(" errur");
// }


//     })


    
// });

// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });

///////////////5 url
