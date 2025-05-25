<template>
    <div class="conatiner">
        <img :src="book?.cover" alt="book cover">
        <div class="text">
            <h1>{{ book?.title }}</h1>
            <h4>author: {{ book?.author }}</h4>
            <p>price: {{ book?.price }}$</p>
            <p>year: {{ book?.year }}</p>
            <p>category: {{ book?.category }}</p>
            <p>description: {{ book?.description }}</p>
            <button @click="deleteBook()">Delete book</button>
            <button @click="router.push(`/edit/${book.id}`)">Edit Book</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const book = ref(null);
onMounted(async () => {
    try {
        const res = await fetch(`http://localhost:3000/books/${route.params.id}`);
        book.value = await res.json();
        console.log("book fetched succesfully", book.value)
    } catch (error) {
        console.log(error);
    }
})
async function deleteBook() {
    if (confirm("Are you sure you want to delete this book?")) {
        try {
            await fetch(`http://localhost:3000/books/${route.params.id}`,
                {
                    method: 'DELETE'
                }
            );
            alert("Book deleted!");
            router.replace("/");
            router
        } catch (error) {
            console.log("book dleted");
        }
    }
}
</script>

<style scoped>
.conatiner {
    display: flex;
    background-color: #f8f3e9;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(121, 85, 72, 0.3);
    max-width: 900px;
    margin: 20px auto;
}

img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 4px;
    border: 3px solid #8B4513;
    /* Brown border */
    margin-right: 25px;
}

.text {
    flex: 1;
}

h1 {
    color: #800000;
    /* Dark maroon */
    margin-top: 0;
    margin-bottom: 15px;
}

h4 {
    color: #A52A2A;
    /* Medium brown */
    margin-top: 0;
    margin-bottom: 10px;
}

p {
    color: #8B4513;
    /* Brown */
    margin: 10px 0;
    line-height: 1.5;
}

button {
    background-color: #800000;
    /* Dark maroon */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #A52A2A;
    /* Medium brown */
}
</style>