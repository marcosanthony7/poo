let musica1 = {
    spotify: "https://open.spotify.com/embed/track/4hKLzFvNwHF6dPosGT30ed?si=63b8f48a82bb46c4"
};

let musica2 = {
    spotify: "https://open.spotify.com/embed/track/39xOREhViooEYFpmnKTdrl?si=1068d38f35254d42"
};

let musica3 = {
    spotify: "https://open.spotify.com/embed/track/7oWd2k0fhorqIpXotLNN9F?si=da2aa63e06ef457c"
};

let musica4 = {
    spotify: "https://open.spotify.com/embed/track/3hLoH18k4pP6eXEljzNHHr?si=fdfd4ca1051a414e"
};

let musica5 = {
    spotify: "https://open.spotify.com/embed/track/7qrQs4rPGCXnwNyLn2YVCT?si=ab03cbc4ec264dfd"
};

let listaDeMusicas = [musica1, musica2, musica3, musica4, musica5];

for (let i = 0; i < listaDeMusicas.length; i++) {
    document.write(
        `<div class = 'card'>
            <iframe
                style="border-radius:12px"
                src="${listaDeMusicas[i].spotify}?theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </div>
    `);
}