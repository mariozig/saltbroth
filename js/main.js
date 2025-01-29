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
});
