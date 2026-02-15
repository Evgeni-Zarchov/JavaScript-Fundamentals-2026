function gramophone(bandName, album, song) {
    let time = (album.length * bandName.length) * song.length / 2;


    console.log(`The plate was rotated ${Math.ceil(time / 2.5)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');