let jogo1 = {
    nome: "Valorant",
    empresa: "Riot Games",
    criador: "David Nottingham, Trevor Romleski, Salvatore Garozzo",
    classificacaoEtaria: 14,
    sinopse: "Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!",
    poster: "valorant.jpg"
};

let jogo2 = {
    nome: "Rocket League",
    empresa: "Psyonix",
    criador: "Corey Davis",
    classificacaoEtaria: 3,
    sinopse: "Descrito como futebol, mas com carros movidos a foguete, Rocket League tem de um a quatro jogadores designados para cada uma das duas equipes, usando veículos movidos a foguete para acertar o gol do adversário e marcar pontos ao longo de uma partida.",
    poster: "rocketleague.jpg"
};

let jogo3 = {
    nome: "League of Legends",
    empresa: "Riot Games",
    criador: "Steve Feak, Tom Cadwell, Mark Yetter, David Capurro, Rob Garrett, Christina Norman",
    classificacaoEtaria: 12,
    sinopse: "League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.",
    poster: "leagueoflegends.jpg"
};

let jogo4 = {
    nome: "Grand Theft Auto V",
    empresa: "Rockstar Games, Rockstar North",
    criador: "Leslie Benzies, Imran Sarwar",
    classificacaoEtaria: 18,
    sinopse: "O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.",
    poster: "gtav.jpg"
};

let jogo5 = {
    nome: "Minecraft",
    empresa: "Mojang Studios, Xbox Game Studios, Telltale Games, Sony Interactive Entertainment",
    criador: "Markus Persson, Jens Bergensten, MAIS",
    classificacaoEtaria: "Livre",
    sinopse: "Minecraft é um jogo eletrônico lançado em 2009 que consiste em sobreviver em um mundo formado (majoritariamente) por blocos cúbicos. Steve, o personagem controlado pelo jogador, inicia o jogo em um ambiente repleto de árvores, montanhas, rios.",
    poster: "minecraft.jpg"
};

let jogo6 = {
    nome: "Fortnite",
    empresa: "Epic Games, People Can Fly",
    criador: "Tim Sweeney",
    classificacaoEtaria: 13,
    sinopse: "Fortnite Battle Royale é um modo de jogo do gênero battle royale para até 100 jogadores, jogando sozinho ou em grupos de dois a quatro amigos. Os jogadores deixam um ônibus de batalha que cruza o mapa do jogo sem nenhuma arma.",
    poster: "fortnite.jpg"
};

let listaDeJogos = [];
listaDeJogos.push(jogo1, jogo2, jogo3, jogo4, jogo5, jogo6);

for (let i = 0; i < listaDeJogos.length; i++) {
    document.write(
        `<div class = 'card'>
            <img src='img/${listaDeJogos[i].poster}' />
            <h2 class="nome">Nome: ${listaDeJogos[i].nome} </h2>
            <p class="empresa">Empresa: ${listaDeJogos[i].empresa} </p>
            <p class="criador">Criador: ${listaDeJogos[i].criador} </p>
            <p class="classificacaoEtaria">Classificação Etária: ${listaDeJogos[i].classificacaoEtaria} </p>
            <p class="sinopse">Sinopse: ${listaDeJogos[i].sinopse} </p>
        </div>
    `);
}