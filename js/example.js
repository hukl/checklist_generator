const example_md = document.getElementById("example");

export default example_md.innerHTML
  .split("\n")
  .map((item) => item.trim())
  .join("\n");
