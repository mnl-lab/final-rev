<template>
    <div class="container">
        <nav class="navbar">
            <p class="title">Book Store</p>
            <input class="search-bar" type="text" v-model="stat">
        </nav>
        <div class="bottom">
            <div v-for="book in filteredBooks" :key="book.id" class="books">
                <book-card :book="book" />
            </div>
        </div>
        <button @click="showAdd = !showAdd">Add Book</button>
        <adding-form v-show="showAdd"></adding-form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import BookCard from '@/components/BookCard.vue';
import AddingForm from '@/components/AddingForm.vue';

const books = ref([]);
const stat = ref('');
const showAdd = ref(false);

onMounted(async () => {
    try {
        const res = await fetch("http://localhost:3000/books");
        books.value = await res.json();
        console.log("Books fetched", books.value);
    } catch (error) {
        console.log(error);
    }
});
const filteredBooks = computed(() => {
    return books.value.filter(book => {
        return book.title.toLowerCase().includes(stat.value.toLowerCase()) ||
            book.author.toLowerCase().includes(stat.value.toLowerCase()) ||
            book.category.toLowerCase().includes(stat.value.toLowerCase());
    });
});
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 20px;
    border-bottom: 2px solid #8B4513;
    /* Brown border */
}

.title {
    color: #800000;
    /* Dark maroon */
    font-size: 28px;
    font-weight: bold;
    margin: 0;
}

.search-bar {
    padding: 8px 12px;
    border: 1px solid #A52A2A;
    /* Medium brown */
    border-radius: 4px;
    width: 250px;
    background-color: #FFF8DC;
    /* Light cream */
}

.bottom {
    background-color: #f8f3e9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(121, 85, 72, 0.2);
    display: flex;
    flex-wrap: wrap;
}

.books {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 20px;

}

button {
    background-color: #800000;
    /* Dark maroon */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    margin: 20px 0;
}

button:hover {
    background-color: #A52A2A;
    /* Medium brown */
}
</style>
