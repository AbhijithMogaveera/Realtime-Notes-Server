import { Client, Configuration, SSLMode } from "ts-postgres";
try{
    var config:Configuration = {
        user:"admin",
        password:"admin",
        port:5432,
        host:"192.168.104.43",
        database:"notes",
    };
    
    var client = new Client(config)
    client.connect()
    console.log(client.query("SELECT level FROM DUAL CONNECT BY level <=10").rows?.forEach((it)=>{it.forEach((it)=>{
        console.log(it?.toLocaleString)
    })}));
    console.log()
}catch(err){
    console.log("abhi")
}