export const dataNoticias = {
    
    defaultScreamData() {

      return [
        `
        <div class="container mt-5">
      <div class="border border-secondary">
        <div class="d-flex justify-content-between bg-secondary" >
          <div class="d-flex align-items-center dropdown">
            <button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40" fill="#ffffff">
                <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
              </svg>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button class="dropdown-item" id="noticias">Notícias&nbsp;&nbsp;&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/></svg>
                </button>
            </li>
              <li>
                <button class="dropdown-item" id="pesquisas">
                Pesquisas
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000">
                  <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                </button>
              </li>
              <li>
                <button class="dropdown-item" id="requisicoes">
                  Requisições
                  <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>
                </button>
              </li>
            </ul>
          </div>
          
          <div class="d-flex align-items-center">
            <h3 id="tema">Notícias</h3>
          </div>
          <div class="d-flex align-items-center me-3">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ordenar</button>
          </div>
        </div>
    
        <div class="p-5">
          <button class="btn btn-primary mt-4" id="btnAdicionar">Adicionar +</button>
        </div>
    
        <div>
          <div class="p-4">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Status</th>
                  <th scope="col">Data de Criação</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="col-2">
                  <th>Invazão com Linux</th>
                  <td>Cyber Segurança</td>
                  <td>Rascunho</td>
                  <td>20/12/2024</td>
                  <td>
                    <select class="form-select">
                      <option>Opções</option>
                      <option value="Publicar">Publicar</option>
                      <option value="Editar">Editar</option>
                      <option value="Remover">Remover</option>
                    </select>
                  </td>
                </tr>
                <tr class="col-2">
                  <th>DDoS</th>
                  <td>Web</td>
                  <td>Rascunho</td>
                  <td>20/04/2024</td>
                  <td>
                    <select class="form-select">
                      <option>Opções</option>
                      <option value="Publicar">Publicar</option>
                      <option value="Editar">Editar</option>
                      <option value="Remover">Remover</option>
                    </select>
                  </td>
                </tr>
                <tr class="col-2">
                  <th>Terminal</th>
                  <td>Interface</td>
                  <td>Publicado</td>
                  <td>17/03/2025</td>
                  <td>
                    <select class="form-select">
                      <option>Opções</option>
                      <option value="Publicar">Publicar</option>
                      <option value="Editar">Editar</option>
                      <option value="Remover">Remover</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
        <div class="position-relative mt-5" style="height: 100px;">
          <div class="d-flex position-absolute start-50 translate-middle mt-5">
            <button class="btn border border-secondary me-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0000F5"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </button>
            <button class="btn btn-primary border-secondary">&nbsp;&nbsp;1&nbsp;&nbsp;</button>
            <button class="btn border border-secondary ms-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0000F5"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>


    <!--Modal js-->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header" style="background-color: rgb(211, 209, 209);">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                <span class="fs-4">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                  </svg>
                </span>
                <span class="fs-4">Filtrar</span>
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-9 p-2 d-blok ms-5 border mt-4">
                  <div class="col-1 p-1">
                    <span><b>Status</b></span>
                  </div>
                  <div class="col-5 p-1">
                      <input type="checkbox" name="Agendada" id="agendada">
                      <label for="Agendada">Agendada</label>
                      <br>
                      <input type="checkbox" name="rascunho" id="rascunho">
                      <label for="rascunho">Rascunho</label>
                      <br>
                      <input type="checkbox" name="Publicada" id="publicada">
                      <label for="Publicada">Publicada</label>
                      <br>
                      <input type="checkbox" name="Excluir" id="excluir">
                      <label for="Excluir">Excluir</label>
                  </div>
                  <div class="col-11 p-1 mt-4 ms-2">
                    <span><b>Indioma</b></span>
                    <select class="form-select" id="idioma">
                      <option value="Portugues">Português (Brasil)</option>
                      <option value="Ingles">Inglês</option>
                    </select>
                    <br>
                    <span><b>Categoria</b></span>
                    <select name="categoria" class="form-select" id="categoria">
                      <option value="cyber-seguranca">Cyber Segurança</option>
                      <option value="linux">Linux</option>
                      <option value="seguranca-redes">Segurança de Redes</option>
                      <option value="seguranca-aplicacoes">Segurança de Aplicações</option>
                      <option value="seguranca-cloud">Segurança em Cloud</option>
                      <option value="seguranca-endpoint">Segurança de Endpoint</option>
                      <option value="seguranca-banco-dados">Segurança de Banco de Dados</option>
                      <option value="criptografia">Criptografia</option>
                      <option value="forense-digital">Forense Digital</option>
                      <option value="pentesting">Pentesting</option>
                      <option value="engenharia-reversa">Engenharia Reversa</option>
                      <option value="red-team">Red Team</option>
                      <option value="blue-team">Blue Team</option>
                      <option value="threat-intelligence">Threat Intelligence</option>
                      <option value="gestao-identidade-acesso-iam">Gestão de Identidade e Acesso (IAM)</option>
                      <option value="analise-malware">Análise de Malware</option>
                      <option value="seguranca-iot">Segurança de IoT</option>
                      <option value="seguranca-sistemas-operacionais">Segurança de Sistemas Operacionais</option>
                      <option value="seguranca-mobile">Segurança Mobile</option>
                      <option value="governanca-risco-compliance-grc">Governança, Risco e Compliance (GRC)</option>
                      <option value="soc-security-operations-center">SOC (Security Operations Center)</option>
                    </select>
                    <br>
                    <span><b>Título</b></span>
                    <input type="text" class="form-control" id="titulo">
                    <br>
                    <span><b>De</b></span>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" aria-describedby="basic-addon2" id="de">
                      <span class="input-group-text" id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                        </svg>
                      </span>
                    </div>
                    <br>
                    <span><b>Até</b></span>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" aria-describedby="basic-addon2" id="ate">
                      <span class="input-group-text" id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                          <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                        </svg>
                      </span>
                    </div>
                    <br>
                    <span><b>Tag</b></span>
                    <input type="text" class="form-control mt-1">
                    <br>
                    <div class="d-grid gap-2 col-11 mx-auto">
                      <button class="btn btn-primary" type="button" id="filtrar">Filtrar</button>
                    </div>
                  </div>
              </div>
              <div class="mt-4" style="height: 50px;"></div>
            </div>
          </div>
        </div>
      </div>

        `, 
    ];

    },

      addNewsScream() {

        return [
          
          `
        
              <div class="container mt-5" id="content">
                <div class="border border-secondary">
                  <div class="d-flex justify-content-between bg-secondary" >
                    <div class="d-flex align-items-center dropdown">
                      <button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40" fill="#ffffff">
                          <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/>
                        </svg>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          <button class="dropdown-item" id="noticias">Notícias&nbsp;&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/></svg>
                          </button>
                      </li>
                        <li>
                          <button class="dropdown-item" id="pesquisas">
                          Pesquisas
                          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000">
                            <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" id="requisicoes">
                            Requisições
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div class="d-flex align-items-center">
                      <h3 id="tema">Adicionar Notícia</h3>
                    </div>

                    <div class="d-flex align-items-center me-3">
                      <button type="button" class="btn" style="background-color: rgb(178, 176, 176);" id="btnExit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="row display-block">
                    <div class="col-7 mt-5 ms-5">
                        <div class="d-flex">
                          <label for="idioma" class="p-2">Idioma</label>
                          <select name="idioma" class="form-select" id="idioma">
                            <option >Portugês (Brasil)</option>
                            <option>Inglês</option>
                          </select>
                        </div>
                        <br>
                        <div class="d-flex">
                          <label for="categoria" class="p-2">Categoria</label>
                          <select name="categoria" class="form-select" id="categoria">
                            <option >Cyber Segurança</option>
                            <option>Linux</option>
                            <option>Segurança de Redes</option>
                            <option>Segurança de Aplicações</option>
                            <option>Segurança em Cloud</option>
                            <option>Segurança de Endpoint</option>
                            <option>Segurança de Banco de Dados</option>
                            <option>Criptografia</option>
                            <option>Forense Digital</option>
                            <option>Pentesting</option>
                            <option>Engenharia Reversa</option>
                            <option>Red Team</option>
                            <option>Blue Team</option>
                            <option>Threat Intelligence</option>
                            <option>Gestão de Identidade e Acesso (IAM)</option>
                            <option>Análise de Malware</option>
                            <option>Segurança de IoT</option>
                            <option>Segurança de Sistemas Operacionais</option>
                            <option>Segurança Mobile</option>
                            <option>Governança, Risco e Compliance (GRC)</option>
                            <option>SOC (Security Operations Center)</option>
                          </select>
                        </div>
                        <br>
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="col-3">Data de Publicação</div>
                          <div class="d-flex col-3 align-items-center">
                            <label for="dia" class="me-3">Dia</label>
                            <input type="date" class="form-control" name="dia" id="dia">
                          </div>
                          <div class="col-3 d-flex align-items-center">
                            <label for="hora" class="me-3">Hora</label>
                            <input type="time" id="hora" placeholder="HH:mm" class="form-control me-5 text-center"  min="00:00" max="23:59">
                          </div>
                        </div>
                        <br>
                        <div class="d-flex col-6">
                          <label for="tags" class="d-flex align-items-center">
                            <button class="btn d-flex me-3">
                              <span class="me-2">Tags</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                  <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                </svg>  
                            </button>
                          </label>
                          <input type="text" name="tags" class="form-control" id="tags">
                        </div>
                        <br>
                        <div class="d-flex col-6 align-items-center">
                          <label for="titulo" class="d-flex me-4">Título</label>
                          <input type="text" name="titulo" class="form-control" id="titulo">
                        </div>
                        <br>
                        <div class="d-flex col-12 align-items-center">
                          <span class="me-4">Descrição</span>
                          <textarea name="subtitulo" id="descricao" class="col-9"></textarea>
                        </div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center">
                      <div class="me-4">Noticia</div>
                      <div class="col-10 ms-2"><textarea id="editor"></textarea></div>
                    </div>
                  </div>
                  <div class="mt-3 col-12">
                    <div class="d-flex justify-content-end p-4">
                      <button class="btn btn-secondary me-5" id="btnCancelar">Cancelar</button>
                      <button class="btn btn-primary" id="btnSalvar">Salvar</button>
                    </div>
                  </div>


                </div>
              </div>
              <div class="b-example-divider"></div>

          `
        ];

    }

  };
  