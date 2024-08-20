//2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.
const http =require('http')
const server=http.createServer((req,res)=>{
    //for using html nd css (line(5,6))
    res.statuscode=200;
    res.setHeader('content-type','text/html');
   
    const Url=req.url;
    if(Url=='/home'){
        res.end("welcome home");
        res.end();
    }
    else if(Url=='/contact'){
        
        res.end('<h3>123456789</h3>');
        res.end();
    }
    else if(Url=='/register'){
        res.end('register done');
        res.end();
    }
    else if(Url=='/feedback'){
        res.end('please fill the feedback');
        res.end();
    }
    else if(Url=='/content'){
        res.end('fill the details');
        res.end();
    }
    
    else{
        res.end('hello world');
   }
   
});
server.listen(3000, () => {
    console.log("server started at 3000")
});