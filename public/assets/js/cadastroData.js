
export const dataNoticias = {
    
    defaultScreamData() {

      return [
        `
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
            <button class="dropdown-item">Notícias&nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/></svg>
            </button>
        </li>
          <li>
            <button class="dropdown-item">
            Pesquisas
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000">
              <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
            </button>
          </li>
          <li>
            <button class="dropdown-item">
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

    <div class="p-5" style="height: 160px;">
      <button class="btn btn-primary mt-4">Adicionar +</button>
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
            <tr>
              <th>Invasão com Linux</th>
              <td>Syber Segurança</td>
              <td>Rascunho</td>
              <td>20/12/2024</td>
              <td>
                <select class="form-select" style="width: 120px;">
                  <option>Opções</option>
                  <option value="Publicar">Publicar</option>
                  <option value="Editar">Editar</option>
                  <option value="Remover">Remover</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Ddos</th>
              <td>Web</td>
              <td>Rascunho</td>
              <td>20/04/2024</td>
              <td>
                <select class="form-select" style="width: 120px;">
                  <option>Opções</option>
                  <option value="Publicar">Publicar</option>
                  <option value="Editar">Editar</option>
                  <option value="Remover">Remover</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Terminal</th>
              <td>Interface</td>
              <td>Publicado</td>
              <td>17/03/2025</td>
              <td>
                <select class="form-select" style="width: 120px;">
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
        `
    ];

    }
  };
  