let mode = "learning";
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = quizData.length;  // Start with all questions unanswered
let learningPageNumber = 1;
let practicePageNumber = 1;

// Retrieve stored answers from local storage (if any)
let storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
document.addEventListener('DOMContentLoaded', function() {
    const agreeModal = new bootstrap.Modal(document.getElementById('agreeModal'), {
        backdrop: 'static',
        keyboard: false
    });
    agreeModal.show();

    document.getElementById('agreeButton').addEventListener('click', function() {
        agreeModal.hide();
    });
});
document.getElementById('quiz-container').addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

function setMode(selectedMode) {
    mode = selectedMode;
    renderQuiz();
    updateFloatingCounter();
}

function renderQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const dropdownMenu = document.getElementById("questionDropdownMenu");

    quizContainer.innerHTML = "";
    dropdownMenu.innerHTML = "";

    quizData.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h5>(${item.qNum}) ${item.q} ${item.image ? `,<button type="button" onclick="showImageModal('${item.image}')" class="btn btn-outline-success mt-0">Click for Image <i class="bi bi-image"></i></button>` : ""}</h5>
            ${mode === "learning" ? `<p class='text-muted'>${item.tq}</p>` : ""}
            <div class='mt-3 w-100'>
                ${Object.entries(item.o).map(([key, value]) => `
                    <button class="btn w-100 mb-2 ${mode === 'learning' ? (key === item.a ? 'correct-answer' : 'disabled-button') : 'btn-outline-primary'}"
                            ${mode === 'learning' ? 'disabled' : ''}
                            onclick="handleAnswer('${key}', '${item.a}', ${index})"
                            id="btn-${index}-${key}">
                        ${value} ${mode === "learning" ? `<span class='text-muted'>(${item.to[key]})</span>` : ""}
                    </button>
                `).join('')}
            </div>
            <p id="feedback-${index}" class="mt-2"></p>
            <p id="explanation-${index}" class="mt-2 text-muted">
                ${mode === "learning" ? item.r : ""}
            </p>
        `;
        quizContainer.appendChild(card);

        const dropdownItem = document.createElement("li");
        dropdownItem.innerHTML = `<a class="dropdown-item" href="#" onclick="jumpToQuestion(${index})">Question ${index + 1}</a>`;
        dropdownMenu.appendChild(dropdownItem);

        // If an answer has been saved for this question, mark the selected button
        if (storedAnswers[index]) {
            const selectedButton = document.querySelector(`#btn-${index}-${storedAnswers[index]}`);
            if (selectedButton) {
                handleAnswer(storedAnswers[index], item.a, index);
            }
        }
    });

    updateFloatingButton();
    updateFloatingCounter();
}

function handleAnswer(selected, correct, index) {
    if (mode === "practice") {
        // Disable all the buttons for the current question
        const buttons = document.querySelectorAll(`#quiz-container .card:nth-child(${index + 1}) button`);
        buttons.forEach(button => {
            button.disabled = true; // Disable the button
            // Remove any existing color classes
            button.classList.remove('correct-answer', 'wrong-answer');

            // Apply the correct and wrong answer styles
            if (button.textContent.trim() === quizData[index].o[selected] && selected !== correct) {
                button.classList.add('wrong-answer');  // Selected wrong answer
            } else if (button.textContent.trim() === quizData[index].o[correct]) {
                button.classList.add('correct-answer');  // Correct answer
            }
        });

        // Show feedback and explanation
        const feedback = document.getElementById(`feedback-${index}`);
        const explanation = document.getElementById(`explanation-${index}`);
        if (selected === correct) {
            feedback.textContent = "Correct!";
            feedback.classList.add('text-success'); // Add green color for correct feedback
            correctAnswers++;
        } else {
            feedback.textContent = "Incorrect.";
            feedback.classList.add('text-danger'); // Add red color for incorrect feedback
            incorrectAnswers++;
        }
        explanation.textContent = quizData[index].r;

        unansweredQuestions--;  // Decrease unanswered questions when an answer is selected
        updateFloatingCounter();

        // Save the selected answer to localStorage
        storedAnswers[index] = selected;
        localStorage.setItem('quizAnswers', JSON.stringify(storedAnswers));
    }
}

function updateFloatingButton() {
    if (mode === "learning") {
        document.getElementById("floating-button").textContent = `${learningPageNumber}/${quizData.length}`;
    } else if (mode === "practice") {
        document.getElementById("floating-button").textContent = `${practicePageNumber}/${quizData.length}`;
    }
}

function updateFloatingCounter() {
    const floatingCounter = document.getElementById("floating-counter");
    const resetButton = document.getElementById("reset-button");
    if (mode === "practice") {
        floatingCounter.style.display = "block";
        resetButton.style.display = "block";
    } else {
        floatingCounter.style.display = "none";
        resetButton.style.display = "none";
    }
    document.getElementById("correct-count").textContent = correctAnswers;
    document.getElementById("incorrect-count").textContent = incorrectAnswers;
    document.getElementById("unanswered-count").textContent = unansweredQuestions;
}

function goToNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        if (mode === "learning") {
            learningPageNumber++;
        } else if (mode === "practice") {
            practicePageNumber++;
        }
        document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
        updateFloatingButton();
    }
}

function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        if (mode === "learning") {
            learningPageNumber--;
        } else if (mode === "practice") {
            practicePageNumber--;
        }
        document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
        updateFloatingButton();
    }
}

function showImageModal(image) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = `../images/${image}`;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

function jumpToQuestion(index) {
    currentQuestion = index;
    if (mode === "learning") {
        learningPageNumber = index + 1;
    } else if (mode === "practice") {
        practicePageNumber = index + 1;
    }
    document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
    updateFloatingButton();
}

// Function to reset only the answers (not the counters or other states)
function resetQuiz() {
    // Clear stored answers in localStorage
    localStorage.removeItem('quizAnswers');

    // Reset the answer selections in the current quiz (but leave the question state intact)
    storedAnswers = [];

    // Reset correct, incorrect, and unanswered counts
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = quizData.length;

    // Reset current question index to 0
    currentQuestion = 0;

    // Re-render the quiz with the updated state
    renderQuiz();

    // Update the floating counter
    updateFloatingCounter();
}

// Attach the resetQuiz function to the reset button
document.getElementById("reset-button").addEventListener("click", resetQuiz);


// Attach the resetQuiz function to the reset button
document.getElementById("reset-button").addEventListener("click", resetQuiz);


renderQuiz();