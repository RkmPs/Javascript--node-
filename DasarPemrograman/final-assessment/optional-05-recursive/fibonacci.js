function fibonacci(n, fibSeries = []) {


    if (n === 0) {
        fibSeries.push(0);
        return fibSeries;
    }
    else if (n === 1) {
        fibSeries.push(0, 1);
        return fibSeries;
    }
    else {
        fibonacci(n - 1, fibSeries);

        fibSeries.push(fibSeries[n - 1] + fibSeries[n - 2]);
        return fibSeries;
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
