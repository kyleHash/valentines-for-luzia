# For Luzia - A Valentine's Day Puzzle Journey 💕

A personal, romantic puzzle adventure created by Kyle for Luzia. This completely offline, local website features 5 interconnected puzzles leading to a heartfelt Valentine's Day question. Built with pure HTML, CSS, and JavaScript—no frameworks, no backend required.

## Features

- 5 interconnected puzzles that reference each other (light ARG style)
- Progress saving via localStorage
- Soft pink theme with excellent contrast
- Fully responsive (mobile and desktop)
- Hint system for each puzzle
- Access gating (must solve puzzles in order)
- Confetti celebration on the final page
- Reset progress functionality for testing

## How to Run Locally

### Option 1: Direct File Opening (Simplest)
1. Navigate to the project folder
2. Double-click `index.html` to open it in your default browser
3. Start solving puzzles!

### Option 2: VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open automatically at `http://localhost:5500`

### Option 3: Python HTTP Server
1. Open terminal in the project folder
2. Run: `python -m http.server 8000`
3. Open browser and navigate to `http://localhost:8000`

### Option 4: Node.js HTTP Server
1. Install http-server globally: `npm install -g http-server`
2. Run: `http-server -p 8000`
3. Open browser and navigate to `http://localhost:8000`

## Project Structure

```
valentines/
├── index.html              # Landing page with progress tracking
├── puzzle-1.html           # Acrostic puzzle
├── puzzle-2.html           # Letter grid coordinate puzzle
├── puzzle-3.html           # Caesar cipher puzzle
├── puzzle-4.html           # Image alt text puzzle
├── puzzle-5.html           # View source puzzle
├── final.html              # Valentine's reveal page
├── README.md               # This file
└── assets/
    ├── css/
    │   └── styles.css      # All styling with CSS variables
    ├── js/
    │   ├── app.js          # Core functionality
    │   └── confetti.js     # Confetti animation
    └── images/
        └── heart.svg       # Heart graphic for puzzle 4
```

## Puzzle Solutions (For Testing)

| Puzzle | Theme | Answer | Description |
|--------|-------|--------|-------------|
| 1 | Acrostic Poem | **LUZIA** | First letters spell Luzia's name |
| 2 | Letter Grid | **FEB14** | Coordinates point to Valentine's date |
| 3 | Caesar Cipher | **CUPID** | Shift backward by 14 |
| 4 | Image Alt Text | **HEART** | Kyle's heart for Luzia |
| 5 | View Source | **VALENTINE** | The holiday itself |

**Note:** All answers are case-insensitive and whitespace is trimmed automatically.

## How the Puzzles Connect

1. **Puzzle 1 (LUZIA)** → The journey starts with Luzia's name - she's the answer!
2. **Puzzle 2 (FEB14)** → References puzzle 1, reveals Valentine's date
3. **Puzzle 3 (CUPID)** → Uses 14 from FEB14 as the cipher key - love's arrow
4. **Puzzle 4 (HEART)** → Kyle's heart, given to Luzia
5. **Puzzle 5 (VALENTINE)** → The final reveal - Valentine's Day!

Each puzzle is personalized with messages from Kyle to Luzia, creating a romantic journey through their story.

## Technical Details

### Progress Tracking
- Stored in localStorage under key: `valentines_progress`
- Format: `{ unlocked: 0-5, solved: [boolean, boolean, ...] }`
- Reset available on landing page for testing

### Access Gating
- Each puzzle checks if the user has unlocked it
- Redirects to index.html with error message if not unlocked
- Prevents skipping ahead by URL manipulation

### Design System
- CSS Variables for easy theming (see styles.css)
- Girly pink gradient background (#ffeef8 to #ffd9eb)
- Hot pink accents (#ff69b4)
- Romantic floating emojis (✨ and 💕)
- Smooth gradient buttons with ripple effects
- System font stack for performance
- Mobile-first responsive design

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Requires localStorage support (all modern browsers)

## Development Features

### Reset Progress
- Click "Reset Progress" button on the landing page
- Clears all localStorage data
- Refreshes page to show clean state

### Testing Tips
1. Use browser DevTools to view localStorage:
   - Console: `localStorage.getItem('valentines_progress')`
2. Manually unlock all puzzles:
   - Console: `localStorage.setItem('valentines_progress', '{"unlocked":5,"solved":[true,true,true,true,true]}')`
3. View mobile design:
   - DevTools → Toggle device toolbar (Ctrl+Shift+M)

## Customization

### Change Color Theme
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
  --accent: #ff9ecd;  /* Primary pink color */
  --accent2: #ffb3d9; /* Lighter pink for hovers */
  /* ... other colors ... */
}
```

### Modify Puzzles
Each puzzle file is self-contained and easy to edit:
- Change puzzle text and content in the HTML
- Update the answer in the `setupPuzzle()` call
- Modify hints in the `hints` array

### Adjust Confetti
Edit `assets/js/confetti.js`:
- Change `confettiCount` for more/fewer pieces
- Modify `colors` array for different colors
- Adjust animation duration and timing

## Credits

Built with love by Kyle for Luzia:
- Pure HTML5, CSS3, and JavaScript (ES6+)
- No external libraries or frameworks
- No CDNs or external dependencies
- Designed for offline use
- Every detail personalized with care 💕

Created as a romantic Valentine's Day surprise for the most special person! 💝

## License

This is a personal project. Feel free to use and modify for your own romantic gestures!
