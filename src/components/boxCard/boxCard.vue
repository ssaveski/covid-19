<template>
    <v-col class="mb-30" sm="12" md="4" lg="4" xl="6">
        <div class="box-card box-shadow"><h3>{{value | formatNumber}}</h3> <span class="capitalize">{{label}}</span>
        </div>

    </v-col>
</template>

<script>
    const numeral = require("numeral");

    export default {
        name: "BoxCard.vue",
        props: {
            value: null,
            label: String
        },
        filters: {
            formatNumber: function (value) {
                return Math.abs(value) >= 1.0e+6 ? numeral(value).format("0a") : numeral(value).format("0,0");
            }
        },
        methods: {}
    }
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

    .capitalize {
        text-transform: capitalize;
    }
</style>