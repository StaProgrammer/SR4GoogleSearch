function searchGoogle() {
    var query = document.getElementById('google-search-input').value;
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
}

function searchImages() {
    var query = document.getElementById('image-search-input').value;
    window.location.href = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(query);
}

function googleSearch() {
    var searchInput = document.getElementById('search-input');
    var query = searchInput.value;
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = searchUrl;
}

function feelingLucky() {
    var searchInput = document.getElementById('search-input');
    var query = searchInput.value;
    var feelingLuckyUrl = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI=I%27m+Feeling+Lucky";
    window.location.replace(feelingLuckyUrl);
}



