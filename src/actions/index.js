export const searchMovies = (query)=>{
    return {
        type: 'SET_QUERY',
        payload: query
    }
}

export const setData = (data)=>{
    return {
        type: 'SET_DATA',
        payload:data
    }
}

export const append = (data)=>{
    return {
        type:"APPEND",
        payload:data
    }
}