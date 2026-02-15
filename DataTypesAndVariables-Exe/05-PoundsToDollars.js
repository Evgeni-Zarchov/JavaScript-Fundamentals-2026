function converter(GBR) {
    const USD = GBR * 1.31;

    console.log(`${USD.toFixed(3)}`);
}

converter(80);
converter(39);