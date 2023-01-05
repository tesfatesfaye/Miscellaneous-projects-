const redux = require("redux")
const {combineReducers, createStore} = redux
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store



/**
 * Challenge: set up redux action creators, reducer, and store
 * We'll be building a counter app to start out.
 * Read the comments below for the step-by-step challenges
 */

// 1. Create action creators for having the count "increment" and "decrement"


// 2. Create a reducer to handle your increment and decrement actions


// 3. Create a new Redux store


// 4. Set up the subscribe function so we can more easily see the changes to the Redux state as they happen


// 5. Export the store as a default export
