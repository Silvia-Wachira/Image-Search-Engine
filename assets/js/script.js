const accessKey = "VHbFwfI389_VZnCca4GWuVPLzGuXYfbb6EqxHhlve1I"
const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreButton = document.getElementById("show-more-btn")


let keyword = "";
let page = 1;
async function searchImages() {
     keyword = searchBox.value;
     const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id={accessKey}';
}