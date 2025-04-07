function x() {
    for (let i = 0; i < 6; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}


function y() {
    for (let i = 0; i < 6; i++) {
        function close() {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close();

    }
}

x();
y();