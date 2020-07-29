import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            eurosToStart: 0,
            intoCurrency: null,
            currencyToStart: 0,
            moneyToConvert: 0,
            formattedNumber: ''
        },

        mounted: function() {
            this.fetchCurrencies();
        },

        computed: {
            convertFromEuros: function() {
                return (this.eurosToStart * this.intoCurrency).toFixed(2);
            },

            convertToEuros: function() {
                if (this.currencyToStart === 0) {
                    return (0).toFixed(2)
                }
                return (this.moneyToConvert / this.currencyToStart).toFixed(2);
            }
        },
        methods: {
            fetchCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => this.rates = data.rates)
            },
        }
    })
})