// NODE JS










// create some new api








// const http = require('http');
// const data = require('./data')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content':'application/json'})
//     res.write(JSON.stringify(data));
//     res.end()
// }).listen(4500,()=>{
//     console.log("run")
// })








// create file and remove file






// const fs = require('fs');

// const input = process.argv;

// if(input[2] == 'add'){
//     fs.writeFileSync(input[3] , input[4]);
// }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input given by me")
// }








// how to make files in folder using loop and read files name 






// const fs = require('fs')
// const path = require('path')

// const dirname = path.join(__dirname , 'files') // here we set the path where we want to make files

// console.log(dirname) //check path is correct or not

// // using loop we created more files in a time 

// for(i=0; i<=4; i++){
//     fs.writeFileSync(dirname + `/hello${i}.txt`, 'hey i am created 5 files in a folder') 
// }

// // here we read file name using filesystem operator

// fs.readdir(dirname,( err , files) =>{
//     console.log(files)  // this type we print file name in array
//     files.forEach((item) => {
//         console.log(item)  // using forEach loop we print files name in different line , not in array
//     })
// })










// crud orerator in fs




// const fs = require('fs')
// const path = require('path')

// const dirPath = path.join(__dirname , 'crud')
// const filename = `${dirPath}/apple.txt`;

// fs.writeFileSync(filename , 'this is created by hitesh')

// fs.readFile(filename,'utf-8',(err,item) => {
//     console.log(item)
// })

// fs.appendFile(filename , ' and updated by me' , () => {
//     console.log("updated")
// })

// fs.rename(filename ,`${dirPath}/orange.txt` , () =>{
//     console.log('dnsd')
// })

// fs.unlinkSync(`${dirPath}/orange.txt`,()=>{
//     console.log('deleted')
// })







// example



// let a = 50;
// let b = 20;

// let waitdata = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(40);
//     },2000);
// })

// waitdata.then((data) => {
//     b = data; 
//     console.log(a+b)
// })













//                                           EXPRESS JS








//  create server by express js








// const express = require('express')
// const app = express();

// app.get("" , (req , res) => {
//     res.send("this is home page")
// })
// app.get("/about" , (req , res) => {
//     res.send("this is about page")
// })
// app.get("/contact" , (req , res) => {
//     res.send("this is contact page")
// })

// app.listen(4000 , ()=>{
//     console.log('loaded')
// })







// routing in expressjs [like this =>>> (http://localhost:4000/?name=hitesh)]








// const express = require('express')
// const app = express();

// app.get("" , (req , res) => {
//     console.log("the name using by browser" , req.query.name)
//     res.send("this is home page")
// })
// app.get("/about" , (req , res) => {
//     res.send("this is about page")
// })
// app.get("/contact" , (req , res) => {
//     res.send("this is contact page")
// })

// app.listen(4000 , ()=>{
//     console.log('loaded')
// })









// connect with html files





// const express = require('express')
// const path = require('path')
// const app = express();

// const pubPath = path.join(__dirname , 'public')

// app.use(express.static(pubPath))

// app.listen(4000 , ()=>{
//     console.log('loaded')
// })






// send files






// const express = require('express')
// const path = require('path')
// const app = express();

// const pubPath = path.join(__dirname , 'public')

// // app.use(express.static(pubPath))     with files name 

// app.get('' , (req,res)=>{
//     res.sendFile(`${pubPath}/index.html`)
// })
// app.get('/about' , (req,res)=>{
//     res.sendFile(`${pubPath}/about.html`)
// })
// app.get('*' , (req,res)=>{
//     res.sendFile(`${pubPath}/4o4.html`)
// })

// app.listen(4000 , ()=>{
//     console.log('loaded')
// })











// make template engine





// const express = require('express')
// const path = require('path')
// const app = express();

// const pubPath = path.join(__dirname, 'public')

