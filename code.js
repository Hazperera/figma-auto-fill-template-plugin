figma.showUI(__html__);

figma.ui.onmessage = async msg => {
  if (msg.type === 'apply-content') {
    const nodes = figma.currentPage.findAll();

    for (const node of nodes) {
      if (node.name === 'title' && node.type === 'TEXT') {
        await figma.loadFontAsync(node.fontName);
        node.characters = msg.title;
      }
      if (node.name === 'subtitle' && node.type === 'TEXT') {
        await figma.loadFontAsync(node.fontName);
        node.characters = msg.subtitle;
      }
    }

    const imgNode = nodes.find(n => n.name === 'main_image' && n.type === 'RECTANGLE');
    if (imgNode && msg.imgUrl) {
      const res = await fetch(msg.imgUrl);
      const bytes = await res.arrayBuffer();
      const image = figma.createImage(new Uint8Array(bytes));
      imgNode.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
    }

    figma.closePlugin("Content applied.");
  }
};
