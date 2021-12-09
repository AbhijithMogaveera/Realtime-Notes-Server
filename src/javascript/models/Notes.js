"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(title, content, owner_id, creation_date, color, id) {
        assertNotUndefined(title);
        assertNotUndefined(content, "content");
        assertNotUndefined(owner_id, "owner_id");
        assertNotUndefined(creation_date, "creation_date");
        assertNotUndefined(color, "color");
        assertNotUndefined(id, "id");
        this.title = title;
        this.content = content;
        this.owner_id = owner_id;
        this.creation_date = creation_date;
        this.color = color;
        this.id = id;
    }
}
exports.Note = Note;
function assertNotUndefined(any, str = "ddd") {
    if (any === undefined)
        throw TypeError("Please init member " + str);
}
