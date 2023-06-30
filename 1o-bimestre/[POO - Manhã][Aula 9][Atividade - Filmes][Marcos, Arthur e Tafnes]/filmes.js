let filme1 = {
    poster: "atravesDaMinhaJanela.jpg",
    nome: "Através da Minha Janela",
    genero: "Romance",
    anoDeLancamento: 2022,
    diretor: "Marçal Forés"
};

let filme2 = {
    poster: "espelhoEspelhoMeu.jpg",
    nome: "Espelho Espelho Meu",
    genero: "Comédia",
    anoDeLancamento: 2012,
    diretor: "Tarsem Singh"
};

let filme3 = {
    poster: "madagascar.jpg",
    nome: "Madagascar",
    genero: "Comédia",
    anoDeLancamento: 2005,
    diretor: "Eric Darnell"
};

let filme4 = {
    poster: "racionais.jpg",
    nome: "Racionais",
    genero: "Documentário",
    anoDeLancamento: 2022,
    diretor: "Juliana Vicente"
};

let filme5 = {
    poster: "gatoDeBotas.jpg",
    nome: "Gato de Botas",
    genero: "Comédia",
    anoDeLancamento: 2011,
    diretor: "Chris Miller"
};

let filme6 = {
    poster: "lagoaAzul.jpg",
    nome: "Lagoa Azul",
    genero: "Drama",
    anoDeLancamento: 1980,
    diretor: "Randal Kleiser"
};

let filme7 = {
    poster: "conselheiraDoAmor.jpg",
    nome: "Conselheira do Amor",
    genero: "Comédia Romântica",
    anoDeLancamento: 2022,
    diretor: "Kivanç Baruönü"
};

let filme8 = {
    poster: "jurassicWorld.jpg",
    nome: "Jurassic World",
    genero: "Ação e Aventura",
    anoDeLancamento: 2015,
    diretor: "Colin Trevorrow"
};

let filme9 = {
    poster: "homemAranhaLongeDeCasa.jpg",
    nome: "Homem-Aranha: Longe de Casa",
    genero: "Ação e Aventura",
    anoDeLancamento: 2019,
    diretor: "Jon Watts"
};

let filme10 = {
    poster: "rango.jpg",
    nome: "Rango",
    genero: "Comédia",
    anoDeLancamento: 2011,
    diretor: "Gore Verbinski"
};

let listaDeFilmes = [];
listaDeFilmes.push(filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10);

for (let i = 0; i < listaDeFilmes.length; i++) {
    document.write(
        `<div class = 'card'>
            <img src='img/${listaDeFilmes[i].poster}' />
            <h2 class="nome">Nome: ${listaDeFilmes[i].nome} </h2>
            <p class="genero">Gênero: ${listaDeFilmes[i].genero} </p>
            <p class="ano">Ano de Lançamento: ${listaDeFilmes[i].anoDeLancamento} </p>
            <p class="diretor">Diretor: ${listaDeFilmes[i].diretor} </p>
        </div>
    `);
}