import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"


const MongoClient = mongodb.MongoClient;
const mongo_username = "admin";
const mongo_password = "admin";
const uri = "mongodb+srv://admin:admin@cluster0.qdrfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;

const port = 3000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500
        
    }
).catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client =>{
    await ReviewsDAO.injectDB(client);
    app.listen(port,()=>{
        console.log("listening on port"+ port);
    });
});