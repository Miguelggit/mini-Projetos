document.addEventListener('DOMContentLoaded', () => {
//Selecionando Elementos
    const barraDeMensagem = document.querySelector("#inputMensagem");
    console.log(barraDeMensagem);

    const botaoEnviar = document.querySelector('#botaoEnviar');
    console.log(botaoEnviar);

    barraDeMensagem.placeholder = "Digite sua mensagem: "

    const caixaDeMensagens = document.querySelector(".caixa--de--mensagens");
    console.log(caixaDeMensagens);

    const respostaDoBOT = [
        "Oi",
        "Como voce esta?",
        "Meu nome é O Novo Bot",
        "Posso te ajudar?",
        "Estou aqui para ajudar voce.",
        "Qual é o seu nome?"
    ]
//lista--de--contatos
    const listaDeContatos = [
        {
            id: 1,
            nome: "Miguel",
            avatar: "src/assets/images/greg--james.png",
            ultimoHorario: '20:20',
            ultimaMensagem: "Ola, Vamos programar",
            conversas: [
                {mensagem: "Oi eu sou O Novo Programador", tipo: "recebido", horario: "20:19"},
                {mensagem: "Eae vamos programar?", tipo: "enviado", horario: "20:19"},
                {mensagem: "Claro!", tipo: "recebido", horario: "20:19"}
            ]
        },
        {
            id: 2,
            nome: "Aylla",
            avatar: "src/assets/images/emily--dorson.png",
            ultimoHorario: '20:20',
            ultimaMensagem: "Ola, vamos programar",
            conversas: [
                {mensagem: "Oi eu sou O Novo Programador", tipo: "recebido", horario: "20:19"},
                {mensagem: "Eae vamos programar?", tipo: "enviado", horario: "20:19"},
                {mensagem: "Claro!", tipo: "recebido", horario: "20:19"}
            ]
        },
        {
            id: 3,
            nome: "Lucas",
            avatar: "src/assets/images/david--moore.png",
            ultimoHorario: '20:20',
            ultimaMensagem: "Tem cafe?",
            conversas: [
                {mensagem: "Oi eu sou O Novo Programador", tipo: "recebido", horario: "20:19"},
                {mensagem: "Tem café?", tipo: "enviado", horario: "20:19"},
                {mensagem: "Claro!", tipo: "recebido", horario: "20:19"}
            ]
        }

    ]
    
//Eventos de teclado e mouse
    botaoEnviar.addEventListener('click', () => {
       enviarMensagem()
    })

    barraDeMensagem.addEventListener("keydown", (evento) => {
        if(evento.key === "Enter"){
        enviarMensagem()
        }
    })

//Funções
    function renderizarMensagem(tipo, mensagem, horario) {
        const divMensagens = document.createElement("div");
        const identificacao = tipo === "enviado" ? "enviado" : "recebido"; 
        const direcao = tipo === "enviado" ? "voce" : "outros";
        divMensagens.classList.add(`${direcao}`, "fade-in");
        divMensagens.innerHTML = `
        <div class="boxe--mensagem ${identificacao}">
            <div class="mensagem">
                ${mensagem}
            </div>
            <div class="info--mensagem">
                <img src="src/assets/icons/heart.svg" class="coracao">
                ${horario}
                <img src="src/assets/icons/viewed.svg" class="visualizacao">
            </div>
        </div>
        `;
        return divMensagens;
    }

    function enviarMensagem() {
        const mensagem = barraDeMensagem.value.trim();
        if(mensagem === ""){
            alert("ERROR");
        } else {
        const mensagemRenderizada = renderizarMensagem("enviado", mensagem, "21:00") //Parametros que são lidos na função
        caixaDeMensagens.appendChild(mensagemRenderizada);
        barraDeMensagem.value = ""; 
        setTimeout(responderMensagem, 2000);
    
        }
    }

    function responderMensagem() {
        const posicao = Math.floor(Math.random()*respostaDoBOT.length) 
        const mensagemBOT = respostaDoBOT[posicao];
        const mensagemRenderizada = renderizarMensagem("recebido", mensagemBOT, "21:10");
        caixaDeMensagens.appendChild(mensagemRenderizada);
    }
   
    function carregarContatos() {
        
        const divContentElement = document.querySelector(".lista--de--contatos")
        
        listaDeContatos.forEach((contato) => {

            const divParentElement = document.createElement("div");
            divParentElement.classList.add("caixa--do--chat--do--contato", "fade-in")
            
            divParentElement.innerHTML = `
                    <div class="avatar--do--contato">
                        <img src="${contato.avatar}" class="avatar">
                    </div>
                    <div class="infos--do--contato">
                        <div class="textos">
                            <b class="nome--do--contato">${contato.nome}</b>
                            <p class="ultima--mensagem--do--contato">${contato.ultimaMensagem}</p>
                        </div>
                        <div class="ultimo--item--do--contato">
                            <div class="horas">
                                ${contato.ultimoHorario}
                            </div>
                        </div>
                    </div>          
            `;
           divContentElement.appendChild(divParentElement);
        })
    }
    setTimeout( () => {
        carregarContatos()
    }, 2500)

})