document.addEventListener('DOMContentLoaded', () => {
    // Initialize tab system if present
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    if (tabs.length > 0 && contents.length > 0) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active classes
                tabs.forEach(t => {
                    t.classList.remove('active', 'border-accent-100', 'text-accent-100');
                    t.classList.add('border-transparent', 'text-gray-400');
                });
                
                contents.forEach(c => c.classList.add('hidden'));
                
                // Add active classes
                tab.classList.add('active', 'border-accent-100', 'text-accent-100');
                tab.classList.remove('border-transparent', 'text-gray-400');
                contents[index].classList.remove('hidden');
            });
        });
    }
});
