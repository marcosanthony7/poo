function desenharGruposCards(idDoContainer, arrayComOsGrupos){
    let containerCards = document.getElementById(idDoContainer);
    containerCards.innerHTML = ''; //Limpa o conteúdo do container
    
    for (const grupo of arrayComOsGrupos) {
        containerCards.innerHTML += `
            <div class="card">
                <img class="foto" src="img/${grupo.foto}">
                <div class="conteudo">
                    <h2 class="titulo"><a href='detalhe.html?codigo_grupo=${grupo.codigo_grupo}'> ${grupo.nome} </a></h2>
                    <p class="descricao"> ${grupo.descricao} </p>
                </div>
                <div class="barra-botoes">
                    <button>Entrar</button>
                    <button class="material-symbols-outlined">Sair</button>
                </div>
            </div>
        `;
    }
}

function desenharCardDetalhes(idCard, arrayComOsGrupos, codigoGrupo){
    const grupo = arrayComOsGrupos.find((grupo)=> grupo.codigo==codigoGrupo );

    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = 
    `<div class="card-expandido">
        <img class="foto" src="img/${grupo.banner}">
        <div class="conteudo">
            <h2 class="titulo"> ${grupo.nome} </h2>
            <p class="descricao"> ${grupo.descricao}</p>
        </div>
        <div class="barra-botoes">
            <button>Entrar</button>
            <button>Sair</button>
        </div>
    </div>`;
}