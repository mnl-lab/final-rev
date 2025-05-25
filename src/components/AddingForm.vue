<template>
    <form @submit="addBook">
        <h1>{{ book?.title }}</h1>
        <div class="element">
            <label>Book title:</label>
            <input type="text" v-model="title">
        </div>
        <div class="element">
            <label>Author:</label>
            <input type="text" v-model="author">
        </div>
        <div class="element">
            <label>Price ($):</label>
            <input type="number" v-model="price">
        </div>
        <div class="element">
            <label>Year:</label>
            <input type="number" v-model="year">
        </div>
        <div class="element">
            <label>Category:</label>
            <input type="text" v-model="category">
        </div>
        <div class="element">
            <label>Description:</label>
            <textarea v-model="description"></textarea>
        </div>
        <div class="element">
            <label>Image URL:</label>
            <input type="text" v-model="imageUrl" placeholder="Optional image URL">
        </div>
        <button type="submit">Save Changes</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('');
const author = ref('');
const price = ref(0);
const year = ref(0);
const category = ref('');
const description = ref('');
const imageUrl = ref('');
async function addBook() {
    const newBook = {
        title: title.value,
        author: author.value,
        price: price.value,
        year: year.value,
        category: category.value,
        description: description.value,
        imageUrl: imageUrl.value || 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX374_BO1,204,203,200_.jpg' // Default image if none provided
    };
    try {
        await fetch("http://localhost:3000/books", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        console.log("Book created succesfully");
        alert("Book created succesfully");

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