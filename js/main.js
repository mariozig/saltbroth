document.addEventListener('DOMContentLoaded', () => {
    // Initialize tab system if present
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active classes
                tabs.forEach(t => {
                    t.classList.remove('active', 'border-accent-purple', 'text-accent-purple');
                    t.classList.add('border-transparent', 'text-gray-400');
                });
                
                contents.forEach(c => c.classList.add('hidden'));
                
                // Add active classes
                tab.classList.add('active', 'border-accent-purple', 'text-accent-purple');
                tab.classList.remove('border-transparent', 'text-gray-400');
                contents[index].classList.remove('hidden');
            });
        });
    }

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Toggle icon
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
            
            // Close other open items
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherContent = otherButton.nextElementSibling;
                    const otherIcon = otherButton.querySelector('i');
                    
                    otherContent.classList.add('hidden');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });
});
