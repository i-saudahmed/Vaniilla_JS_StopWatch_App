      const countDownElement = document.getElementById("countDown");
      const resetValueElement = document.querySelector(".resetValue");
      let startCount = 0;
      let intervalId;

      // Function to start the timer
      const startTimer = () => {
        intervalId = setInterval(() => {
          countDownElement.innerText = startCount++;
        }, 1000);
      };

      // Function to stop the timer and show stop time
      const stopTimer = () => {
        showStopValue();
        clearInterval(intervalId);
      };

      const resetTimer = () => {
        startCount = 0;
        countDownElement.innerText = startCount;
        clearInterval(intervalId);
      };

      // Function to show stop value
      const showStopValue = () => {
        const newPara = document.createElement("p");
        newPara.innerText = `The stop time is ${startCount - 1}`;
        resetValueElement.append(newPara);
      };

      // Function to show stop time
      const clearTimeValue = () => {
        resetValueElement.innerHTML = "";
      };

      // Event listeners
      document
        .querySelector(".start_btn")
        .addEventListener("click", startTimer);

      document
        .querySelector(".reset_btn")
        .addEventListener("click", resetTimer);

      document.querySelector(".stop_btn").addEventListener("click", stopTimer);

      document
        .querySelector(".time_btn")
        .addEventListener("click", showStopValue);

      document
        .querySelector(".clear_btn")
        .addEventListener("click", clearTimeValue);
