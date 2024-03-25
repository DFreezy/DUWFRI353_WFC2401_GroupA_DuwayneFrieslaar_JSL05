// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];
    songs.push({title: 'What the hell', artist: 'Avril Lavigne', genre: 'Pop'});
    songs.push({title: 'Coma', artist: 'Nick Carter', genre: 'Electro Pop'});
    songs.unshift({title: 'Heaven', artist: 'Niall Horan', genre: 'Pop'});
    songs.push({title: "fire", artist: "BTS", genre: "KPop"});
    songs.unshift({title: "Runaway baby", artist: "Bruno Mars", genre: "Rock"});
    songs.push({title: 'Venom', artist: 'Straykids', genre: 'KPop'}),
    songs.unshift({title: 'Dionysus', artist: 'BTS', genre: 'KPop'}),
    songs.push({title: 'Pink venom', artist: 'Blackpink', genre: 'KPop'});
    songs.push({ title: "Clouds of heaven", artist: "Duwayne Frieslaar", genre: "R&B" })
// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "R&B",
    "Groot": "KPop",
};


function generatePlaylist(guardians, songs) {
    // Use map() to create playlists for each guardian
    const playlists = Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const guardianSongs = songs.filter(song => song.genre === genre);
        const playlist = guardianSongs.map(song => ({
            title: song.title,
            artist: song.artist,
            duration: song.duration,
            isFavorite: false
        }));
        return { guardian, playlist };
    });
    return playlists;
}


const playlists = generatePlaylist(guardians, songs);
playlists.forEach(playlist => {
    console.log(`Playlist for ${playlist.guardian}:`);
    playlist.playlist.forEach(song => {
        console.log(`${song.title} - ${song.artist}`);
    });
});

// Select the playlists container
// Select the playlists container
const playlistsContainer = document.getElementById("playlists");

// Call generatePlaylist and display the playlists for each Guardian
const playlists1 = generatePlaylist(guardians, songs);

// Clear any existing content in the playlists container
playlistsContainer.innerHTML = '';

// Iterate over each playlist
playlists1.forEach(playlist => {
    // Create a div element for the Guardian's playlist
    const guardianDiv = document.createElement("div");
    // Set id attribute for the div
    guardianDiv.setAttribute("id", `${playlist.guardian.toLowerCase()}-playlist`);
    
    // Create a heading element for the Guardian's playlist
    const heading = document.createElement("h1");
    heading.textContent = `Playlist for ${playlist.guardian}:`;

    // Create an unordered list element for the playlist songs
    const playlistList = document.createElement("ul");

    // Iterate over each song in the playlist
    playlist.playlist.forEach(song => {
        // Create a list item element for the song
        const listItem = document.createElement("li");
        listItem.textContent = `${song.artist}`;
        const songLink = document.createElement("a");
    songLink.textContent = `${song.title}`
    songLink.href = "your_song_url_here"; // Replace "your_song_url_here" with the actual URL of the song
    
    // Append the anchor to the list item
        
        // Append the list item to the playlist list
        playlistList.appendChild(listItem);
        listItem.appendChild(songLink)
    });

    // Append the heading and playlist list to the guardianDiv
    guardianDiv.appendChild(heading);
    guardianDiv.appendChild(playlistList);

    // Append the guardianDiv to the playlists container
    playlistsContainer.appendChild(guardianDiv);
});

// Apply CSS to display the playlists side by side
// Apply CSS to the playlists container to adjust layout
playlistsContainer.style.display = "flex";
playlistsContainer.style.flexWrap = "wrap";
playlistsContainer.style.margin = "20px";
playlistsContainer.style.justifyContent = "space-between"; // Align playlists at the beginning and end of the container

// Apply CSS to the guardianDiv to adjust layout
guardianDiv.style.flexBasis = "45%"; // Set the width of each playlist div
guardianDiv.style.marginBottom = "20px"; // Add margin between playlist divs
