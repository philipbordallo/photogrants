import sortKeys from 'sort-keys';

async function createMarkdownOrgList(title, data) {
  const markup = {};

  for (let item of data) {
    const { name, url, organization } = item;

    if (markup[organization.name]) {
      markup[organization.name].push({
        name,
        url
      })
    }
    else {
      markup[organization.name] = [{
        name,
        url
      }]
    }
  }

  const sortedMarkup = await sortKeys(markup);
  let markupText = `# ${title}\n\n`;

  for (let item in sortedMarkup) {
    markupText += `\n#### ${item}\n\n`;

    for (let opportunity of sortedMarkup[item]) {
      markupText += `- [${opportunity.name}](${opportunity.url})\n`;
    }
  }

  return markupText;
}

export default createMarkdownOrgList;
