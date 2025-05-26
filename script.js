document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        this.classList.toggle('toggle');
        body.classList.toggle('nav-open');
    });

    overlay.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        body.classList.remove('nav-open');
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
                body.classList.remove('nav-open');
            }
        });
    });
});

function openModal(imageSrc, title, description) {
  const modal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  
  modalImage.src = imageSrc;
  modalImage.alt = title + ' Screenshot';
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeModal();
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const blogContent = this.closest('.blog-content');
            const excerpt = blogContent.querySelector('.blog-excerpt');
            const fullContent = blogContent.querySelector('.full-content');
            
            if (!fullContent) return;
            
            if (excerpt.style.display === 'none') {
                excerpt.style.display = 'block';
                fullContent.style.display = 'none';
                this.textContent = 'Continue Reading →';
            } else {
                excerpt.style.display = 'none';
                fullContent.style.display = 'block';
                this.textContent = 'Show Less ←';
            }
        });
    });
});