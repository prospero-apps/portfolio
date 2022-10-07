import { combineReducers } from "redux"

import sectionsReducer from "./features/sections/sectionsSlice"
import filtersReducer from "./features/filters/filtersSlice"

const rootReducer = combineReducers({
  sections: sectionsReducer,
  filters: filtersReducer
})

export default rootReducer
