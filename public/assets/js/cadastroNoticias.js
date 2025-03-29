import { dataNoticias } from './cadastroData.js';

class CadastroNoticias {
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
            btn?.addEventListener('click', () => alert("Tudo certo!"));
        });

        this.addEventListeners();
    }

    addEventListeners() {
        this.getById('btnAdicionar')?.addEventListener('click', () => this.getAddnews());

        this.getById('filtrar')?.addEventListener('click', () => {
            this.agendada = this.getById('agendada')?.checked;
            this.rascunho = this.getById('rascunho')?.checked;
            this.publicada = this.getById('publicada')?.checked;
            this.excluir = this.getById('excluir')?.checked;
            this.idioma = this.getById('idioma')?.value;
            this.categoria = this.getById('categoria')?.value;
            this.titulo = this.getById('titulo')?.value;
            this.de = this.getById('de')?.value;
            this.ate = this.getById('ate')?.value;
            this.tag = this.getById('tag')?.value;
        });
    }

    getAddnews() {
        const content = document.getElementById('content');
        if (!content) return;

        content.innerHTML = dataNoticias.addNewsScream();
        CKEDITOR.replace('editor');

        ['btnExit', 'btnCancelar'].forEach(btnId => {
            this.getById(btnId)?.addEventListener('click', () => {
                CKEDITOR.instances.editor?.destroy();
                this.getDefaultScream();
            });
        });

        this.getById('btnSalvar')?.addEventListener('click', async () => {
            const noticiaContent = CKEDITOR.instances.editor?.getData() || "";

            const dadosNoticia = {
                user_id: this.getValue('user_id'),
                idioma: this.getValue('idioma'),
                categoria_id: this.getValue('categoria'),
                post_data: this.getValue('dia'),
                post_hora: this.getValue('hora'),
                tags: this.getValue('tags'),
                titulo: this.getValue('titulo'),
                descricao: this.getValue('descricao'),
                conteudo_noticia: noticiaContent
            };

            const erro = this.checkData(dadosNoticia);

            if (erro) {
                this.alertModal(erro);
            } else {
                const sucesso = await this.sendValues(dadosNoticia, "../../controllers/admin/cadastroNoticiasAdmin.php");

                this.alertModal(sucesso
                    ? `<p class="mt-5 p-2 fs-3">Dados adicionados com sucesso!</p>`
                    : `<p class="mt-5 p-2 fs-3 text-danger">Erro ao salvar os dados!</p>`);
            }
        });
    }


    async sendValues(dados, url){
    
        if(typeof dados === 'object' && typeof url === 'string'){
         
            try {
            
                const request = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(dados)});
                
                 if(request.ok){
                   
                   const result = await request.json();
                   
                   if(result.sucesso === true){
    
                    console.log(result);
                     return true;
    
                   } else {
    
                    console.log(result.message);
                    return false;
    
                   } 
        
                }
    
            } catch(error) {
    
              console.log(error);
              return false;
            }
    
        } else {
    
          console.log('Tipo de dados incompatível!');
          return false;
    
        }
    
    }

    alertModal(message) {
        if (!message) {
            console.log('Mensagem nula inválida!');
            return;
        }

        let modal = document.getElementById('alertModal');

        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'alertModal';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal fade show" tabindex="-1" aria-hidden="true" style="display: block;">
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

        this.getById('btn-close')?.addEventListener('click', () => modal.remove());
    }

    checkData(objeto) {
        const valoresNulos = Object.entries(objeto)
            .filter(([_, valor]) => !valor)
            .map(([chave]) => chave);

        return valoresNulos.length
            ? `<p class='p-2 mt-4'>Valores nulos: <br>${valoresNulos.join("<br>")}</p>`
            : "";
    }

    getById(id) {
        return document.getElementById(id);
    }

    getValue(id) {
        return this.getById(id)?.value || "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CadastroNoticias();
});
