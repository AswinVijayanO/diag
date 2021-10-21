const getMovies   = async(page)=> {
    try {
        let data = await import(`./../api/CONTENTLISTINGPAGE-PAGE${page}.json`);
        return {error:false,data:data.default}
    } catch {
        return {error:true,data:{}}
    }
  
}
export {getMovies}