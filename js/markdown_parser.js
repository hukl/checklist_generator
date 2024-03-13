export const parse_md = (checklist_markup) => {
  const lines = checklist_markup.split("\n");

  // Es empfiehlt sich immutable zu arbeiten, mutierst du bspw. in einem reduce können die Seiteneffekte leicht übersehen werden
  const fold_fun = (acc, line) => {
    let match;

    if ((match = line.match(/^#\s(.+)$/))) {
      const [, title] = match;
      // early returns sind so eine Gusto Sache, ich mag es weil damit mehrere Codepfade einfach ermöglicht werden
      acc.push({ title, items: [] });
      return acc;
    }

    if ((match = line.match(/^\*\s(.+):\s(.+)$/))) {
      const [, item_name, action] = match;
      acc[acc.length - 1].items.push({ item_name, action });

      return acc;
    }

    return acc;
  };

  return lines.reduce(fold_fun, []);
};
