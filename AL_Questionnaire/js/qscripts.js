function calculateAnswers() {
    // initialize variables for each choice's score
    let a1score = 0;
    let a2score = 0;
    let a3score = 0;
    let a4score = 0;
  
    // Store radio inputs
    let choices = document.getElementsByTagName("input");
  
    // loop through all the radio inputs
    for (i = 0; i < choices.length; i++) {
      // Check to see if the radio is checked..
      if (choices[i].checked) {
        //Question 1
        if (choices[i].value == "q1Selection1Archetype1") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q1Selection2Archetype3") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q1Selection3Archetype2") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q1Selection4Archetype4") {
          a4score = a4score + 1;
        }
        //Question 2
        if (choices[i].value == "q2Selection1Archetype2") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q2Selection2Archetype4") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q2Selection3Archetype1") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q2Selection4Archetype3") {
          a4score = a4score + 1;
        }
        //Question 3
        if (choices[i].value == "q3Selection1Archetype1") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q3Selection2Archetype3") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q3Selection3Archetype2") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q3Selection4Archetype4") {
          a4score = a4score + 1;
        }
        //Question 4
        if (choices[i].value == "q4Selection1Archetype3") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q4Selection2Archetype1") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q4Selection3Archetype2") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q4Selection4Archetype4") {
          a4score = a4score + 1;
        }
        //Question 5
        if (choices[i].value == "q5Selection1Archetype2") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q5Selection2Archetype1") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q5Selection3Archetype3") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q5Selection4Archetype4") {
          a4score = a4score + 1;
        }
        //Question 6
        if (choices[i].value == "q6Selection1Archetype4") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q6Selection2Archetype3") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q6Selection3Archetype2") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q6Selection4Archetype1") {
          a4score = a4score + 1;
        }
        //Question 7
        if (choices[i].value == "q7Selection1Archetype1") {
          a1score = a1score + 1;
        }
        if (choices[i].value == "q7Selection2Archetype2") {
          a2score = a2score + 1;
        }
        if (choices[i].value == "q7Selection3Archetype3") {
          a3score = a3score + 1;
        }
        if (choices[i].value == "q7Selection4Archetype4") {
          a4score = a4score + 1;
        }
      }
    }
  
    // Which choices are selected the most
    let maxscore = Math.max(a1score, a2score, a3score, a4score);
  
    // Display answer corresponding to choices
    let answerbox = document.getElementById("answer");
    if (a1score == maxscore) {
      // Displayed if this Archetype is selected the most.
      answerbox.innerHTML = "Hustler.";
    }
    if (a2score == maxscore) {
      // Displayed if this Archetype is selected the most.
      answerbox.innerHTML = "Storyteller.";
    }
    if (a3score == maxscore) {
      // Displayed if this Archetype is selected the most.
      answerbox.innerHTML = "Performer.";
    }
    if (a4score == maxscore) {
      // Displayed if this Archetype is selected the most.
      answerbox.innerHTML = "Celebutantes.";
    }
  }
  
  //reset button
  function resetAnswer() {
    let answerbox = document.getElementById("answer");
    answerbox.innerText = "Click Submit to see your results!";
  }
  
