<template>
    <v-app class="body">
        <v-content>
            <WorldHO/>
            <Info/>
            <Statistics/>
        </v-content>
    </v-app>
</template>

<script>
    import Info from './components/info/info';
    import WorldHO from './components/info/worldHO.vue'
    import Statistics from './components/statistics/statistics.vue';

    export default {
        name: 'App',

        components: {
            Info,
            WorldHO,
            Statistics
        },

        data: () => ({
            //
        }),
    };
</script>

<style>
    section {
        padding: 3rem;
    }

    body, html {
        font-family: Montserrat, sans-serif;
    }

    .body {
        background: #f5f5f5 !important;

    }

</style>
