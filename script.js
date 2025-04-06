let mode = "learning";
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = quizData.length;  // Start with all questions unanswered

// Retrieve stored answers from local storage (if any)
let storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
let mockQuestions = [];
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
    const lastMode = localStorage.getItem("mode");
    mode = selectedMode;
    if( lastMode === "mock") {
        resetQuiz();
        localStorage.clear();
    }
    if (mode === "mock") {
        localStorage.clear()
        generateMockTest();
    } else {
        renderQuiz();
        document.getElementById("submit-button").style.display = "none";
    }
    localStorage.setItem("mode", selectedMode);
    updateFloatingCounter();
    document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
}

function generateMockTest() {
    mockQuestions = [];
    for (let i = 0; i < quizData.length; i += 10) {
        const randomIndex = Math.floor(Math.random() * 10) + i;
        mockQuestions.push(quizData[randomIndex]);
    }
    unansweredQuestions = mockQuestions.length;
    renderQuiz(mockQuestions);
}

function renderQuiz(questions = quizData) {
    storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    const quizContainer = document.getElementById("quiz-container");
    const dropdownMenu = document.getElementById("questionDropdownMenu");

    quizContainer.innerHTML = "";
    dropdownMenu.innerHTML = "";

    questions.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card overflow-scrolling";
        card.innerHTML = `
            <h5>${mode !== "mock" ? '('+item.qNum+')' : "" } ${item.q} ${item.image ? `,<button type="button" onclick="showImageModal('${item.image}')" class="btn btn-outline-success mt-0">Click for Image <i class="bi bi-image"></i></button>` : ""}</h5>
            ${mode === "learning" ? `<p class='text-muted mb-0'>${item.tq}</p>` : ""}
            <div class='mt-3 w-100'>
                ${Object.entries(item.o).map(([key, value]) => `
                    <button class="btn w-100 mb-2 ${mode === 'learning' ? (key === item.a ? 'correct-answer' : 'disabled-button') : 'btn-outline-primary'}"
                            ${mode === 'learning' ? 'disabled' : ''}
                            onclick="handleAnswer('${key}', '${item.a}', ${index})"
                            id="btn-${index}-${key}">
                        ${value} ${mode === "learning" ? `<span class='text-muted mb-0 mt-2'>(${item.to[key]})</span>` : ""}
                    </button>
                `).join('')}
            </div>
            ${mode === "learning" ? "" : `<p id="feedback-${index}" class="mb-0 mt-2"></p>`}
            <p id="explanation-${index}" class="text-muted mb-0 mt-2">
                ${mode === "learning" ? item.r : ""}
            </p>
        `;
        quizContainer.appendChild(card);

        const dropdownItem = document.createElement("li");
        dropdownItem.innerHTML = `<a class="dropdown-item" href="#" onclick="jumpToQuestion(${index})">Question ${index + 1}</a>`;
        dropdownMenu.appendChild(dropdownItem);

        if (storedAnswers[index]) {
            const selectedButton = document.querySelector(`#btn-${index}-${storedAnswers[index]}`);
            if (selectedButton) {
                handleAnswer(storedAnswers[index], item.a, index, reset = true);
            }
        }
    });

    updateFloatingButton();
    updateFloatingCounter();
}

function handleAnswer(selected, correct, index, reset = false) {
    if (reset) {
        correctAnswers = 0;
        incorrectAnswers = 0;
    }
    if (mode !== "learning") {
        const quizDataTemp = mode === "mock" ? mockQuestions : quizData;
        // Disable all the buttons for the current question
        const buttons = document.querySelectorAll(`#quiz-container .card:nth-child(${index + 1}) button`);
        buttons.forEach(button => {
            button.disabled = true; // Disable the button
            // Remove any existing color classes
            button.classList.remove('correct-answer', 'wrong-answer');

            // Apply the correct and wrong answer styles
            if (button.textContent.trim() === quizDataTemp[index].o[selected] && selected !== correct) {
                button.classList.add('wrong-answer');  // Selected wrong answer
            } else if (button.textContent.trim() === quizDataTemp[index].o[correct]) {
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
    const floatingButton = document.getElementById("floating-button");
    if (mode === "mock") {
        floatingButton.textContent = `${currentQuestion + 1}/30`;
    } else {
        floatingButton.textContent = `${currentQuestion + 1}/${quizData.length}`;
    }
}

function updateFloatingCounter() {
    const floatingCounter = document.getElementById("floating-counter");
    const resetButton = document.getElementById("reset-button");
    const mockResetButton = document.getElementById("mock-reset-button");
    if(mode === "mock") {
        mockResetButton.style.display = "block";
        floatingCounter.style.display = "block";
        resetButton.style.display = "none";
    }else if (mode === "practice") {
        floatingCounter.style.display = "block";
        resetButton.style.display = "block";
        mockResetButton.style.display = "none";
    } else {
        floatingCounter.style.display = "none";
        resetButton.style.display = "none";
        mockResetButton.style.display = "none";
    }
    document.getElementById("correct-count").textContent = correctAnswers;
    document.getElementById("incorrect-count").textContent = incorrectAnswers;
    document.getElementById("unanswered-count").textContent = unansweredQuestions;
    if(unansweredQuestions === 0) {
        const score = Number(((correctAnswers / (correctAnswers + incorrectAnswers)) * 100).toFixed(2));
        startFireworks(score,5000);
    }
}

function goToNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
        updateFloatingButton();
    }
}

function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        document.querySelector(".quiz-container").children[currentQuestion].scrollIntoView({ behavior: "smooth" });
        updateFloatingButton();
    }
}

function showImageModal(image) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = `images/${image}`;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

function jumpToQuestion(index) {
    currentQuestion = index;
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

    jumpToQuestion(0);

    // Update the floating counter
    updateFloatingCounter();
}

// Show the reset warning modal
document.getElementById("reset-button").addEventListener("click", function() {
    const resetWarningModal = new bootstrap.Modal(document.getElementById('resetWarningModal'));
    resetWarningModal.show();
});

// Confirm reset and call resetQuiz function
document.getElementById("confirmResetButton").addEventListener("click", function() {
    if(mode === "mock") {
        setMode("mock");
    }else{
        resetQuiz();
    }
    const resetWarningModal = bootstrap.Modal.getInstance(document.getElementById('resetWarningModal'));
    resetWarningModal.hide();
});

document.getElementById("mock-reset-button").addEventListener("click", function() {
    const resetWarningModal = new bootstrap.Modal(document.getElementById('resetWarningModal'));
    resetWarningModal.show();
});

renderQuiz();


// Select the container element
const container = document.querySelector('.container');

// Get the width of the container
const containerWidth = container.offsetWidth;

// Select the footer element
const footer = document.querySelector('.footer-container');
const header = document.querySelector('.header-container');

// Assign the container width to the footer
footer.style.width = `${containerWidth}px`;
header.style.width = `${containerWidth}px`;

startFireworks(32,5000);