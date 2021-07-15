function attachEvents() {
  const sendButton = document.getElementById("submit");
  const refreshButton = document.getElementById("refresh");
  const authorInput = document.getElementById("author");
  const contentInput = document.getElementById("content");
  const textarea = document.getElementById("messages");

  sendButton.addEventListener("click", sendMessage);
  refreshButton.addEventListener("click", getMessages);

  async function sendMessage() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const data = {
      author: authorInput.value,
      content: contentInput.value,
    };

    await fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    authorInput.value = "";
    contentInput.value = "";
  }

  async function getMessages() {
    const url = "http://localhost:3030/jsonstore/messenger";

    const messagesRequest = await fetch(url);
    const messages = await messagesRequest.json();

    let messagesString = Object.values(messages)
      .map((message) => `${message.author}: ${message.content}`)
      .join("\n");

    textarea.textContent = messagesString;
  }
}

attachEvents();
