/**
 * Created by Alireza Ahmadi on 07/07/2019.
 */

jQuery( document ).ready( function( $ ) {
    $.en2fa = {
        _numerals: [
            {
                "farsi": "٠",
                "english": "0",
                "html": "&#1632;"
            },
            {
                "farsi": "١",
                "english": "1",
                "html": "&#1633;"
            },
            {
                "farsi": "٢",
                "english": "2",
                "html": "&#1634;"
            },
            {
                "farsi": "٣",
                "english": "3",
                "html": "&#1635;"
            },
            {
                "farsi": "٤",
                "english": "4",
                "html": "&#1636;"
            },
            {
                "farsi": "٥",
                "english": "5",
                "html": "&#1637;"
            },
            {
                "farsi": "٦",
                "english": "6",
                "html": "&#1638;"
            },
            {
                "farsi": "٧",
                "english": "7",
                "html": "&#1639;"
            },
            {
                "farsi": "٨",
                "english": "8",
                "html": "&#1640;"
            },
            {
                "farsi": "٩",
                "english": "9",
                "html": "&#1641;"
            }
        ],
        // Convert English to Farsi
        toFarsi: function(number) {
            $.each(this._numerals, function(i,v) {
                number = number.replace(new RegExp(v.english, 'g'), v.farsi);
                //console.log(number);
            });

            return number;
        },
        // Convert Farsi to English
        toEnglish: function(number) {
            $.each(this._numerals, function(i,v) {
                number = number.replace(new RegExp(v.farsi, 'g'), v.english);
                //console.log(number);
            });

            return number;
        },
        // Convert Farsi to Html
        toHtml: function(number) {
            $.each(this._numerals, function(i,v) {
                number = number.replace(new RegExp(v.farsi, 'g'), v.html);
                //console.log(number);
            });

            return number;
        }
    }
});
