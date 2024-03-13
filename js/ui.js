export const editor_ui = () => {
  const element = document.querySelector("[data-js='editor_input']");

  const onInput = (callback) => {
    element.addEventListener("input", (event) => {
      callback(event.target.value);
    });
  };

  const setValue = (value) => {
    element.value = value;
    element.dispatchEvent(new Event("input"));
  };

  return {
    onInput,
    setValue,
  };
};

export const checklist_ui = () => {
  const element = document.querySelector(`[data-js="checklist_container"]`);

  const checklist_item = ({
    item_name,
    action,
  }) => `<li><div class="checklist_item">
    ${item_name}<span class="dots"></span>${action}
  </div></li>`;

  const checklist = (title, items) => {
    const list = items.map(checklist_item);
    return `<div class="checklist"><h1>${title}</h1><ul>${list.join(
      ""
    )}</ul></div>`;
  };

  const setValue = (value) => {
    const result = [];
    value.forEach((element) => {
      result.push(checklist(element.title, element.items));
    });

    // einfacher weg zum update aller Elemente, abern icht sonderlich performant
    element.innerHTML = result.join("");
  };

  return {
    setValue,
  };
};

export const button_ui = () => {
  const element = document.querySelector(`[data-js="try_button"]`);

  const onClick = (callback) => {
    element.addEventListener("click", callback);
  };

  return {
    onClick,
  };
};
