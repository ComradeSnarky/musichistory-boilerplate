var songs = [
  {
    name: 'Give it to me baby',
    artist: 'Rick James',
    album: 'Funk Forever',
    genre: 'Funk'
  },
  {
    name: 'Dance Yrself Clean',
    artist: 'LCD Soundsystem',
    album: 'This is Happening',
    genre: 'Electronica'
  },
  {
    name: 'Just One of the Guys',
    artist: 'Jenny Lewis',
    album: 'The Voyager',
    genre: 'Indie'
  },
  {
    name: 'Romeo',
    artist: 'Chairlift',
    album: 'Moth',
    genre: 'Indie Dance'
  },
  {
    name: 'Come on Sister',
    artist: 'Belle & Sebastian',
    album: 'Write About Love',
    genre: 'Indie Pop'
  },
  {
    name: 'French Navy',
    artist: 'Camera Obscura',
    album: 'My Mauldin Career',
    genre: 'Pop'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  {
    name: 'Feeling OK',
    artist: 'Best Coast',
    album: 'California Nights',
    genre: 'Easy Listening'
  },
  ];


songs.forEach(function (songsObj) {
   let outputArticle = document.querySelector('.songInput');
   outputArticle.innerHTML += `
            <section class="songSection">
               <p>${songsObj.name}</p>
               <p>${songsObj.artist}</p>
                 <p><strong>|</strong></p>
               <p>${songsObj.album}</p>
                 <p><strong>|</strong></p>
               <p>${songsObj.genre}</p>
            </section>`;
          });


// Once the user fills out the song form and clicks the add button,
// you should collect all values from the input fields,
// add the song to your array of songs, and update the song list in the DOM.