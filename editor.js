
// Generell würde ich Klassen für CSS verwenden und data-attribute zum js binden
// Versuche die Interaktion mit den UI Elementen und den eigentliche logik zu trennen das erleichtert das erweitern der Funktionalität

import { editor_ui, checklist_ui, button_ui } from "./js/ui.js";
import { parse_md } from "./js/markdown_parser.js";
import example from "./js/example.js";

const checklist = checklist_ui();
const editor = editor_ui();
const try_button = button_ui();

try_button.onClick(() => editor.setValue(example));

const render = (input) => {
  const data = parse_md(input);
  checklist.setValue(data);
};

editor.onInput(render);

editor.setValue(example);
