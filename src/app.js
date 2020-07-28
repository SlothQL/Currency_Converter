import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            eurosToConvert: 0,
            selectedCurrency: null,
            convertedEuros: 0
        },

        mounted: function() {
            this.fetchCurrencies();
        },

        computed: {

        },
        methods: {
            fetchCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => this.rates = data.rates)
            },

            convertFromEuros: function() {
                return this.convertedEuros = this.eurosToConvert * this.selectedCurrency
            }
        }
    })
})