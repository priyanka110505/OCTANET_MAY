const learnMoreButton = document.querySelector('.cta a');

learnMoreButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  const targetSection = document.getElementById('your-target-section-id'); 
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start' 
  };
  targetSection.scrollIntoView(scrollOptions);
});
