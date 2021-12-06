import { Note } from "../../models/Notes";
import { Path } from "./util/Path";
import { NotesRepoImpl } from "../../repo/NotesRepo";
import Container, { Service } from "typedi";
import { ExpressHelper } from "../../di/ExpressHelper";
import "reflect-metadata";

var app = Container.get(ExpressHelper).app;

export function setUpNoteRoutes() {
  addNote();
  listner();
}

function listner() {
  app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
  });
}

function addNote() {
  app.post(Path.add_note_route, (req, res) => {
    try {
      let color: String = req.body.color;
      var title: String = req.body.title;
      var content: String = req.body.content;
      var owner_id: String = req.body.owner_id;
      var creation_date: String = req.body.creation_date;
      var note = new Note(title, content, owner_id, creation_date, color);
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
