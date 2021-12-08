import { 
    Client, 
    ClientConfig 
  } from "pg";
import { Service } from "typedi";
  
 
@Service()
export class SqlHelper{

    client:Client

    constructor(){
        const newLocal :ClientConfig= {
            connectionString: "...",
            ssl: {     
              rejectUnauthorized: false 
            },
          };
          const client = new Client(newLocal);
          client.connect();
          this.client = client
    }
}