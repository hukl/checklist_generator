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
    let
      lines       = checklist_markup.split("\n");
    console.log(lines);


    let fold_fun = function(acc, line) {
      let match_result = null;

      if ((match_result = line.match(/^#\s(.+)$/))) {
        acc.push("Titel: " + match_result[1]);
      } else if ((match_result = line.match(/^(\w+):\s(.+)$/))) {
        acc.push("Action: " + match_result[1] + ": " + match_result[2]);
      }

      return acc;
    };

    //let result = fold(fold_fun, [], lines);
    let result = lines.reduce(fold_fun, []);
    console.log(result);
  }


  //while (lines.length > 0) {
  //  //
  //  var n = lines.shift();
  //  if ("# " === n.substring(0, 2))
  //    accumulator.push({
  //      title: n.substring(2),
  //      checklists: []
  //    });
  //  else if ("## " === n.substring(0, 3))
  //    accumulator.slice(-1)[0]["checklists"].push({
  //      title: n.substring(3),
  //      items: []
  //    });
  //  else if ("* " === n.substring(0, 2)) {
  //    var s = n.indexOf(": ");
  //    s >= 0 ? accumulator.slice(-1)[0]["checklists"].slice(-1)[0].items.push({
  //      subject: n.substring(2, s),
  //      operation: n.substring(s + 2)
  //    }) : accumulator.slice(-1)[0]["checklists"].slice(-1)[0].items.push({
  //      subject: n.substring(2)
  //    });
  //  }
  //}
  //checklist_set = accumulator;
  //}

  return {
    init
  };
}

const checklist = Checklist();
window.addEventListener("load", function() {
  checklist.init();
});
