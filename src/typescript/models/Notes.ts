import { AssertionError } from "assert/strict"

export class Note{

    title:string
    content:string
    owner_id:string
    creation_date:string
    color:string
    id: string;

    constructor(
        title:string,
        content:string,
        owner_id:string,
        creation_date:string,
        color:string,
        id:string
    ){
    
        assertNotUndefined(title,"title")
        assertNotUndefined(content,"content")
        assertNotUndefined(owner_id,"owner_id")
        assertNotUndefined(creation_date,"creation_date")
        assertNotUndefined(color,"color")
        assertNotUndefined(id,"id")

        this.title = title
        this.content = content
        this.owner_id = owner_id
        this.creation_date = creation_date
        this.color = color
        this.id = id
    
    }

}

export function assertNotUndefined(any:Object, str:String="ddd"){
    if(any === undefined)
        throw TypeError("Please init member "+str)
}