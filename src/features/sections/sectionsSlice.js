import data from "../../data";

const initialState = data.sections

export const sectionExpandedOrCollapsed = (id) => {
  return {
    type: 'sections/sectionExpandedOrCollapsed',
    payload: id
  }
}

export const allSectionsExpanded = () => {
  return {
    type: 'sections/allSectionsExpanded'
  }
}

export default function sectionsReducer(state = initialState, action) {
  switch (action.type) {
    case 'sections/sectionExpandedOrCollapsed': {
      return state.map(section => {
        if (section.id !== action.payload) {
          return section
        }

        return {
          ...section,
          expanded: !section.expanded
        }
      })      
    }
    case 'sections/allSectionsExpanded': {
      return state.map((section) => {
        return { ...section, expanded: true }
      })
    }    
    default:
      return state
  }
}