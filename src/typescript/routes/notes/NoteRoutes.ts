import { Note } from "../../models/Notes";
import { Path } from "./util/Path";
import { NotesRepoImpl } from "../../repo/NotesRepo";
import Container, { Service } from "typedi";
import { ExpressHelper } from "../../di/ExpressHelper";
import "reflect-metadata";

var app = Container.get(ExpressHelper).express;

export function setUpNoteRoutes() {
  addNote();
}

function addNote() {
  app.post(Path.add_note_route, (req, res) => {
    try {

      let color: string = req.body.color;
      var title: string = req.body.title;
      var content: string = req.body.content;
      var owner_id: string = req.body.owner_id;
      var creation_date: string = req.body.creation_date;
      var note = new Note(title, content, owner_id, creation_date, color,"no-id");
      new NotesRepoImpl().addNote(note);
      res.json(note);
    
    } catch (err) {
    
      if (err instanceof TypeError) {
        res.status(400).send({
          error: "Please provide following field => " + err.message,
        });
      }
    
      res.status(500).send({
    
        error: "Un hadled error " + err,
    
      });
    
    }
  
  });
}
