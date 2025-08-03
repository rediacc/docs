// Fix emoji headers
document.addEventListener('DOMContentLoaded', function() {
  // More comprehensive solution that splits text nodes and wraps emojis
  
  // Function to detect emojis
  function isEmoji(character) {
    const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}⏱️⚠️♻️]/u;
    return emojiRegex.test(character);
  }

  // Process header text to ensure emojis are visible
  function processHeaderText(header) {
    // Get the header content
    const content = header.innerHTML;
    
    // Simple check if the header has any emoji
    if (/[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}⏱️⚠️♻️]/u.test(content)) {
      // If it has emoji, prevent gradient styling
      header.classList.add('emoji-header');
      header.classList.remove('gradient-header');
      
      // Set a data attribute for CSS targeting
      header.setAttribute('data-has-emoji', 'true');
    } else {
      // Otherwise, apply the gradient
      header.classList.add('gradient-header');
      header.classList.remove('emoji-header');
    }
  }

  // Process all headers
  const headers = document.querySelectorAll('.markdown h1');
  headers.forEach(processHeaderText);
  
  // Add mutation observer to handle dynamic content changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        const headers = document.querySelectorAll('.markdown h1');
        headers.forEach(processHeaderText);
      }
    });
  });
  
  // Start observing the document
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

});