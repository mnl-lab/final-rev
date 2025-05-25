<template>
    <form @submit.prevent="editBook">
        <h1>{{ book?.title }}</h1>
        <div class="element">
            <label>Book title:</label>
            <input type="text" v-model="title" :placeholder="book?.title">
        </div>
        <div class="element">
            <label>Author:</label>
            <input type="text" v-model="author" :placeholder="book?.author">
        </div>
        <div class="element">
            <label>Price ($):</label>
            <input type="number" v-model="price" :placeholder="book?.price">
        </div>
        <div class="element">
            <label>Year:</label>
            <input type="number" v-model="year" :placeholder="book?.year">
        </div>
        <div class="element">
            <label>Category:</label>
            <input type="text" v-model="category" :placeholder="book?.category">
        </div>
        <div class="element">
            <label>Description:</label>
            <textarea v-model="description" :placeholder="book?.description"></textarea>
        </div>
        <button type="submit">Save Changes</button>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const book = ref(null);
const title = ref('');
const author = ref('');
const price = ref(0);
const year = ref(0);
const category = ref('');
const description = ref('');

onMounted(async () => {
    try {
        const res = await fetch(`http://localhost:3000/books/${route.params.id}`);
        book.value = await res.json();
        title.value = book.value.title;
        author.value = book.value.author;
        price.value = book.value.price;
        year.value = book.value.year;
        category.value = book.value.category;
        description.value = book.value.description;
        console.log("book fetched succesfully", book.value)
    } catch (error) {
        console.log(error);
    }
});





async function editBook() {
    const editedBook = {
        title: title.value,
        author: author.value,
        price: price.value,
        year: year.value,
        category: category.value,
        description: description.value
    }
    try {
        await fetch(`http://localhost:3000/books/${route.params.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedBook)
        });
        alert("Book edited succesfully!");
        console.log("Book edited succesfully!");
        router.push(`/book/${route.params.id}`);

    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
form {
    background-color: #f8f3e9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(121, 85, 72, 0.2);
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    color: #800000;
    /* Dark maroon */
    font-size: 24px;
    margin-bottom: 20px;
}

.element {
    margin-bottom: 15px;
}

label {
    display: block;
    color: #8B4513;
    /* Brown */
    font-weight: bold;
    margin-bottom: 5px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #A52A2A;
    /* Medium brown */
    border-radius: 4px;
    background-color: #FFF8DC;
    /* Light cream */
}

textarea {
    min-height: 100px;
    resize: vertical;
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
}

button:hover {
    background-color: #A52A2A;
    /* Medium brown */
}
</style>