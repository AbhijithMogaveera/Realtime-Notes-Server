import { Service } from "typedi";
import { Note } from "../models/Notes";

@Service()
export class NotesRepoImpl implements NoteRepo {
  addNote(note: Note): Note {
    console.log(note);
    return note
  }
}

interface NoteRepo{
  addNote(note:Note):Note 
}