import mongoose  from "mongoose";

const connectToDB = async ()=> {
    await mongoose.connect(process.env.MONGO_URL)
        .then((conn)=>{
            console.log(`Connected to Database ${conn.connection.host}`)
        })
        .catch((e)=>{ 
            console.log(e) 
            process.exit(1)
         })
} 
export default connectToDB    
