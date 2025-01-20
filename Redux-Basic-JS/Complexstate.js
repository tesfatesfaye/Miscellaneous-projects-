import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"

import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import  {firstName,lastName,id,email} from "./redux/user"






store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(firstName("George"))
store.dispatch(lastName("lopez"))
store.dispatch(email("tesfatget15@gmail.com"))
store.dispatch(id(41325))





