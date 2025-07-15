<template>
    <footer>
        <span>Travelgram © 2025</span>
        <nav>
            <a href="#">Termo de uso</a>
            <a href="#">Política de privacidade</a>
        </nav>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponents'
}
</script>
<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    font-size: 12px;
}
nav a {
    margin-left: 16px;
    text-decoration: none;
}

nav a:hover {
    text-decoration: underline;
}
</style>