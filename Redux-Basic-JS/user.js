export function firstName(name){
     
    return{
     type:"FIRST_NAME",
     payload:name
    
    }
}

export function lastName(name){
    return{
        type:"LAST_NAME",
        payload:name
        
    }
    
    
}

export function id(idNUM){
    return{
        type:"ID",
        payload:idNUM
    }
    
}

export function email(emailAddress){
    return{
        type:"EMAIL",
        payload:emailAddress
        
    }
}

const userDetails={
    
    firstName:"Tesfa",
    lastName:"Tesfaye",
    id:"3",
    email:"tesfaget15@gmail.com"
}


  export default function userReducer(users=userDetails,action ){

            switch(action.type){
                case "FIRST_NAME":
                return{
                    ...users,firstName:action.payload
                }

                case "LAST_NAME":
                    return{
                        ...users,lastName:action.payload
                    }

                case "ID":
                    return{
                    ...users,id:action.payload
                    }  
                case "EMAIL":
                        return{
                       ...users,email:action.payload
                      }        
        
                      
                      default :
                      return users
                    }      
                

            }
            
