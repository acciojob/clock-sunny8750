function updateTimer() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      // Add leading zeros to the hours, minutes, and seconds
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      // Update the timer display
      var timerElement = document.getElementById("timer");
      timerElement.textContent = hours + ":" + minutes + ":" + seconds + ",";

	 var currentDate = currentTime.toDateString();

      // Update the date display
      var dateElement = document.getElementById("date");
      dateElement.textContent = currentDate;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);