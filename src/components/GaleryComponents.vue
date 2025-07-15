<template>
    <section class="galery-grid">
        <div class="photo-card" v-for="photo in photos" :key="photo.id">
            <img :src="require(`@/assets/img/galery/${photo.src}`)" :alt="photo.alt">
        </div>
    </section>
</template>
<script>
export default {
    name: "GaleryComponents",
    props: {
        photos: {
            type: Array
        }
    },

}
</script>
<style scoped>
    .galery-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 16px;
        margin: 24px;
        align-items: center;
        justify-content: center;
    }
    .photo-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }
    .photo-card img:hover {
        transform: scale(1.05);
        border: 2px solid #EF5F4C;
    }

    @media (max-width: 600px) {
        .galery-grid {
            grid-template-columns: 1fr;
        }
    }
</style>