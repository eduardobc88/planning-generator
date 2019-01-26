
<template lang="html">
    <div
        class="app-wrapper container">
        <h1>
            {{ appTitle }}
        </h1>
        <hr />
        <div
            class="form-group">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <input
                            class="form-control center"
                            type="text"
                            placeholder="Título"
                            v-model="planningTitle">
                    </div>
                    <div class="col-sm">
                        <select
                            class="form-control center"
                            id="aspectSelect"
                            v-model="aspectSelected">
                            <option
                                value=''
                                selected>
                                Selecciona un aspecto
                            </option>
                            <option
                                v-for="(aspect, index) in aspectsData"
                                v-bind:value="aspect">
                                <p>{{ aspect.name }}</p>
                            </option>
                        </select>
                    </div>
                    <div class="col-sm">
                        <button
                            type="button"
                            class="btn btn-primary center"
                            v-on:click="generateAspect()">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div
            v-if="aspectsGenerated.length">
            <h2>
                {{ planningTitle }}
            </h2>
            <table
                id="dataTable"
                class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Aspecto</th>
                        <th scope="col">Actividad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(aspect, index) in aspectsGenerated">
                        <td scope="row">{{ index }}</td>
                        <td>{{ aspect.name }}</td>
                        <td>{{ aspect.activity }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Aspecto</th>
                        <th scope="col">Actividad</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>


<script>

export default {
    components: {},
    data: function() {
        return {
            appTitle: 'Planning Generator',
            planningTitle: '',
            aspectsData: [],
            aspectSelected: '',
            aspectsGenerated: [],
        }
    },
    created() {
        this.getAspectData()
    },
    methods: {
        getAspectData: function() {
            this.axios.get(this.$appAPIURL + 'aspects')
            .then((response) => {
                this.aspectsData = response.data
            })
            .catch((error) => {
                console.log('== getAspectData ==', error)
            })
        },
        defaultSelected: function(index) {
            if(index === 0) {
                return true
            }
        },
        generateAspect: function() {
            if(!this.aspectSelected)
                return

            this.aspectsGenerated.push(this.aspectSelected)
            console.log('== this.aspectsGenerated ==', this.aspectsGenerated)
        },
    },
}
</script>


<style scoped lang="css">
h1 {
    font-size: 28px;
    text-align: center;
}

h2 {
    font-size: 20px;
    text-align: center;
}

.app-wrapper {
    height: 100%;
    overflow-y: auto;
    position: relative;
    margin: auto;
    background-color: white;
}

.center {
    width: 100%;
    text-align: center;
}
</style>
