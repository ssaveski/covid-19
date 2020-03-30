<template>
    <section>
        <v-row align="center"
               justify="center">
            <v-container>
                <v-row>
                    <v-col col="12">
                        <div class="title mb-40"><h2>Latest numbers</h2></div>
                    </v-col>
                </v-row>
                <v-row>
                    <BoxCard v-for="(value, key) in currentCases"
                             :key="key"
                             :label="key"
                             :value="value"
                    />
                </v-row>
            </v-container>
        </v-row>
    </section>
</template>

<script>
    import BoxCard from "../boxCard/boxCard";

    export default {
        name: "Statistics.vue",
        components: {
            BoxCard
        },
        mounted() {
            this.$store.dispatch("fetchDepartments");
            this.interval = setInterval(() => {
                this.$store.dispatch("fetchDepartments");
            }, 5000);
        },
        beforeDestroy() {
            clearInterval(this.interval);
        },
        computed: {
            currentCases() {
                return this.$store.state.data;
            },
        }

    };
</script>

<style scoped>
    .box-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
    }

    .box-card h3 {
        font-size: 54px;
        font-weight: 700;
        color: #2c2f38;
    }

    .title {
        text-align: center;
    }

</style>