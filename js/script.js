// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-05-JS/sw.js", {
    scope: "/ICS2O-Unit-5-05-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const counter1 = parseInt(document.getElementById("counter1").value);
  const counter2 = parseInt(document.getElementById("counter2").value);
  var addedNumber = 0;
  var answer = 0;

  if (counter1 > 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      answer = answer + counter1;
    }
  } else if (counter1 < 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      answer = answer - counter1;
    }
  } else if (counter1 > 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      answer = answer - counter1;
    }
  } else if (counter1 < 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      answer = answer + counter1;
    }
  }
  document.getElementById("answer").innerHTML = 
      counter1 + " x " + addedNumber + " = " + answer;
}