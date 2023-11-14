<script setup>
// User: Store
const userStore = useUserStore()

const colorMode = useColorMode()
</script>

<template>
  <header>
    <div class="logo" title="Финансовый стриптиз">
      <a href="/">Strip<span>Kun</span></a>

      <a href="/ex">ex</a>
    </div>

    <template v-if="userStore.user.login">
      <div>

        <template v-if="userStore.user.permissions.includes('dashboard.enter')">
          <a href="/dashboard">Админ</a>
        </template>

      </div>
      <div>
        Привет, {{ userStore.user.login }}
      </div>
      <div>
        <a href="/auth/sign-in-by-login">Выход</a>
      </div>
    </template>
    <template v-else>
      <div>
        <a href="/auth/sign-in-by-login">Вход</a> / <a href="/auth/sign-up-by-login">Регистрация
        </a>
      </div>
    </template>
  </header>

  <select v-model="colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>

  <template v-if="userStore.user.permissions.includes('admin.enter')">
    <li>
      <ul>
        <li>
          <a href="/dashboard/budget">Бюджет</a>
        </li>
        <li>
          <a href="/dashboard/category">Категории</a>
        </li>
        <li>
          <a href="/dashboard/pages">Материалы</a>
        </li>
      </ul>
    </li>
  </template>


  <ul>
    <li>
      <a href="/">Главная</a>
    </li>
    <li>
      <a href="/version">Версия</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>

  </ul>

  <main>
    <slot />
  </main>

  <footer>
    <p>Пользователь:</p>
    <p>{{ userStore.user }}</p>
    <p>&copy; 2023 &mdash; супер сайт v 0.1.7</p>
  </footer>
</template>
