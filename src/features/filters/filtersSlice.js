import data from "../../data";

// export const DomainFilters = {
//   All: 'all',
//   Coding: 'coding',
//   English: 'english'
// }

const initialState = data.filters

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {    
    case 'filters/domainFilterChanged': {
      return {
        ...state,
        domain: action.payload
      }      
    }
    case 'filters/techsFilterChanged': {
      let { tech, changeType } = action.payload
      const { techs } = state

      switch (changeType) {
        case 'added': {
          if (techs.includes(tech)) {
            return state
          }

          return {
            ...state,
            techs: state.techs.concat(tech)
          }
        }
        case 'removed': {
          return {
            ...state,
            techs: state.techs.filter(
              (existingTech) => existingTech !== tech
            )
          }
        }
        default:
          return state
      }
    }
    default:
      return state
  }
}
