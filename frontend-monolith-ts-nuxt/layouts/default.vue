<script setup>
// User: Store
const userStore = useUserStore()

const colorMode = useColorMode()
</script>

<template>
  <header>
    <div class="logo" title="Финансовый стриптиз">
      <NuxtLink to="/">Strip<span>Kun</span></NuxtLink>
    </div>

    <template v-if="userStore.user.login">
      <div>

        <template v-if="userStore.user.permissions.includes('dashboard.enter')">
          <NuxtLink to="/dashboard">Админ</NuxtLink>
        </template>

      </div>
      <div>
        Привет, {{ userStore.user.login }}
      </div>
      <div>
        <NuxtLink to="/auth/sign-in-by-login">Выход</NuxtLink>
      </div>
    </template>
    <template v-else>
      <div>
        <NuxtLink to="/auth/sign-in-by-login">Вход</NuxtLink> / <NuxtLink to="/auth/sign-up-by-login">Регистрация
        </NuxtLink>
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
          <NuxtLink to="/dashboard/budget">Бюджет</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dashboard/category">Категории</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/dashboard/pages">Материалы</NuxtLink>
        </li>
      </ul>
    </li>
  </template>


  <ul>
    <li>
      <NuxtLink to="/">Главная</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/version">Версия</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">About</NuxtLink>
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
