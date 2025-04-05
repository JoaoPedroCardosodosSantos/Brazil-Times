import { dataNoticias } from './cadastroData.js';

class cadastroNoticias {

    constructor() {
        this.getDefaultScream();
    }
 
    getDefaultScream() {
        this.scream = dataNoticias.defaultScreamData();
        const content = document.getElementById('content');

        if (!content) {
            console.error("Elemento 'content' não encontrado!");
            return;
        }

        content.innerHTML = this.scream;

        const menuButtons = ['noticias', 'pesquisas', 'requisicoes'];

        menuButtons.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('click', () => alert("Tudo certo!"));
            }
        });

        const btnAdicionar = document.getElementById('btnAdicionar');
        if (btnAdicionar) {
            btnAdicionar.addEventListener('click', () => this.getAddnews());
        }

        const btnFiltrar = document.getElementById('filtrar');
        if (btnFiltrar) {
            btnFiltrar.addEventListener('click', () => {
                this.agendada = document.getElementById('agendada')?.checked;
                this.rascunho = document.getElementById('rascunho')?.checked;
                this.publicada = document.getElementById('publicada')?.checked;
                this.excluir = document.getElementById('excluir')?.checked;

                this.idioma = document.getElementById('idioma')?.value;
                this.categoria = document.getElementById('categoria')?.value;
                this.titulo = document.getElementById('titulo')?.value;
                this.de = document.getElementById('de')?.value;
                this.ate = document.getElementById('ate')?.value;
                this.tag = document.getElementById('tag')?.value;
            });
        }

        document.getElementById('imagens').addEventListener('click', () => {
            document.getElementById('content').innerHTML = dataNoticias.getImage();
        });
    }

    getAddnews() {
        const content = document.getElementById('content');
        if (!content) return;

        content.innerHTML = dataNoticias.addNewsScream();

        CKEDITOR.replace('editor');

        const getById = (id) => document.getElementById(id);

        const idiomaInput = getById('idioma');
        const categoriaInput = getById('categoria');
        const dataInput = getById('dia');
        const horaInput = getById('hora');
        const tagsInput = getById('tags');
        const tituloInput = getById('titulo');
        const descricaoInput = getById('descricao');

        getById('btnExit')?.addEventListener('click', () => {
            if (CKEDITOR.instances.editor) {
                CKEDITOR.instances.editor.destroy();
            }
            this.getDefaultScream();
        });
        
        getById('btnCancelar')?.addEventListener('click', () => {
            if (CKEDITOR.instances.editor) {
                CKEDITOR.instances.editor.destroy();
            }
            this.getDefaultScream();
        }); 

        getById('btnSalvar')?.addEventListener('click', async () => {  
            const noticiaContent = CKEDITOR.instances.editor?.getData() || "";

            const dadosNoticia = {
                idioma: idiomaInput?.value,
                categoria: categoriaInput?.value,
                data: dataInput?.value,
                hora: horaInput?.value,
                tags: tagsInput?.value,
                titulo: tituloInput?.value,
                descricao: descricaoInput?.value,
                noticia: noticiaContent
            };

            const data = this.checkData(dadosNoticia);

            if (data !== "") {
                this.alertModal(data);
            } else {
                console.log(dadosNoticia);
                const request = await this.sendValues(dadosNoticia, "../../controllers/admin/cadastroNoticiasAdmin.php");

                this.alertModal(request ? `<p class="mt-5 p-2 fs-3">Dados adicionados com sucesso!</p>` : `<p class="mt-5 p-2 fs-3 text-danger">Erro ao salvar os dados!</p>`);
            }
        });
    }

    async sendValues(objeto, url) {
        if (typeof objeto === "object" && typeof url === "string") {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(objeto)
                });
    
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Erro na resposta: ${response.status} - ${errorText}`);
                    return false;
                }
    
                const jsonResponse = await response.json();

                console.log(jsonResponse);
                
                if(jsonResponse.success) {
                    return true;
                }
    
            } catch (error) {
                console.error('Erro na requisição:', error);
                return false;
            }
        } else {
            console.log("Tipo de dados incompatível");
            return false;
        }
    }

    alertModal(message) {
        if (!message) {
            console.log('Mensagem nula inválida!');
            return;
        }

        let existingModal = document.getElementById('alertModal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="modal fade show" id="alertModal" tabindex="-1" aria-hidden="true" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">Aviso</h1>
                            <button type="button" class="btn-close" id="btn-close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="fs-3">${message}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        const modalAlert = modal.querySelector('#alertModal');

        modal.querySelector('#btn-close').addEventListener('click', () => {
            modalAlert.remove();
        });
    }

    checkData(objeto) {
        let valoresNulos = "<p class='p-2 mt-4'>Valores nulos <br>";
        let isNull = false;

        for (const [chave, valor] of Object.entries(objeto)) {
            if (!valor) {
                valoresNulos += `${chave} <br>`;
                isNull = true;
            }
        }

        valoresNulos += "</p>";

        return isNull ? valoresNulos : ""; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new cadastroNoticias();
});
