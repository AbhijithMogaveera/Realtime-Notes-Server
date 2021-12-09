import { assertNotUndefined } from "./Notes";

class User{
    
    name:String;
    user_id:String;

    constructor(
        name:String,
        user_id:String,
    ){

        assertNotUndefined(name)
        assertNotUndefined(user_id)

        this.name = name,
        this.user_id  = user_id
        
    }

}