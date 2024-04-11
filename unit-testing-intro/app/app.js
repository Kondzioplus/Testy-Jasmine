var codes = {
    'Poland': 48,
    'Spain': 34,
    'Germany': 49
};
findPrefixCode = function(country) {
    if (country in codes) {
        return codes[country];
    } else {
        return 'Unknow country';
    }
}