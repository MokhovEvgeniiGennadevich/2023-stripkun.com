export default function VersionPage() {
  return (
    <div>
      <h1>Лог версий</h1>
      <h2>0.1.8 [2023-11-11]</h2>
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
        Прошли курсы vuemastery и разорались в разнице между
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
        Lifecycle Hooks - разрбрались что есть FLOW
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
      <p>
        Статьи дохода и расхода с бесконечным уровнем
        вложенности
      </p>
      <h2>0.1.3</h2>
      <p>Ушли от NextJS 13 в сторону NuxtJS 3</p>
      <h2>0.1.2</h2>
      <p>
        Добавление, редактирование, удаление категорий в
        панели администратора
      </p>
      <p>Вывод дерева категорий на главной странице</p>
      <h2>0.1.1</h2>
      <p>
        Свёрстана базовая таблица доходов и расходов под
        мобильную версию на
        <a href='/'>главной странице</a>
      </p>
      <h2>0.1.0</h2>
      <p>Начал разработку этого говна</p>
    </div>
  );
}
