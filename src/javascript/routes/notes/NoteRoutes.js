"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpNoteRoutes = void 0;
const Notes_1 = require("../../models/Notes");
const Path_1 = require("./util/Path");
const NotesRepo_1 = require("../../repo/NotesRepo");
const typedi_1 = __importDefault(require("typedi"));
const ExpressHelper_1 = require("../../di/ExpressHelper");
require("reflect-metadata");
var app = typedi_1.default.get(ExpressHelper_1.ExpressHelper).app;
function setUpNoteRoutes() {
    addNote();
    listner();
}
exports.setUpNoteRoutes = setUpNoteRoutes;
var port = process.env.PORT || 5000;
function listner() {
    app.listen(port, () => {
        console.log("The application is listening on port 3000!");
    });
}
function addNote() {
    app.post(Path_1.Path.add_note_route, (req, res) => {
        try {
            let color = req.body.color;
            var title = req.body.title;
            var content = req.body.content;
            var owner_id = req.body.owner_id;
            var creation_date = req.body.creation_date;
            var note = new Notes_1.Note(title, content, owner_id, creation_date, color);
            new NotesRepo_1.NotesRepoImpl().addNote(note);
            res.json(note);
        }
        catch (err) {
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
