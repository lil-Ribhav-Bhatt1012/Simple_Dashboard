document.addEventListener('DOMContentLoaded', function() {
    // Function for tab switching
    function openTab(tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName + '-tab').classList.add("active");
    }

    // Initial open tab
    openTab('Pending');

    // Attach event listeners for tabs
    var tabButtons = document.querySelectorAll('.tablink');
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            openTab(this.dataset.tab);
        });
    });

    // Modal functionality
    var modal = document.getElementById('myModal');
    var closeModalButtons = document.querySelectorAll('.close-modal');

    closeModalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.style.display = "none";
        });
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Sample data for table population
    var users = [
        { name: "Sam Altman", email: "samaltman123@gmail.com", risk: "Medium", reason: "IP Change", queueDays: "4 days", addedOn: "12 Oct, 2023", reviewed: "Yes" },
        { name: "Sameer Choubey", email: "sameerchoubey123@gmail.com", risk: "High", reason: "FIFO", queueDays: "4 days", addedOn: "12 Oct, 2023", reviewed: "No" },
        { name: "Adarsh Panikkar", email: "adarsh@onjuno.com", risk: "Low", reason: "IP Change", queueDays: "5 days", addedOn: "12 Oct, 2023", reviewed: "No" },
        { name: "Pratik Shetty", email: "pratik3@gmail.com", risk: "High", reason: "FIFO", queueDays: "5 days", addedOn: "12 Oct, 2023", reviewed: "Yes" },
        { name: "Elon Musk", email: "elon@twitterceo.com", risk: "Low", reason: "FIFO", queueDays: "5 days", addedOn: "12 Oct, 2023", reviewed: "Yes" }
        // The rest of the data would continue in this format
    ];

    function populateTable(users, tableId) {
        var tableBody = document.querySelector('#' + tableId + ' tbody');
        tableBody.innerHTML = '';

        users.forEach(function(user) {
            var row = tableBody.insertRow();
            row.insertCell(0).innerText = user.name;
            row.insertCell(1).innerText = user.email;
            row.insertCell(2).innerText = user.risk;
            row.insertCell(3).innerText = user.reason;
            row.insertCell(4).innerText = user.queueDays;
            row.insertCell(5).innerText = user.addedOn;
            row.insertCell(6).innerText = user.reviewed;
        });
    }

    populateTable(users, 'Pending');
});
