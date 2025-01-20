

 export function setYouTubeTitle(title){
    return{
       type:"SET_YOUTUBE_TITLE",
       payload:title
    
    }
  }
 
  
  export function upVote(){
    return{
       type:"DOWN_VOTE"
       
    }
  }
 
  export function downVote(){
    return{
       type:"UP_VOTE"
    }
  }
 
  export function incrementViewCount(){

    return{
        type: "INCREMENT_VIEW_COUNT"
    }



  }

  const youtubeVideoState={
    
        title:"",
        viewCount:0,
        votes:{
           up:0,
           down:0
        }
     
  }

  export default function youtubeVideoReducer(youtubeVideo=youtubeVideoState, action){

    switch(action.type){
        case "INCREMENT_VIEW_COUNT":
            return{
               ...youtubeVideo, viewCount: youtubeVideo.viewCount+1
            }

         case "SET_YOUTUBE_TITLE":
               return{
                  ...youtubeVideo ,title:action.payload
               }
         case "DOWN_VOTE":
               return{
                  ...youtubeVideo, votes:{...youtubeVideo.votes, down:state.youtubeVideo.votes.down+1}
               }

          case "UP_VOTE":
            return{
                ...youtubeVideo, votes:{...youtubeVideo.votes, up:state.youtubeVideo.votes.up+1}
             }

             default:
                return youtubeVideo
            }

    

  }