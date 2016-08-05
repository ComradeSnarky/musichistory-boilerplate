var songs = [{
    name: 'Dance Yrself Clean',
    artist: 'LCD Soundsystem',
    album: 'This is Happening',
    genre: 'Electronica'
}, {
    name: 'Just One of the Guys',
    artist: 'Jenny Lewis',
    album: 'The Voyager',
    genre: 'Indie'
}, {
    name: 'Romeo',
    artist: 'Chairlift',
    album: 'Moth',
    genre: 'Indie Dance'
}, {
    name: 'Come on Sister',
    artist: 'Belle & Sebastian',
    album: 'Write About Love',
    genre: 'Indie Pop'
}, {
    name: 'French Navy',
    artist: 'Camera Obscura',
    album: 'My Mauldin Career',
    genre: 'Pop'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
}, ];


songs.forEach(function(songsObj) {
    let outputArticle = document.querySelector('.songInput');
    outputArticle.innerHTML += `
            <section class="songSection">
               <p>${songsObj.name}</p>
               <p>${songsObj.artist}</p>
               <p>${songsObj.album}</p>
               <p>${songsObj.genre}</p><button class="delete">Delete</button>
            </section>`;
});

// Once the user fills out the song form and clicks the add button,
// you should collect all values from the input fields,
// add the song to your array of songs, and update the song list in the DOM.

document.getElementById("addMusicButton").addEventListener('click', function() {

    var addSong = document.getElementById('userSongInput').value;
    var addArtist = document.getElementById('userArtistInput').value;
    var addAlbum = document.getElementById('userAlbumInput').value;
    var addNewSong = addSong + " " + addArtist + " " + addAlbum

    songList.innerHTML +=
        `<p>${addNewSong} <button class="delete">Delete</button></p>`
    document.getElementById('userSongInput').value = ""
    document.getElementById('userArtistInput').value = ""
    document.getElementById('userAlbumInput').value = ""
})


document.querySelector("body").addEventListener("click", function(event) {
    console.log(event);
    console.log(event.target.parentElement)
    if (event.target.className.toLowerCase() ===
        "delete") {

        event.target.parentElement.remove();

    }
})

var deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", function(e) {
    console.log('ta');
    document.querySelector(".songSection ").innerHTML = '';

})


