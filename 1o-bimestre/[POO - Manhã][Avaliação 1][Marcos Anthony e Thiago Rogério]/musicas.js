let musica1 = {
    poster: "bahia.jpg",
    nome: "Bahia",
    artistas: "Alee",
    album: "Single"
};

let musica2 = {
    poster: "burnitdown.jpg",
    nome: "Burn It Down",
    artistas: "Linkin Park",
    album: "Living Things"
};

let musica3 = {
    poster: "business.jpg",
    nome: "Business",
    artistas: "Ryu, the Runner",
    album: "Essa é a Vida de um Corredor"
};

let musica4 = {
    poster: "fimdesemananorio.jpg",
    nome: "Fim de Semana no Rio",
    artistas: "Teto",
    album: "Single"
};

let musica5 = {
    poster: "jaguar.jpg",
    nome: "Jaguar",
    artistas: "Brandão85",
    album: "Zoo"
};

let musica6 = {
    poster: "maquinadotempo.jpg",
    nome: "Máquina do Tempo",
    artistas: "Matuê",
    album: "Máquina do Tempo"
};

let musica7 = {
    poster: "nirvana.jpg",
    nome: "Smells Like Teen Spirit",
    artistas: "Nirvana",
    album: "Nevermind"
};

let musica8 = {
    poster: "quieto.jpg",
    nome: "Quieto",
    artistas: "Leviano",
    album: "Single"
};

let musica9 = {
    poster: "stressedout.jpg",
    nome: "Stressed Out",
    artistas: "Twenty One Pilots",
    album: "Blurryface"
};

let musica10 = {
    poster: "vidachique.jpg",
    nome: "Vida Chique",
    artistas: "Veigh",
    album: "Dos Prédios"
};

let listaDeMusicas = [];
listaDeMusicas.push(musica1, musica2, musica3, musica4, musica5, musica6, musica7, musica8, musica9, musica10);

for (let i = 0; i < listaDeMusicas.length; i++) {
    document.write(
        `<div class = 'card'>
            <img src='img/${listaDeMusicas[i].poster}' />
            <h2 class="nome">Nome: ${listaDeMusicas[i].nome} </h2>
            <p class="artistas">Artistas: ${listaDeMusicas[i].artistas} </p>
            <p class="album">Álbum: ${listaDeMusicas[i].album} </p>
        </div>
    `);
}