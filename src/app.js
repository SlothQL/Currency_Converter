import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            rates: {},
            eurosToStart: 0,
            intoCurrency: null,
            convertedEuros: 0,
            currencyToStart: null,
            moneyToConvert: 0,
            convertedMoney: 0
        },

        mounted: function() {
            this.fetchCurrencies();
        },

        computed: {
            convertFromEuros: function() {
                return this.calculate().toFixed(2);
            },

            convertToEuros: function() {
                return this.convert().toFixed(2);
            }
        },
        methods: {
            fetchCurrencies: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => this.rates = data.rates)
            },

            calculate: function() {
                return this.convertedEuros = this.eurosToStart * this.intoCurrency;
            },

            convert: function() {
                return this.convertedMoney = this.moneyToConvert / this.currencyToStart;
            }
        }
    })
})