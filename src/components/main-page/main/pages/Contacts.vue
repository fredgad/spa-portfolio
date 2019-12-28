<template>
    <div class="contacts">
        <h2></h2>
        <div>
            <a href="tel:+79777872997">+7(977)-787-29-97</a>
            <a href="mailto: fred_gad@mail.ru">fred_gad@mail.ru</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contacts'
}
</script>

<style lang="scss">
.contacts {
    transform: rotateY(-180deg);
    transform-origin: 0% 0%;


    position: absolute;
    background: transparent;
    width: 55vw;
    height: 100vh;
    color: #932E96;
    transform-origin: 100% 100%;
    transition: .8s; 
    // background: rgba(0, 0, 0, 0.39);

    h2 {
        height: 20vh;
        display: flex;
        align-items: center;
        padding-left: 2vw;
    }
    div {
        height: 60vh;
        display: flex;
        justify-content: center;
        flex-direction: column;

        a {
            text-decoration: none;
            padding: 0vh 0 0vh 2vw ;
            font-size: 20px;
            font-weight: 900;
            color: #222;
            margin-bottom: 20px;
        }
    }
}
</style>