// app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//     res.sendFile(`${pubPath}/index.html`)
// })
// app.get('/profile', (req, res) => {
//     const user = {
//         name : 'hitesh',
//         class : 'nurcry',
//         email : 'konibtau@gmail.com'
//     }
//     res.render('profile' , {user})
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${pubPath}/about.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${pubPath}/4o4.html`)
// })

// app.listen(4000, () => {
//     console.log('loaded')
// })








// ejs loops and other things







// const express = require('express')
// const path = require('path')
// const app = express();

// const pubPath = path.join(__dirname, 'public')

// app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//     res.sendFile(`${pubPath}/index.html`)
// })
// app.get('/profile', (req, res) => {
//     const user = {
//         name : 'hitesh',
//         class : 'nurcry',
//         email : 'konibtau@gmail.com',
//         skills : ['java , js , c++ , c , php']
//     }
//     res.render('profile' , {user})
// })
// app.get('/about', (req, res) => {
//     res.sendFile(`${pubPath}/about.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${pubPath}/4o4.html`)
// })

// app.listen(4000, () => {
//     console.log('loaded')
// })










                                    //  MIDDLE WARE








// const express = require('express')
// const app = express();

// const reqFilter = (req , res ,  next) => {
//     if(!req.query.age){
//         res.send('Please provide age')
//     }else if(req.query.age <= 18){
//         res.send('You send invalid age')
//     }
//     else{
//         next()
//     }
// }

// app.use(reqFilter)

// app.get('/' , (req,res) => {
//     res.send('this is home page')
// })
// app.get('/about' , (req,res) => {
//     res.send('this is about page')
// })

// app.listen(4000 , () =>{
//     console.log('loaded')
// })






// more middle wares






// const express = require('express')
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();

// route.use(reqFilter);


// app.get('/' , (req,res) => {
//     res.send('this is home page')
// })
// app.get('/about', (req,res) => {
//     res.send('this is about page')
// })
// app.get('/contact', (req,res) => {
//     res.send('this is contact page')
// })
// route.get('/user', (req,res) => {
//     res.send('this is user page')
// })
// route.get('/index', (req,res) => {
//     res.send('this is index page')
// })

// app.use('/',route)

// app.listen(4000 , () =>{
//     console.log('loaded')
// })








                                    // rest API








const express = require('express');
const app = express();
app.use(express.json())
app.use(express.static('public'))
const products = [];
app.post('/Products' , (req,res) => {
   const productsData = req.body
    products.push(productsData);
    res.send({status:"sucess",msg : "prodect added sucessfully"})
    console.log(products)
})

app.get('/products',(req,res)=>{
    res.send({products})
})
app.listen(5000 , () =>{
     console.log('server loaded')
})









                                // mongodb



                                



// connect with mongodb







// const { MongoClient, Collection } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db('e-comm')
//     let Collection = db.collection('products')
//     let response  = await Collection.find({}).toArray()
//     console.log(response)
// }
// getData()







// read data from mongodb






// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// let dataBaseName = 'e-comm'

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(dataBaseName)
//     let Collection = db.collection('products')
//     let response  = await Collection.find({}).toArray()
//     console.log(response)
// }
// getData()








                                        // mongoose









// connection express with mongodb









// const mongoose = require("mongoose");
// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/hiteshji")
// .then(() => {
//     console.log('connected')
// })
// .catch((err) => {
//     console.log(err)
// })





//defines schema





// const playlistSc = new mongoose.Schema({
//     name:String,
//     school:String,
//     rollno:Number,
//     section:String
// })






// createCollection







// const Products = new mongoose.model("Products",playlistSc)






// create and insert document 








const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/hiteshji")
.then(() => {
    console.log('connected')
})
.catch((err) => {
    console.log(err)
})

const playlistSc = new mongoose.Schema({
    name:String,
    school:String,
    rollno:Number,
    section:String
})
const Products = new mongoose.model("Products",playlistSc)

const createDoc = async() => {
    try{
        const reaPlaylist = new Products({
            name:"Amit",
            school:"vaish",
            rollno:2,
            section:"A"
        })
        
        const result = await reaPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err)
    }
}
createDoc();











// insert many data










const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/hiteshji")
.then(() => {
    console.log('connected')
})
.catch((err) => {
    console.log(err)
})

// const playlistSc = new mongoose.Schema({
//     name:String,
//     school:String,
//     rollno:Number,
//     section:String
// })
// const Products = new mongoose.model("Products",playlistSc)

// const createDoc = async() => {
//     try{
//         const reaPlaylist = new Products({
//             name:"vishal",
//             school:"vaish",
//             rollno:3,
//             section:"A"
//         }) 
//          const Student1 = new Products({
//             name:"gurmet",
//             school:"vaish",
//             rollno:3,
//             section:"A"
//         })
//           const Student2 = new Products({
//             name:"amot",
//             school:"vaish",
//             rollno:4,
//             section:"A"
//         })
//           const Student3 = new Products({
//             name:"anlit",
//             school:"vaish",
//             rollno:5,
//             section:"A"
//         })
//           const Student4 = new Products({
//             name:"ajay",
//             school:"vaish",
//             rollno:6,
//             section:"A"
//         })
        
//         const result = await Products.insertMany([Student4,Student3,reaPlaylist,Student2,Student1]);
//         console.log(result);
//     }catch(err){
//         console.log(err)
//     }
// }
// // createDoc();






// // find data 






// const gatData = async () =>{
//     const result = await Products.find({rollno : {$lt : 4}});
//     console.log(result)
// }

// // gatData()






// // update the data 






// const updateDoc = async (_id) => {
//     try {
//         const result = await Products.updateOne({_id} , {
//             $set : {
//                 name : 'Gurmeet'
//             }
//         })
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
  
// }
// // updateDoc('63f1cf0c6701a8d15570dc7d');








// // delete data 








// const deleteDoc = async (_id) => {
//     try {
//         const result = await Products.deleteOne({_id})
//         console.log(result);
//     } catch (err) {
//         console.log(err)
//     }
  
// }

// deleteDoc('63f1ca88b970e6ad1bc1b2c4')