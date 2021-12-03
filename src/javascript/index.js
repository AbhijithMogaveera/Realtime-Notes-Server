"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Notes_1 = require("./models/Notes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/notes/add-note', function (req, res) {
    try {
        let color = req.body.color;
        var title = req.body.title;
        var content = req.body.content;
        var owner_id = req.body.owner_id;
        var creation_date = req.body.creation_date;
        var note = new Notes_1.Note(title, content, owner_id, creation_date, color);
        res.json(note);
    }
    catch (err) {
        if (err instanceof TypeError) {
            res.send({
                error: 'Please provide following field => ' + err.message
            });
        }
        res.send({
            error: 'Un hadled error ' + err
        });
    }
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
