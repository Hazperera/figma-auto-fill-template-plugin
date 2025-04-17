figma.showUI(__html__);

figma.ui.onmessage = async msg => {
  const nodes = figma.currentPage.findAll();

  for (const [key, value] of Object.entries(msg)) {
    if (key === 'type') continue;

    const node = nodes.find(n => n.name === key);
    if (!node) continue;

    if (node.type === 'TEXT') {
      await figma.loadFontAsync(node.fontName);
      node.characters = value;
    }

    if (node.type === 'RECTANGLE' && key.toLowerCase().includes('img')) {
      const res = await fetch(value);
      const bytes = await res.arrayBuffer();
      const image = figma.createImage(new Uint8Array(bytes));
      node.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
    }
  }

  figma.closePlugin("Content applied.");
};
