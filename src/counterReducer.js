// STEP #3: Create the change trigger definitions
// You would usually define these in a separated file
const counterChangeTriggers = (state = 0, action) => {
    if (action.type === "INCREMENT") { 
        return state + 1;
      }
      // ...and optionally payload validation! (more on that later)
    
    if (action.type === "DECREMENT") {
        return state - 1;
      }
      return state;
  };

export default counterChangeTriggers;