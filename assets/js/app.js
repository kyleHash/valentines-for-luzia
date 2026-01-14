// ===========================
// Progress Management
// ===========================
const Progress = {
  STORAGE_KEY: 'valentines_progress',

  get() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : { unlocked: 0, solved: [false, false, false, false, false, false] };
  },

  set(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  unlock(level) {
    const progress = this.get();
    if (level > progress.unlocked) {
      progress.unlocked = level;
    }
    progress.solved[level - 1] = true;
    this.set(progress);
  },

  isSolved(level) {
    const progress = this.get();
    return progress.solved[level - 1] || false;
  },

  getUnlocked() {
    return this.get().unlocked;
  },

  getSolvedCount() {
    return this.get().solved.filter(s => s).length;
  },

  reset() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};

// ===========================
// Page Access Gating
// ===========================
function checkAccess(requiredLevel) {
  const progress = Progress.get();
  if (progress.unlocked < requiredLevel) {
    window.location.href = 'index.html?locked=true';
  }
}

// ===========================
// Answer Validation
// ===========================
function validateAnswer(input, correct) {
  const normalized = input.trim().toLowerCase();
  return normalized === correct.toLowerCase();
}

// ===========================
// UI Feedback
// ===========================
function showSuccess(message, onComplete) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.className = 'toast toast-success show';

    setTimeout(() => {
      toast.className = 'toast';
      if (onComplete) onComplete();
    }, 1500);
  }
}

function showError(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.className = 'toast toast-error show';

    setTimeout(() => {
      toast.className = 'toast';
    }, 2000);
  }
}

// ===========================
// Hint System
// ===========================
let currentHintIndex = 0;

function showHint(hints) {
  const hintBox = document.getElementById('hint-box');
  const hintText = document.getElementById('hint-text');

  if (!hintBox || !hintText) return;

  if (currentHintIndex < hints.length) {
    hintText.textContent = hints[currentHintIndex];
    hintBox.classList.add('show');
    currentHintIndex++;

    // Update button text if all hints shown
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn && currentHintIndex >= hints.length) {
      hintBtn.textContent = 'No more hints!';
      hintBtn.disabled = true;
    }
  }
}

// ===========================
// Puzzle Submission Handler
// ===========================
function setupPuzzle(puzzleNumber, correctAnswer, nextPage, hints = []) {
  // Check if already solved
  if (Progress.isSolved(puzzleNumber)) {
    const solvedMessage = document.getElementById('solved-message');
    if (solvedMessage) {
      solvedMessage.style.display = 'block';
    }
  }

  // Setup form submission
  const form = document.getElementById('puzzle-form');
  const answerInput = document.getElementById('answer-input');

  if (form && answerInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const userAnswer = answerInput.value;

      if (validateAnswer(userAnswer, correctAnswer)) {
        Progress.unlock(puzzleNumber);
        showSuccess('Correct! Moving to the next puzzle...', () => {
          window.location.href = nextPage;
        });
      } else {
        showError('Not quite right. Try again!');
        answerInput.value = '';
        answerInput.focus();
      }
    });
  }

  // Setup hint button
  const hintBtn = document.getElementById('hint-btn');
  if (hintBtn && hints.length > 0) {
    hintBtn.addEventListener('click', () => {
      showHint(hints);
    });
  }
}

// ===========================
// Toggle Functionality (for code blocks, etc.)
// ===========================
function setupToggle(buttonId, targetId) {
  const button = document.getElementById(buttonId);
  const target = document.getElementById(targetId);

  if (button && target) {
    button.addEventListener('click', () => {
      target.classList.toggle('show');
      button.textContent = target.classList.contains('show')
        ? button.getAttribute('data-hide-text') || 'Hide'
        : button.getAttribute('data-show-text') || 'Show';
    });
  }
}

// ===========================
// Initialize on page load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Check for locked message on index page
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('locked') === 'true') {
      showError('You need to solve the previous puzzles first!');
    }

    // Update progress display
    const progressDisplay = document.getElementById('progress-display');
    if (progressDisplay) {
      const solvedCount = Progress.getSolvedCount();
      progressDisplay.textContent = `You've completed ${solvedCount} of 5 puzzles`;
    }

    // Setup reset button
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress?')) {
          Progress.reset();
          window.location.reload();
        }
      });
    }
  }
});
