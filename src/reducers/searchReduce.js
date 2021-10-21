const searchReducer = (state = {}, action) => {
  let items = []
  switch (action.type) {
    case "SET_QUERY":
      return {...state,query:action.payload};
    case "SET_DATA":
      items =[]
      if(state.query) {
         items = action.payload.data.page['content-items']['content'].filter((item)=>item.name.toLowerCase().includes(state.query.toLowerCase()))
      }else {
        items = action.payload.data.page['content-items']['content']
      }
    
      return {...state,data:{items:items,title:action.payload.data.page.title,total:action.payload.data.page['total-content-items'],page:action.payload.data.page['page-num-requested']}};
    case "APPEND":
       items =[]
      if(action.payload.error) {
        return {...state,data:{...state.data,total:state.data.items.length}}
      }
      if(state.query) {
        items = action.payload.data.page['content-items']['content'].filter((item)=>item.name.toLowerCase().includes(state.query.toLowerCase()))
     }else {
       items = action.payload.data.page['content-items']['content']
     }
      return {...state,data:{...state.data,page:action.payload.data.page['page-num-requested'],items:[...state.data.items,...items]}}
      default:
      return state;
  }
};
export default searchReducer;
