# Skill: Bilingual Localization (VI/EN)

This skill describes how to maintain and extend the bilingual system used in this project.

## 🛠 How it works
1. **Attributes:** Elements use `data-vi` for Vietnamese text and `data-en` for English text.
2. **Static Text:** The initial text inside the tag should be the default language (English for FM Dictionary, Vietnamese for Main Portfolio).
3. **Toggle Logic:**
   - A button with `id="lang-toggle"` triggers the switch.
   - The script iterates through all elements with `[data-vi]`.
   - It updates `innerHTML` based on the current language state.

## 📝 Best Practices
- When adding new sections, always include both `data-vi` and `data-en`.
- Ensure complex HTML (like `<strong>` or `<em>`) is mirrored in both attributes if needed.
- Maintain the tracking of the `currentLang` variable in the local script block.
