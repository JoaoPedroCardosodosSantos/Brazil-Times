
import { dataNoticias } from './cadastroData.js';

class cadastroNoticias {

    constructor() {
        this.content = document.getElementById('content');
        this.getDefaultScream();
    }

    getDefaultScream() {
        this.scream = dataNoticias.defaultScreamData();
        this.content.innerHTML = this.scream;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const tela = new cadastroNoticias();
});
