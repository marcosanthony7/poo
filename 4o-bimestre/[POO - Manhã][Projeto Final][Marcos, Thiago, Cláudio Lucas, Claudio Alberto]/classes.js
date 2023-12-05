class Usuario{
    constructor(id_usuario, nome_usuario, email, senha, nome_exibido, foto, banner, descricao){
        this.id_usuario = id_usuario;
        this.nome_usuario = nome_usuario;
        this.email = email;
        this.senha = senha;
        this.nome_exibido = nome_exibido;
        this.foto = foto;
        this.banner = banner;
        this.descricao = descricao;
    }
}

class Participante extends Usuario{
    constructor(id_usuario, id_participante, nome_usuario, email, senha, nome_exibido, foto, banner, descricao){
        super(id_usuario, nome_usuario, email, senha, nome_exibido, foto, banner, descricao);
        this.id_participante = id_participante;
    }
}

class AdministradorGrupo extends Usuario{
    constructor(id_usuario, id_administrador, nome_usuario, email, senha, nome_exibido, foto, banner, descricao){
        super(id_usuario, nome_usuario, email, senha, nome_exibido, foto, banner, descricao);
        this.id_administrador = id_administrador;
    }
}

class Comunidade{
    constructor(codigo_comunidade, nome, foto, banner, descricao, lista_usuarios){
        this.codigo_comunidade = codigo_comunidade;
        this.nome = nome;
        this.foto = foto;
        this.banner = banner;
        this.descricao = descricao;
        this.lista_usuarios = lista_usuarios;
    }
}

class ParticipanteComunidade extends Comunidade{
    constructor(id_participante, codigo_comunidade){
        super(id_participante, codigo_comunidade);
    }
}

class Grupo extends Comunidade{
    constructor(codigo_comunidade, codigo_grupo, nome, foto, banner, descricao, lista_usuarios){
        super(codigo_comunidade);
        this.codigo_grupo = codigo_grupo;
        this.nome = nome;
        this.foto = foto;
        this.banner = banner;
        this.descricao = descricao;
        this.lista_usuarios = lista_usuarios;
    }
}

class ParticipanteGrupo extends Grupo{
    constructor(id_participante, codigo_grupo){
        super(id_participante, codigo_grupo);
    }
}

class Amigos extends Usuario{
    constructor(id_usuario){
        super(id_usuario);
        this.id_usuario1 = id_usuario;
        this.id_usuario2 = id_usuario;
    }
}

class Mensagens extends Usuario{
    constructor(id_usuario, mensagem){
        super(id_usuario);
        this.id_origem = id_usuario;
        this.id_destino = id_usuario;
        this.mensagem = mensagem;
    }
}

class SalaJogo{
    constructor(id, horario, nome_jogo, quant_jogadores, quant_disponivel){
        this.id = id;
        this.horario = horario;
        this.nome_jogo = nome_jogo;
        this.quant_jogadores = quant_jogadores;
        this.quant_disponivel = quant_disponivel;
    }
}

class CanalVoz extends Grupo{
    constructor(codigo_grupo, id, nome,){
        super(codigo_grupo);
        this.id = id;
        this.nome = nome;
    }
}