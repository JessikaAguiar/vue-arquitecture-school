<template>
    <section class="galery-grid" :class="{active : list}">
        <div class="photo-card" v-for="photo in photos" :key="photo.id">
            <img :src="require(`@/assets/img/galery/${photo.src}`)" :alt="photo.alt">
            <div v-if="list" class="photo-info">
                <h3>{{ photo.title }}</h3>
                <h5>{{ photo.date }}</h5>
                <p>{{ photo.text }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "GaleryComponents",
    props: {
        photos: {
            type: Array
        },
        list: Boolean
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
    .photo-card {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    .active  {
        grid-template-columns: 1fr;
        align-items: start;
    }
    .active .photo-card {
        align-items: start;
        flex-direction: row;
    }
    .active .photo-card img {
        width: 300px;
        height: 300px;
        margin-right: 20px;
    }
    .photo-info {
        margin-top: 12px;
        text-align: justify;
    }
    .photo-info h3 {
        margin: 4px 0;
        font-size: 2.1rem;
    }

    .photo-info p {
        font-size: 1.0rem;
        color: #555;
    }

    @media (max-width: 600px) {
        .galery-grid {
            grid-template-columns: 1fr;
        }
        .active .photo-card {
            align-items: center;
            flex-direction: column;
        }
        .photo-info {
            text-align: center;
        }
    }
</style>