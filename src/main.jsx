import React from "react";

export default function App() {
  return (
    <div>
      Your App injected to DOM correctly!
      <button>Ext</button>
    </div>
  );
}

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if (request.injectApp) {
    // Inject app to DOM and send response
    injectApp();
    response({
      startedExtension: true
    });
  }
});

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}
