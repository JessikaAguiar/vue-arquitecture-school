<template>
    <section class="profile">
        <img :src="urlAvatar" :alt="name" class="profile-avatar">
        <div class="profile-info">
            <h2>{{ name }}</h2>
            <p>{{ bio }}</p>
        </div>
        <section class="stats">
            <ul>
                <li><img src="@/assets/img/icons/MapPin.png" :alt="stats.cities"><span>{{ stats.cities }}</span></li>
                <li><img src="@/assets/img/icons/AirplaneTilt.png" alt="Países"><span>{{ stats.travel }} países </span></li>
                <li><img src="@/assets/img/icons/Image.png" alt="Fotos"><span>{{ stats.galery }} fotos</span></li>
            </ul>
        </section>
    </section>
</template>
<script>
export default {
    name: 'AboutComponents',
    props: {
        name: String,
        bio: String,
        avatar: String,
        stats: {
            type: Object
        },
    },
    computed: {
        urlAvatar() {
            return require(`@/assets/img/${this.avatar}`)
        }
    }
}</script>
<style scoped>
.profile {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: #F5F5F5;
}
.profile-avatar {
    width: 176px;
    height: 176px;
    border-radius: 50%;
    object-fit: cover;
}
.profile-info {
    margin: 5px;
    width: 40%;
}
.profile-info h2 {
    font-size: 32px;
    font-weight: bold;
}
.profile-info p {
    font-size: 14px;
    text-align: justify;
}
.stats {
    width: calc(100% - 40% - 176px - 10%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
}
.stats ul {
   list-style: none;
}
.stats ul li {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s;
}
.stats ul li:hover {
    transform: scale(1.1);
}
.stats span {
    font-size: 14px;
    color: #6C6C6C;
}
.stats img {
    width: 24px;
    height: 24px;
}

@media(max-width: 600px) {
    .profile {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    .profile h2 {
        text-align: center;
    }
    .profile-info {
        width: 100%;
    }
    .stats {
        width: 100%;
        margin: 0;
        justify-content: center;
    }
    .stats ul {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        flex-wrap: wrap;
    }
}
</style>