<template>
  <ul>
    <li>Menu</li>
    <li><NuxtLink to="/">Главная</NuxtLink></li>
    <li><NuxtLink to="/version">Версия</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li>
      <NuxtLink to="/dashboard">Админ</NuxtLink>
      <ul>
        <li><NuxtLink to="/dashboard/category">Категории</NuxtLink></li>
      </ul>
    </li>
    <li><theme_switcher /></li>
  </ul>

  <main>
    <slot />
  </main>

  <footer>&copy; 2023 &mdash; супер сайт v 0.0.4</footer>
</template>
