import { dataNoticias } from './cadastroData.js';

class cadastroNoticias {

    constructor() {
        this.getDefaultScream();

        this.sendValues("oi", ["oi", "tchau"]);
    }

    // Tela principal Notícias  
    getDefaultScream() {
        this.scream = dataNoticias.defaultScreamData();
        document.getElementById('content').innerHTML = this.scream;
        
        // Captura de botões do menu pelo id
        document.getElementById('noticias').addEventListener('click', ()=> {
            alert("Tudo certo!");
        });

        document.getElementById('pesquisas').addEventListener('click', ()=> {
            alert("Tudo certo!");
        });

        document.getElementById('requisicoes').addEventListener('click', ()=> {
            alert("Tudo certo!");
        });

        //Botão de adicionar notícia
        document.getElementById('btnAdicionar').addEventListener('click', ()=> {
            this.getAddnews();
        });

        //Capturando botões do modal js
        document.getElementById('filtrar').addEventListener('click', () => {
            
            //Checkbox 
            this.agendada = document.getElementById('agendada').checked;
            this.rascunho = document.getElementById('rascunho').checked;
            this.publicada = document.getElementById('publicada').checked;
            this.excluir = document.getElementById('excluir').checked;

            //Idioma
            this.idioma = document.getElementById('idioma').value;

            //Categoria
            this.idioma = document.getElementById('categoria').value;

            // Título
            this.titulo = document.getElementById('titulo').value;

            // Período de consulta
            this.de = document.getElementById('de').value;
            this.ate = document.getElementById('ate').value;

            // Tag
            this.tag = document.getElementById('tag').value;

        });
        
    }

    // Tela adicionar notícias
    getAddnews() {

        // Adicionando a tela de Notícias
        const addNoticia = dataNoticias.addNewsScream();
        document.getElementById('content').innerHTML = addNoticia;

        // Inicializando o editor de texto
        CKEDITOR.replace('editor');

        // Capturar elementos do formulário
        const idiomaInput = document.getElementById('idioma');
        const categoriaInput = document.getElementById('categoria');
        const diaInput = document.getElementById('dia');
        const horaInput = document.getElementById('hora');
        const tagsInput = document.getElementById('tags');
        const tituloInput = document.getElementById('titulo');
        const descricaoInput = document.getElementById('descricao');
            
        //Botão sair
        document.getElementById('btnExit').addEventListener('click', () => {

            // Excluindo o editor de texto
            if (CKEDITOR.instances.editor) {
                CKEDITOR.instances.editor.destroy();
            }

            this.getDefaultScream();

        });

        // Botão salvar
        document.getElementById('btnSalvar').addEventListener('click', ()=> {  

            const noticiaContent = CKEDITOR.instances.editor ? CKEDITOR.instances.editor.getData() : "";
            // Dados à serem adicionados na notícia
            const dadosNoticia = {

                idioma: idiomaInput.value,
                categoria: categoriaInput.value,
                dataPublicacao: {
                    dia: diaInput.value,
                    hora: horaInput.value
                },
                tags: tagsInput.value,
                titulo: tituloInput.value,
                subtitulo: descricaoInput.value,
                noticia: noticiaContent

            }

            console.log(dadosNoticia);
    
        });
        
    }

    // Método de envio de valores via xml http request
    sendValues(array, url) {

        if(Array.isArray(array) && typeof url === "string") {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(response => response.json())
            .then(data => console.log('Sucesso:', data))
            .catch(error => console.error('Erro:', error));

        } else {
            console.log('Tipo de dados inconpatível');
        }
    }

    

}


document.addEventListener('DOMContentLoaded', () => {
     new cadastroNoticias();
});
