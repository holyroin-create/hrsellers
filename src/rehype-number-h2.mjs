export function rehypeNumberH2() {
  return (tree, file) => {
    const fm = file?.data?.astro?.frontmatter;
    if (!fm || fm.numbered !== true) return;
    let n = 0;
    const walk = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === 'element' && child.tagName === 'h2') {
          n += 1;
          child.children.unshift({
            type: 'element',
            tagName: 'span',
            properties: { className: ['hn'] },
            children: [{ type: 'text', value: String(n).padStart(2, '0') }],
          });
        }
        walk(child);
      }
    };
    walk(tree);
  };
}
