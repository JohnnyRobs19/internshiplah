export const initSmoothScroll = () => {
  // Capture all anchor links that point to IDs on the same page
  document.querySelectorAll('a[href^="#"], button[data-scroll-to]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();
      
      // Get the target ID from either href or data attribute
      const element = e.currentTarget as HTMLElement;
      const targetId = element.getAttribute('href') || 
                       element.getAttribute('data-scroll-to');
      
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Calculate navbar height dynamically (if it varies)
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
          
          // Scroll to element with offset for navbar
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  });
};
