import Container, { Service } from "typedi";
import { SqlHelper } from "../di/SqlHelper";
import { Note } from "../models/Notes";

@Service()
export class NotesRepoImpl implements NoteRepo {
  
  sqlHelper:SqlHelper

  constructor(){
    this.sqlHelper = Container.get(SqlHelper)
  }
  
  addNote(note: Note): Note {
    console.log(note);
    return note
  }
}

interface NoteRepo{
  addNote(note:Note):Note 
}