// Add this script to fix the emoji headers by wrapping text content in a span
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.markdown h1');
  
  headers.forEach(header => {
    // Skip if already processed
    if (header.querySelector('.gradient-text')) return;
    
    const content = header.innerHTML;
    
    // Check if header contains emoji (basic check for common emoji patterns)
    const hasEmoji = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}⏱️]/u.test(content);
    
    if (hasEmoji) {
      // For headers with emojis, leave them as plain text with the default color
      header.classList.add('emoji-header');
    } else {
      // For headers without emojis, apply the gradient effect
      header.classList.add('gradient-header');
    }
  });
});