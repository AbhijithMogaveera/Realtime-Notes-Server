import express from 'express';
import { Note } from './models/Notes';
const app = express();
app.use(express.json())
app.post('/notes/add-note',function(req, res){
    try{
        let color:String = req.body.color 
        var title:String = req.body.title 
        var content:String = req.body.content 
        var owner_id:String = req.body.owner_id 
        var creation_date:String = req.body.creation_date 
        var note = new Note(title, content,owner_id, creation_date, color)
        res.json(note);
    }catch(err){
        if(err instanceof TypeError){
            res.send({
                error:'Please provide following field => '+ err.message
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
