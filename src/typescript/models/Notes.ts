export class Note{

    title:String
    content:String
    owner_id:String
    creation_date:String
    color:String


    constructor(
        title:String,
        content:String,
        owner_id:String,
        creation_date:String,
        color:String
    ){
        
        assertNotUndefined(title)
        assertNotUndefined(content,"content")
        assertNotUndefined(owner_id,"owner_id")
        assertNotUndefined(creation_date,"creation_date")
        assertNotUndefined(color,"color")

        this.title = title
        this.content = content
        this.owner_id = owner_id
        this.creation_date = creation_date
        this.color = color
    
    }

}

function assertNotUndefined(any:Object, str:String="ddd"){
    if(any === undefined)
        throw TypeError("Please init member "+str)
}