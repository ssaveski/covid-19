<template>
    <section>
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="6"
            >
                <div
                        class="card"
                >
                    <div class="title">
                        <h1 class="headline mb-1">Welcome to Reporting Page for COVID-19</h1>
                        <p class="subtitle-1">
                            This page contains the latest information on the spread of the COVID-19 virus, gathering
                            information
                            from the WHO (World Health Organization) page.
                        </p>
                    </div>

                        <v-img  class="icon" :src="require('../../assets/svg/virus.svg')"/>
                </div>
            </v-col>
        </v-row>
    </section>

</template>

<script>
    export default {
        name: "Info",
        data: () => ({
            virusImg: "virus.svg",
            stefan: "Kako si"
        }),
    }
</script>

<style scoped>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #004da8;
        border-radius: 10px;
        padding: 50px;
    }

    .title {
        color: #fff;
        text-align: left;
    }

    @media (max-width: 992px) and (min-width: 768px) {
        .icon svg {
            width: 100px;
            height: 100px;
        }
    }
    @media (max-width: 576px) {
        .card {
            padding: 30px 30px 20px;
            flex-wrap: wrap;
        }
        .title {
            text-align: center;
        }
        .icon svg {
            width: 50px;
            height: 50px;
        }
    }
</style>