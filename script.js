document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 50; // trigger point

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Dynamic glow effect for glass cards based on mouse position
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set CSS variables for the specific card being hovered
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Add a subtle radial gradient background to simulate a spotlight effect
            // We use a relatively transparent color for the spotlight
            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px, 
                    rgba(255,255,255,0.08) 0%, 
                    rgba(255,255,255,0.02) 50%,
                    transparent 100%
                )
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset background when mouse leaves
            card.style.background = 'var(--bg-card)';
        });
    });

    // WebMCP Tool Discovery
    if (navigator.modelContext && navigator.modelContext.provideContext) {
        navigator.modelContext.provideContext({
            tools: [
                {
                    name: "get_channel_info",
                    description: "Get information about the CrashCourseTech YouTube channel",
                    inputSchema: { type: "object", properties: {} },
                    execute: async () => ({
                        channelName: "CrashCourseTech",
                        subscriberCount: "Over 50k",
                        topics: ["AI", "Tech Strategy", "Training"]
                    })
                }
            ]
        });
    }
});
