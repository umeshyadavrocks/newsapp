async function apiCall(url) {

try {
    let res =await fetch(url);
    let data = await res.json();
    return data;
} catch (error) {
    console.log("error:", error);
}
    //add api call logic here


}


function appendArticles(articles, main) {
    data.array.forEach(element => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.url = element.url;
        let p = document.createElement('p');
        p.innerText = element.description;
        div.append(p,image);
        main.append(div);
    });
    //add append logic here

}

export { apiCall, appendArticles };
