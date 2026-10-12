


document.addEventListener('DOMContentLoaded', () => {
            // Set current year dynamically
            const yearElem = document.getElementById('year');
            if (yearElem) {
                yearElem.textContent = new Date().getFullYear();
            }

            // Mobile Menu Toggle Logic
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icone');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            if (menuToggle && mobileMenu && menuIcon) {
                menuToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                    if (mobileMenu.classList.contains('hidden')) {
                        menuIcon.className = 'bx bx-menu';
                    } else {
                        menuIcon.className = 'bx bx-x';
                    }
                });

                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        menuIcon.className = 'bx bx-menu';
                    });
                });
            }

            // Highlight active nav section on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 120;
                    if (window.scrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('text-brand-cyan');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('text-brand-cyan');
                    }
                });
            });
        });

        // Open Project Modal Window
        function openProjectModal(title, description, tags) {
            const modal = document.getElementById('project-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalDesc = document.getElementById('modal-desc');
            const modalTags = document.getElementById('modal-tags');

            if (modal && modalTitle && modalDesc && modalTags) {
                modalTitle.textContent = title;
                modalDesc.textContent = description;
                modalTags.innerHTML = tags.map(tag => 
                    `<span class="px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold rounded-full">${tag}</span>`
                ).join('');

                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }

        // Close Project Modal Window
        function closeProjectModal() {
            const modal = document.getElementById('project-modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        // Close modal when clicking on background backdrop
        document.getElementById('project-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'project-modal') {
                closeProjectModal();
            }
        });

        // Contact Form Handler
        function handleFormSubmit(e) {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending Message...';
                
                setTimeout(() => {
                    alert('Thank you! Your message has been sent successfully. Dechen will get back to you soon.');
                    e.target.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }, 1000);
            }
        }