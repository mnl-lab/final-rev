// filepath: c:\Users\utilisateur\S4\Web 2\final-rev\src\components\Navbar.vue
<template>
    <nav class="navbar">
        <div class="logo">Book Store</div>
        <div class="links">
            <router-link to="/">Home</router-link>
        </div>
    </nav>
</template>

<script setup>
// Navigation bar component
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #800000;
    /* Dark maroon */
    color: #FFF8DC;
    /* Light cream */
    box-shadow: 0 2px 6px rgba(121, 85, 72, 0.3);
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #FFF8DC;
    /* Light cream */
}

.links {
    display: flex;
    gap: 20px;
}

a {
    color: #FFF8DC;
    /* Light cream */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

a:hover {
    color: #f8f3e9;
    /* Lighter cream for hover */
    text-decoration: underline;
}
</style>