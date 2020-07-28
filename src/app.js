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
            convertFromEuros: function() {
                return this.calculate().toFixed(2);
            }
        },
        methods: {
            fetchCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => this.rates = data.rates)
            },

            calculate: function() {
                return this.convertedEuros = this.eurosToConvert * this.selectedCurrency;
            }
        }
    })
})