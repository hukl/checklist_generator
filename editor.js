function Checklist() {
  let checklist_set = null;

  const fold = (reducer, init, xs) => {
    let acc = init;
    for (const x of xs) {
      acc = reducer(acc, x);
    }
    return acc;
  };

  function init() {
    bind_editor();

  }

  function bind_editor() {
    let textarea = document.querySelector("div#editor > textarea");

    textarea.addEventListener("input", function() {
      console.log("Textarea Value: " + textarea.value);
      parse_md(textarea.value);

    });
    console.log(textarea);
  }




  function parse_md(checklist_markup) {
    let lines       = checklist_markup.split("\n");

    let fold_fun = function(acc, line) {
      let match_result = null;

      if ((match_result = line.match(/^#\s(.+)$/))) {
        acc.push(new_checklist(match_result[1]));
      } else if ((match_result = line.match(/^(\w+):\s(.+)$/))) {
        let current_checklist_element = acc.slice(-1)[0];
        let current_item_list         = current_checklist_element.querySelector("ul");
        let new_item                  = new_checklist_item(match_result[1], match_result[2]);

        current_item_list.appendChild(new_item);
      }

      return acc;
    };

    let result = lines.reduce(fold_fun, []);

    let new_checklist_container = generate_element(
      "<div id='checklist_container'></div>"
    );

    result.forEach(function(c) {new_checklist_container.appendChild(c);});
    console.log("hi", new_checklist_container);
    document.querySelector("div#checklist_container").replaceWith(new_checklist_container);
  }

  function new_checklist(title) {
    let checklist_element = generate_element(
      "<div class='checklist'><h1>" + title + "</h1><ul></ul></div>"
    );

    return checklist_element;
  }

  function new_checklist_item(item_name, action) {
    let checklist_item = generate_element(
      "<li><div class='checklist_item'>" +
        item_name + "<span class='dots'></span>" + action +
      "</div></li>"
    );

    return checklist_item;
  }

  // Expects html with exactly one top level element
  function generate_element(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.children[0];
  }

  return {
    init
  };
}

const checklist = Checklist();
window.addEventListener("load", function() {
  checklist.init();
});
