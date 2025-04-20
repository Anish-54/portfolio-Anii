document.addEventListener('DOMContentLoaded', function() {
     // Mobile menu toggle
     const hamburger = document.querySelector('.hamburger');
     const navLinks = document.querySelector('.nav-links');
     
     hamburger.addEventListener('click', function() {
         navLinks.classList.toggle('active');
     });
 
     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             e.preventDefault();
             
             navLinks.classList.remove('active');
             
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
 
     // Animate skill bars on scroll
     const skillBars = document.querySelectorAll('.skill-progress');
     
     function animateSkillBars() {
         skillBars.forEach(bar => {
             const width = bar.getAttribute('data-width');
             if (isElementInViewport(bar)) {
                 bar.style.width = width + '%';
             }
         });
     }
 
     // Check if element is in viewport
     function isElementInViewport(el) {
         const rect = el.getBoundingClientRect();
         return (
             rect.top >= 0 &&
             rect.left >= 0 &&
             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
         );
     }
 
     // Run once on page load
     animateSkillBars();
 
     // Run on scroll
     window.addEventListener('scroll', animateSkillBars);
 
     // Sticky header
     const header = document.querySelector('header');
     const headerHeight = header.offsetHeight;
     const heroSection = document.querySelector('.hero');
     
     function stickyHeader() {
         if (window.pageYOffset > heroSection.offsetHeight - headerHeight) {
             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
         } else {
             header.style.boxShadow = 'none';
         }
     }
 
     window.addEventListener('scroll', stickyHeader);
 });