import express from 'express';
const app = express();
app.use(express.json())
app.post('/notes/add-note', (req, res) => {
    try{
        console.log("Enter")
        var color:String = req.body.color
        console.log("Enter 1")
        var title:String = req.body.content 
        var content:String = req.body.content 
        var owner_id:String = req.body.content 
        var creation_date:String = req.body.content 
        console.log("Enter 2")
        var note = new Note(title, content,owner_id, creation_date, color)
        console.log("Enter 3")
        res.json(note.toString());
        console.log("Exit")
    }catch(err){
        if(err instanceof TypeError){
            res.send({
                error:'Please provide following field '+ err.message
            });
        }
        res.send({
            error:'Un hadled error '+ err
        });
    }
    
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})