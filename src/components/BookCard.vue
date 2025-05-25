<template>
    <div class="container">
        <div>
            <img :src="book.cover" alt="book cover">
        </div>
        <div class="text">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <p>{{ book.price }} $</p>
            <p>{{ book.category }}</p>
            <button @click="router.push(`/book/${book.id}`)">View Details </button>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
const router = useRouter();

const props = defineProps({
    book: {
        type: Object,
        required: true
    }
})
console.log("Card reciever book, ", props.book);

</script>

<style scoped>
.container {
    display: flex;
    background-color: #f8f3e9;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(121, 85, 72, 0.3);
    overflow: hidden;
    margin: 15px 0;
    transition: transform 0.3s;
}

.container:hover {
    transform: translateY(-5px);
}

img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-right: 2px solid #8B4513;
    /* Brown border */
}

.text {
    padding: 15px;
    flex: 1;
}

h3 {
    color: #800000;
    /* Dark maroon */
    margin-top: 0;
    margin-bottom: 10px;
}

p {
    color: #A52A2A;
    /* Medium brown */
    margin: 5px 0;
}

button {
    background-color: #800000;
    /* Dark maroon */
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #A52A2A;
    /* Medium brown */
}
</style>