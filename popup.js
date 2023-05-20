const button = document.querySelector("#generateUrls");
const list = document.querySelector("#list");

button.addEventListener("click", async () => {
  const { urlData, titleData } = await findMetadata();
  const urlElement = generateParagraph(urlData);
  const titleElement = generateParagraph(titleData);

  const listElement = generateListElement([urlElement, titleElement]);

  list.appendChild(listElement);
});

function generateParagraph(text) {
  const element = document.createElement("p");
  element.innerHTML = text;
  return element;
}
function generateListElement(elements) {
  const listElement = document.createElement("li");
  elements.forEach((element) => {
    listElement.appendChild(element);
  });
  return listElement;
}

async function findMetadata() {
  let url;
  let title;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);
  url = tab.url;
  title = tab.title;

  return { urlData: url, titleData: title };
}
