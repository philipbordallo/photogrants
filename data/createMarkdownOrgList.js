import sortKeys from 'sort-keys';

function createMarkdownOrgList(title, data) {
  const markup = {};

  data.forEach((item) => {
    const { name, url, organization } = item;

    if (markup[organization.name]) {
      markup[organization.name].push({
        name,
        url,
      });
    }
    else {
      markup[organization.name] = [{
        name,
        url,
      }];
    }
  });

  const sortedMarkup = sortKeys(markup);

  let markupText = `# ${title}\n\n`;

  Object.keys(sortedMarkup).forEach((item) => {
    markupText += `\n#### ${item}\n\n`;

    sortedMarkup[item].forEach((opportunity) => {
      markupText += `- [${opportunity.name}](${opportunity.url})\n`;
    });
  });

  return markupText;
}

export default createMarkdownOrgList;
