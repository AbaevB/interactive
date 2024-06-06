# interactive
Вебинар 4.1 Практикум по интерактивным элементам 


## Слайдер Swiper v11,1,4 (локальное подключение).


### Подготовка и подключение

>> Сайт плагина [Swiper](https://swiperjs.com/)

Для работы плагина необходимо подключить [jQuery](https://releases.jquery.com/)

 Для локального подключения слайдера нудно скачать релиз со [страницы проекта на Гитхабе](https://github.com/nolimits4web/swiper/releases), роаспаковать в отдельную папку, затем, открыв терминал в этой папке скомпилировать необходимые для работы плагина файлы:
```bash
$ npm install
$ npm run build:prod
```

После компиляции будет создана папка `distt/` , в которой будут находиться необходимые файлы. Для работы в локальном проекте нужны файлы `swiper-bundle.min.js` и `swiper-bundle.min.css`, которые нужно разместить в соответствующих папках проекта, и подключить в `index.html`.

### Работа с плагином

Базовая разметка слайдера:

```html
<!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img src="img/hero-1.jpg" alt="1"></div>
            <div class="swiper-slide"><img src="img/hero-2.jpg" alt="2"></div>
            <div class="swiper-slide"><img src="img/hero-3.jpg" alt="3"></div>
            <div class="swiper-slide"><img src="img/hero-1.jpg" alt="1"></div>
            <div class="swiper-slide"><img src="img/hero-2.jpg" alt="2"></div>
            <div class="swiper-slide"><img src="img/hero-3.jpg" alt="3"></div>
            ...
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev" role="button">A</div>
          <div class="swiper-button-next" role="button">B</div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
        </div>
```

Базовая стилизация слайдера (задает длину и ширину контейнера):

```css
.swiper {
  width: 600px;
  height: 300px;
}
```

JS код:

```js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
	autoplay: {
      delay: 5000,
    },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```

### Тонкая настройка плагина

Плагин имеет много гибких настроек: направление прокрутки, добавление и  стилизация элементов управления, автопрокрутка, и другие Подробное описание настроек - [в документации проекта](https://swiperjs.com/swiper-api)