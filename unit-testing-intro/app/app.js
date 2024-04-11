//sprawdzanie używanego typu i wyrzut błędu przy wykryciu wyjątku.
checkString = function(string) {
    if (!(typeof string === 'string')) {
        throw new Error('Valid string is required');
    } else {
        return string.length;
    }
    
}
