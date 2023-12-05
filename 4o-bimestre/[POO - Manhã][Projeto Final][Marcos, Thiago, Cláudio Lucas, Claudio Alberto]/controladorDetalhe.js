const params = new URLSearchParams(window.location.search);
const codigoGrupo = params.get('codigo');

desenharCardDetalhes('cardDetalhe', listaDeGrupos, codigoGrupo);