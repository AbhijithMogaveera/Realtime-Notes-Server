"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(title, content, owner_id, creation_date, color) {
        assertNotUndefined(title);
        assertNotUndefined(content, "content");
        assertNotUndefined(owner_id, "owner_id");
        assertNotUndefined(creation_date, "creation_date");
        assertNotUndefined(color, "color");
        this.title = title;
        this.content = content;
        this.owner_id = owner_id;
        this.creation_date = creation_date;
        this.color = color;
    }
}
exports.Note = Note;
function assertNotUndefined(any, str = "ddd") {
    if (any === undefined)
        throw TypeError("Please init member " + str);
}
