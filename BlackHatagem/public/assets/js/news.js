export const news = {
  

  GetSlideShow() {

    const SlideImage = [
      '../../../uploads/mainSlide-images/slide1.jpg',
      '../../../uploads/mainSlide-images/slide2.jpg',
      '../../../uploads/mainSlide-images/slide3.jpg',
      '../../../uploads/mainSlide-images/slide1.jpg'
  ];

    return [
      `
        <div class="carousel-indicators">
                <button type="button" data-bs-target="#mainSlideshow" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#mainSlideshow" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#mainSlideshow" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#mainSlideshow" data-bs-slide-to="3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active slide-item"  style="background-image: url(${SlideImage[0]})">
                    <div class="slide-content">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item slide-item" style="background-image: url(${SlideImage[1]})">
                    <div class="slide-content">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item slide-item" style="background-image: url(${SlideImage[2]})">
                    <div class="slide-content">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
                <div class="carousel-item slide-item" style="background-image: url(${SlideImage[3]})">
                    <div class="slide-content">
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mainSlideshow" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mainSlideshow" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
      `
    ]
  },

  getNetworkSecurityNews() {

    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/network-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,

    ];
  },

  getApplicationSecurityNews() {

    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/application-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getCloudSecurityNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cloud-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getEndpointSecurityNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/endpoint-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },
  
  getDatabaseSecurityNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getCryptographyNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/cryptography-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];       
  },
  
  getDigitalForensicsNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getPenetrationTestingNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getReverseEngineeringNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getRedTeamNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getThreatIntelligenceNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },
  
  getIdentityAccessManagementNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getMalwareAnalysisNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getIoTNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  },

  getSocNews() {
    const news = [
      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',  
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
          image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp  ',
        article: 'article'
      },

      {
        title: 'Title',
        image: '../../../uploads/Features-card-images/database-security-background.webp',
        article: 'article'
      },
    ]

    return [
      `
        <div class="news-container">
        <h2 class="news-header">Latest news</h2>  
        <span></span>
          <div class="container">
            <ul class="listNews">
                <li>
                  <a href=""><img src="${news[0].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[0].title}</h3>
                    <p>
                      ${news[0].article}
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[1].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[1].title}</h3>
                    <p>
                       ${news[1].article}          
                    </p>
                  </article>
                </li>

                <li>
                  <a href=""><img src="${news[2].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[2].title}</h3>
                    <p>
                      ${news[2].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[3].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[3].title}</h3>
                    <p>
                      ${news[3].article}          
                    </p>
                  </article>
                </li>
             
  
                <li>
                  <a href=""><img src="${news[4].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[4].title}</h3>
                    <p>
                      ${news[4].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[5].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[5].title}</h3>
                    <p>
                      ${news[5].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[6].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[6].title}</h3>
                    <p>
                      ${news[6].article}          
                    </p>
                  </article>
                </li>
                <li>
                  <a href=""><img src="${news[7].image}" alt=""></a>
                  <article>
                    <h3 class="title">${news[7].title}</h3>
                    <p>
                      ${news[7].article}          
                    </p>
                  </article>
                </li>
            </ul>
          </div>
        </div>  
      `,
    ];
  }
}