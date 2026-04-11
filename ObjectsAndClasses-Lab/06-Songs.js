function music(arr) {
    class Song {
        constructor(type, songName, time) {
            this.type = type,
                this.songName = songName,
                this.time = time;
        }
    }



    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();

    let songList = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split("_");

        let song = new Song(type, name, time);
        songList.push(song);

    }

    if (typeSong === "all") {
        songList.forEach((songs) => console.log(songs.songName));
    } else {
        let filtered = songList.filter((x) => x.type === typeSong);
        filtered.forEach((i) => console.log(i.songName));
    }

}

music([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

music([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);