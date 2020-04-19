<template>
    <div>
        <site-header></site-header>
        <main class="site-content">
            <input v-model="text" v-tooltip="'Введите текст'"/>
            <ul>
                <li
                    v-for="item in items"
                    :key="item.id"
                >
                    {{item.name}}
                    <button
                    @click="showMoreInfo(item)"
                    >Подробнее</button>
                </li>
                </ul>
                <modals-container/>
        </main>
        <modals-container/>
    </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import ItemForm from './ItemForm'

export default {
    components: {
        SiteHeader
    },
    data () {
        return {
            text: '',
            items: [
                {id: 1, name: 'Test',  description: 'Это тестовый элемент'},
                {id: 2, name: 'Расходы',  description: 'Это расходная категория'},
                {id: 3, name: 'Доходы',  description: 'Это доходная категория'},
            ],
        }
    },
    mounted() {
        console.log("Hello from vue")
    },
    methods: {
        showMoreInfo (item) {
        this.$modal.show(ItemForm, {item}, {width: "50%"});
        }
    },
    watch: {
        text() {
            this.$notify({
                group: 'foo',
                title: 'Important message',
                text: 'Hello user! This is a notification!'
            });
        }
    }
}
</script>

<style>
.site-content{
    padding: 20px;
}
</style>