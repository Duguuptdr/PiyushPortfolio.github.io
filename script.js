
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            
            images.forEach(img => {
                img.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    alert('😎 😎 na bacha na tuj se na ho pai ga');
                });
                
                img.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', '😎 Happy Downloading! - From Abhishek\'s Portfolio');
                });
            });
        });
  

  
        document.addEventListener('copy', function(e) {
            // Prevent the default copy behavior
            e.preventDefault();
            
            // Get the selected text
            const selectedText = window.getSelection().toString();
            
            // Create the modified text with emoji
            const modifiedText = '😎' + '\n\n😂 Nice try 😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂 😂';
            
            // Set the modified text to clipboard
            e.clipboardData.setData('text/plain', modifiedText);
        });
  