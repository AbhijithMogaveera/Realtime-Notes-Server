import { 
  Client, 
  ClientConfig 
} from "pg";

const newLocal :ClientConfig= {
  connectionString: "postgres://nypzfjhlpugecj:03337f885620edc443ff6fa9028609ef8a3259b9529c3b96dcb9cecca8ee232f@ec2-44-198-211-34.compute-1.amazonaws.com:5432/dejhk6va8sf4in",
  ssl: {     
    rejectUnauthorized: false 
  },
};

const client = new Client(newLocal);

client.connect();

try {
  client.query("SELECT * FROM User", [], (err, res) => {
    if (err) throw err
      console.log(res)
  })
} catch (err) {
  console.log("Error")
}

console.log("Finished")
