<template>
  <h1>Лог версий</h1>

  <h1>Лог версий</h1>

  <h2>0.1.10 [2023-11-14]</h2>






  <p>
    Мы опять свичнулись с Next JS 14 на Nuxt JS 3 (путь такой: React -> Vue -> Next -> Nuxt -> Next -> Nuxt)

  <ul>
    Хронология такая:
    <li>Мы взяли React, пострадали</li>
    <li>Ушли на Vue SPA, бросили потому что нет SEO</li>
    <li>Взяли Next JS 13, пострадали</li>
    <li>Появился izede. Ушли на Nuxt JS 3</li>
    <li>Перешли опять на Next JS 14, потому что на Nuxt JS 3 я не смог реализовать Crypto Form Hashes (убил на это
      неделю).</li>
    <li>Ушли на Nuxt JS 3, потому что izede написал plugin и composable и показал что реализация на самом деле возможна и
      сказал что в Nuxt нет ничего невозможного</li>
  </ul>
  </p>

  <p>
    <a href="https://www.twitch.tv/izede" target="_blank">izede</a> написал plugin который инжектит серверную функцию
    (файл называется .server) в NuxtApp инстанс.
  </p>

  <p>
    <a href="https://www.twitch.tv/izede" target="_blank">izede</a> написал composable, который оборачивает серверную
    функцию в useState(). Для того, чтобы я не строчил каждый раз useState() блок.

    <br />
    Без composable обёртки
    <code>
                              import type { SecurityFormHash, SecurityFormHashRequest, SecurityFormHashResponse } from '~/plugins/securityFormHash.server';

                              // Security Form Hash
                              const securityFormHashRequest = {
                                formUrl: "/api",
                                formFields: null,
                              };

                              const csrfHash = useState(() => {
                                const app = useNuxtApp()
                                return (app.$securityFormHash as SecurityFormHash)(securityFormHashRequest) as SecurityFormHashResponse;
                              })
                            </code>

    <br />

    С composable обёрткой
    <code>
                              // Security Form Hash
                              const securityFormHashRequest = {
                                formUrl: "/api",
                                formFields: null,
                              };

                              const { csrfHash } = useCsrfHash(securityFormHashRequest);
                            </code>
  </p>

  <h2>0.1.9 [2023-11-11]</h2>
  <p>
    Ночь, улица, фонарь. Переход с Nuxt 3 на Next 14
  </p>
  <p>
    Next 14: Formik: оказался говном или неверная
    реализация. Ставим react-hook-form
  </p>
  <p>
    react-hook-form пока что отрабатывает только на
    Submit формы, но не работает при onChange
  </p>

  <h2>0.1.8 [2023-11-10]</h2>
  <p>
    Прошли курсы vuemastery и поделали формы. Валидация
    с помощью yup, работа с формами через vee-validate.
  </p>
  <p>
    Прошли курсы vuemastery и разобрались в разнице между
    Options API и Composition API
  </p>
  <p>
    Прошли курсы vuemastery и узнали что есть props,
    emit
  </p>
  <p>
    Разобрались как устроена Pinia и смогли спокойно
    сделать in memory store пользователя. Anonym + User
  </p>
  <p>
    Установили SCSS, подтянули базовые стили для
    light/dark theme
  </p>
  <p>
    Lifecycle Hooks - разобрались что есть FLOW
    выполнения методов одного за другим
  </p>
  <p>
    CSS - normalizer начали переносить его в свой проект
  </p>

  <h2>0.1.7 [2023-11-09]</h2>

  <p>Feat: Pinia State: User</p>
  <p>Feat: Sign In / Sign Up by Login</p>
  <p>Fix: hash and hash_time generator</p>

  <h2>0.1.6 [2023-11-08]</h2>

  <p>Темная / Светлая темы</p>
  <p>CSRF защита</p>
  <p>HASH защита</p>
  <p>Базовый State Management через Pinia</p>

  <h2>0.1.5</h2>

  <p>Записи дохода или расхода по категориям</p>

  <h2>0.1.4</h2>

  <p>Статьи дохода и расхода с бесконечным уровнем вложенности</p>

  <h2>0.1.3</h2>

  <p>Ушли от NextJS 13 в сторону NuxtJS 3</p>

  <h2>0.1.2</h2>

  <p>Добавление, редактирование, удаление категорий в панели администратора</p>

  <p>Вывод дерева категорий на главной странице</p>

  <h2>0.1.1</h2>

  <p>
    Свёрстана базовая таблица доходов и расходов под мобильную версию на
    <a href="/">главной странице</a>
  </p>

  <h2>0.1.0</h2>

  <p>Начал разработку этого говна</p>
</template>
