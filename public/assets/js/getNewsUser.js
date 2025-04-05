import { news } from './news.js';

class UserNoticia {
    constructor() {
        const content = document.getElementById('news-section');

        if (content) {
            content.innerHTML = news.getNews();
        } else {
            console.error("Elemento #news-section não encontrado!");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new UserNoticia();
});
