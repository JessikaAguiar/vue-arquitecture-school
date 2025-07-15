<template>
    <header>
        <div class="logo" >
            <router-link to="/"><img src="@/assets/img/Logo.png" alt="Travelgram Logo"></router-link>
        </div>
        <nav :class="{active : isMenuOpen}">
            <a href="#" class="search-link">Explorar</a>
            <router-link to="/my-travel">Minhas Viagens</router-link>
            <router-link to="/profile">Perfil</router-link>
        </nav>
        <span @click="abrirFecharMenu()" class="avatar">
            <img class="profile" src="@/assets/img/profile.avif" alt="Perfil do Usuario">
        </span>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponents',
    data () {
       return {
        isMenuOpen: false
       }
    },
    methods: {
        abrirFecharMenu() {
            this.isMenuOpen = !this.isMenuOpen
            console.log(this.isMenuOpen);
        }
    }
}
</script>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;

    background-color: #F5F5F5;
}
.logo {
    display: flex;
    align-items: center;
}
nav {
    display: flex;
    align-items: center;
    gap: 20px;
}
.search-link {
    position: relative;
    padding-left: 35px;
}
.search-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: -25%;
    width: 32px;
    height: 32px;
    background-image: url('@/assets/img/icons/search.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
nav a {
    text-decoration: none;
    color: #6C6C6C;
}
.profile {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

@media (max-width: 600px) {
    .logo {
        order: 1;
    }
    .avatar {
        order: 2;
    }
    nav {
        display: none;
    }
    nav.active {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;

        order: 3;
    }
    header {
        flex-direction: column;
        align-items: flex-end;
    }
    
    

}
</style>