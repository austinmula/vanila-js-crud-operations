let even = (function () {

    function process(n) {
        if (n % 2 === 0) {
            return 'even'
        }

        return 'odd'
    }
    return { process: process }
})()