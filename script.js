document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons and sections
  const tabButtons = document.querySelectorAll('.tab-button');
  const sections = document.querySelectorAll('main section');
  
  // Set initial active state
  tabButtons[0].classList.add('active');
  sections[0].classList.add('active');
  
  // Add click event listeners to tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and sections
      tabButtons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));
      
      // Add active class to clicked button and corresponding section
      button.classList.add('active');
      sections[index].classList.add('active');
    });
  });
});