<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white">
        <div class="p-4">
          <h1 class="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav class="mt-6">
          <ul>
            <li class="hover:bg-gray-700">
              <router-link to="/dashboard" class="block px-4 py-2">Dashboard</router-link>
            </li>
            <li class="hover:bg-gray-700">
              <router-link to="/users" class="block px-4 py-2">Users</router-link>
            </li>
            <li class="hover:bg-gray-700">
              <router-link to="/settings" class="block px-4 py-2">Settings</router-link>
            </li>
            <li class="hover:bg-gray-700">
              <router-link to="/logout" class="block px-4 py-2">Logout</router-link>
            </li>
          </ul>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 bg-gray-100 p-6">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
    // Add any necessary imports or logic here
  </script>
  
  <style scoped>
    /* Add any specific styles here */
  </style>
  