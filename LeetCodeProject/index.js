document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");

    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    const cardStatsContainer = document.querySelector(".stats-cards");

    // =========================
    // Username Validation
    // =========================
    function validateUsername(username) {
        if (!username || username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z0-9-]{1,15}$/;
        if (!regex.test(username)) {
            alert("Invalid Username");
            return false;
        }

        return true;
    }
//https://leetcode-stats-api.herokuapp.com/${username}
    // =========================
    // Fetch User Details
    // =========================
    async function fetchUserDetails(username) {
        const url = `https://alfa-leetcode-api.onrender.com/`;

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url);
        
            if (!response.ok) {
                throw new Error("Unable to fetch user details");
            }

            const data = await response.json();
            console.log("User Data:", data);

            updateUI(data);

        } catch (error) {
            console.error(error);
            alert("User not found or API error");

        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    // =========================
    // Update UI
    // =========================
    function updateUI(data) {
        statsContainer.style.display = "block";

        const totalEasy = data.totalEasy || 0;
        const totalMedium = data.totalMedium || 0;
        const totalHard = data.totalHard || 0;

        const solvedEasy = data.easySolved || 0;
        const solvedMedium = data.mediumSolved || 0;
        const solvedHard = data.hardSolved || 0;

        const easyPercent = totalEasy ? (solvedEasy / totalEasy) * 100 : 0;
        const mediumPercent = totalMedium ? (solvedMedium / totalMedium) * 100 : 0;
        const hardPercent = totalHard ? (solvedHard / totalHard) * 100 : 0;

        easyProgressCircle.style.setProperty("--progress", `${easyPercent}%`);
        mediumProgressCircle.style.setProperty("--progress", `${mediumPercent}%`);
        hardProgressCircle.style.setProperty("--progress", `${hardPercent}%`);

        easyLabel.textContent = `${solvedEasy}/${totalEasy}`;
        mediumLabel.textContent = `${solvedMedium}/${totalMedium}`;
        hardLabel.textContent = `${solvedHard}/${totalHard}`;

        cardStatsContainer.innerHTML = `
            <div class="card">Total Solved: ${data.totalSolved}</div>
            <div class="card">Ranking: ${data.ranking}</div>
            <div class="card">Contribution Points: ${data.contributionPoints}</div>
            <div class="card">Reputation: ${data.reputation}</div>
        `;
    }

    // =========================
    // Button Click
    // =========================
    searchButton.addEventListener("click", function () {
        const username = usernameInput.value;
        console.log("Username:", username);

        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });

});
