export const receiveMessage = (message, callback) => {
  // Listen for message
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === message) {
      callback(request, sender, sendResponse);
    }
    return true;
  });
}