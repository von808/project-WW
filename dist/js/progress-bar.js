//============================================================PURCHASES-PROGRESS-BAR-START
let progressScore1Full = document.getElementById('progress-score-1-full').innerHTML;
let progressScore1 = document.getElementById('progress-score-1').innerHTML;
const progressLine1 = document.querySelector('#progress-line-1');
let progressScore2Full = document.getElementById('progress-score-2-full').innerHTML;
let progressScore2 = document.getElementById('progress-score-2').innerHTML;
const progressLine2 = document.querySelector('#progress-line-2');
let progressScore3Full = document.getElementById('progress-score-3-full').innerHTML;
let progressScore3 = document.getElementById('progress-score-3').innerHTML;
const progressLine3 = document.querySelector('#progress-line-3');

// PROGRESS-1
const progress1 = (progressScore1 / (progressScore1Full / 100)).toFixed(2);
progressLine1.style.width = progress1 + '%';

if (progress1 <= 0) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.0)'
} else if (progress1 >= 1 && progress1 < 10) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.1)'
} else if (progress1 >= 10 && progress1 < 20) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.2)'
} else if (progress1 >= 20 && progress1 < 30) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.3)'
} else if (progress1 >= 30 && progress1 < 40) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.4)'
} else if (progress1 >= 40 && progress1 < 50) {
  progressLine1.style.background = '#231F20'
} else if (progress1 >= 50 && progress1 < 60) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.6)'
} else if (progress1 >= 60 && progress1 < 70) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.7)'
} else if (progress1 >= 70 && progress1 < 80) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.8)'
} else if (progress1 >= 80 && progress1 < 90) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.9)'
} else if (progress1 >= 90 && progress1 < 100) {
  progressLine1.style.background = 'rgba(0, 0, 0, 1.0)'
}

// PROGRESS-2
const progress2 = (progressScore2 / (progressScore2Full / 100)).toFixed(2);
progressLine2.style.width = progress2 + '%';

if (progress2 <= 0) {
  progressLine1.style.background = 'rgba(0, 0, 0, 0.0)'
} else if (progress2 >= 1 && progress2 < 10) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.1)'
} else if (progress2 >= 10 && progress2 < 20) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.2)'
} else if (progress2 >= 20 && progress2 < 30) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.3)'
} else if (progress2 >= 30 && progress2 < 40) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.4)'
} else if (progress2 >= 40 && progress2 < 50) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.5)'
} else if (progress2 >= 50 && progress2 < 60) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.6)'
} else if (progress2 >= 60 && progress2 < 70) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.7)'
} else if (progress2 >= 70 && progress2 < 80) {
  progressLine2.style.background = 'rgba(0, 0, 0, 0.8)'
} else if (progress2 >= 80 && progress2 < 90) {
  progressLine2.style.background = '#4D4AFD'
} else if (progress2 >= 90 && progress2 < 100) {
  progressLine2.style.background = 'rgba(0, 0, 0, 1.0)'
}

// PROGRESS-3
const progress3 = (progressScore3 / (progressScore3Full / 100)).toFixed(2);
progressLine3.style.width = progress3 + '%';

if (progress3 <= 0) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.0)'
} else if (progress3 >= 1 && progress3 < 10) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.1)'
} else if (progress3 >= 10 && progress3 < 20) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.2)'
} else if (progress3 >= 20 && progress3 < 30) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.3)'
} else if (progress3 >= 30 && progress3 < 40) {
  progressLine3.style.background = '#00BE35'
} else if (progress3 >= 40 && progress3 < 50) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.5)'
} else if (progress3 >= 50 && progress3 < 60) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.6)'
} else if (progress3 >= 60 && progress3 < 70) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.7)'
} else if (progress3 >= 70 && progress3 < 80) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.8)'
} else if (progress3 >= 80 && progress3 < 90) {
  progressLine3.style.background = 'rgba(0, 0, 0, 0.9)'
} else if (progress3 >= 90 && progress3 < 100) {
  progressLine3.style.background = 'rgba(0, 0, 0, 1.0)'
}
//============================================================PURCHASES-PROGRESS-BAR-END