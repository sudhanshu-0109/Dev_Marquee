function updateTime() {
        let now = new Date();

        let time = now.toLocaleTimeString();

        document.getElementById("time").value = time;
    }

function updateDate() {
        let now = new Date();

        let date = now.toLocaleDateString('en-GB');

        document.getElementById("date").value = date;
    }

    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
    setInterval(updateDate, 1000);
