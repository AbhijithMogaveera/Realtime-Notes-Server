"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/notes/add-note', (req, res) => {
    try {
        console.log("Enter");
        var color = req.body.color;
        console.log("Enter 1");
        var title = req.body.content;
        var content = req.body.content;
        var owner_id = req.body.content;
        var creation_date = req.body.content;
        console.log("Enter 2");
        var note = new Note(title, content, owner_id, creation_date, color);
        console.log("Enter 3");
        res.json(note.toString());
        console.log("Exit");
    }
    catch (err) {
        if (err instanceof TypeError) {
            res.send({
                error: 'Please provide following field ' + err.message
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
