<template>
    <header>
        <img src="../../../img/StockSnap_JHCQ2KZPR0.jpg" class="banner" alt='banner'>
        <div>
            <h1 id="theName">
                <p v-for="(item, i) in props.nameArr" 
                    :key="i"
                    :data-e="item.eLet"
                    :data-r="item.rLet"
                    :class="item.letClass">
                        {{ item.eLet }}
                        {{ (i === 5) ? '&nbsp;' : ''  }}
                </p>
            </h1>
            <h3 data-r="Портфолио веб разработчика"
                data-e="Web developer portfolio" 
                class="L"
                >Web developer portfolio</h3>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header-tag',
    props: ['props']
}
</script>

<style lang="scss">

</style>