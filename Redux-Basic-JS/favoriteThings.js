
export function addFavoriteThing(thing){

    return{
       type:"ADD_FAVORITE_THING",
       payload: thing
 
    }
 }
 
 export function removeFavoriteThing(thing){

    return{
       type:"REMOVE_FAVORITE_THING",
       payload:thing
    }
  }

 export default function favoriteThingsReducer(favoriteThings=["down with the sickness", "wee"], 
      action){

        switch(action.type){
        case "ADD_FAVORITE_THING":
          return [...favoriteThings, action.payload]

        case "REMOVE_FAVORITE_THING":
            const favoriteThingsHolder= favoriteThings.filter(x=> x.toLowerCase() !==action.payload.toLowerCase())
            return favoriteThingsHolder
    
        default:
        return favoriteThings
  }
        }

       