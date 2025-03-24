import { news } from './news.js';

class UserNoticia {

    constructor() {
        const content = document.getElementById('news-section');

        content.innerHTML = news.getNews();
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new UserNoticia();
});