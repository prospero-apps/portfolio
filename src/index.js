import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() => 
  console.log('State after dispatch: ', store.getState())
)

// store.dispatch({ type: 'sections/sectionExpandedOrCollapsed', payload: 0})
// store.dispatch({ type: 'sections/allSectionsExpanded' })
// store.dispatch({ type: 'filters/domainFilterChanged', payload: 'english'})
// store.dispatch({ type: 'filters/techsFilterChanged', payload: { tech: 'react', changeType: 'added' } })

// unsubscribe()

// store.dispatch({ type: 'sections/sectionExpandedOrCollapsed', payload: 2})




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
