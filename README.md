# simpleNotes

A simple, lightweight notes app built with vanilla JavaScript. Notes are saved to `localStorage`, so they persist across page refreshes.

## Features

- Add notes with a title and text
- Delete notes
- Notes persist in the browser via `localStorage`
- Hover over long notes to view the full content or to delete
- Dark theme UI

## Files

- `index.html` — App structure
- `style.css` — Styling
- `script.js` — App logic (add, delete, save, render notes)
- `data.js` — Holds the in-memory notes array

## Usage

1. Open `index.html` in a browser (or serve it with a local dev server, since it uses ES modules).
2. Type a title and/or note text.
3. Click **save** to add the note.
4. Hover over a note to see its full content if it's cut off.
5. Click the trash icon on a note to delete it.

## Tech

- Vanilla JavaScript (ES modules)
- `uuid` (via jspm.dev) for unique note IDs
- Font Awesome for icons
- `localStorage` for persistence