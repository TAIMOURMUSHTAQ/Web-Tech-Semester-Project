const messagesEl = document.getElementById('chatbot-messages');
const formEl = document.getElementById('chatbot-form');
const inputEl = document.getElementById('chatbot-input');
const launcherEl = document.getElementById('chatbot-launcher');
const panelEl = document.getElementById('chatbot-panel');
const closeEl = document.getElementById('chatbot-close');
const quickButtons = document.querySelectorAll('[data-message]');

if (messagesEl && formEl && inputEl) {
    const openPanel = () => {
        panelEl?.classList.add('open');
        launcherEl?.setAttribute('aria-expanded', 'true');
        panelEl?.setAttribute('aria-hidden', 'false');
    };

    const closePanel = () => {
        panelEl?.classList.remove('open');
        launcherEl?.setAttribute('aria-expanded', 'false');
        panelEl?.setAttribute('aria-hidden', 'true');
    };

    const localReply = (message) => {
        const text = message.toLowerCase();

        const hasAny = (terms) => terms.some((term) => text.includes(term));

        if (hasAny(['location', 'where are you', 'address', 'office', 'map', 'city'])) {
            return 'We are based in Rawalpindi, Pakistan. If you want, I can also guide you to the best service based on your goal.';
        }

        if (hasAny(['contact', 'phone', 'email', 'whatsapp'])) {
            return 'You can reach us by email at info@taimoursolutions.com or call +92 300 1234567. If you want, I can also recommend the right service for your need.';
        }

        if (hasAny(['marketing strategy', 'strategy', 'growth plan', 'campaign', 'promote', 'promotion'])) {
            return 'A smart marketing move is to combine a clear website, a strong offer, and consistent social media promotion. If you want, I can suggest the best service mix for your business goal.';
        }

        if (hasAny(['price', 'pricing', 'cost', 'fee', 'rate', 'charges'])) {
            return 'Our current course prices are Frontend Development at Rs. 25,000, UI/UX Design at Rs. 30,000, and Digital Marketing at Rs. 50,000.';
        }

        if (hasAny(['frontend', 'html', 'css', 'responsive'])) {
            return 'Frontend Development covers HTML, CSS, and responsive design for modern websites.';
        }

        if (hasAny(['ui/ux', 'ux', 'user experience', 'interface', 'design'])) {
            return 'UI/UX Design focuses on modern interfaces, user flows, and a smoother customer journey.';
        }

        if (hasAny(['digital marketing', 'marketing', 'seo', 'social media', 'ads'])) {
            return 'Digital Marketing includes SEO, social media management, and growth strategies for your brand.';
        }

        if (hasAny(['web development', 'website', 'web site', 'landing page'])) {
            return 'Web Development gives you a responsive website built for trust, leads, and business growth.';
        }

        if (hasAny(['graphic design', 'branding', 'logo', 'poster', 'flyer'])) {
            return 'Graphic Design supports branding, logos, and social media visuals that make your business stand out.';
        }

        if (hasAny(['consultancy', 'recommend', 'suggest', 'best for me', 'which service'])) {
            return 'Smart move: start with web development for a strong online presence, add digital marketing for leads, and use graphic design to sharpen your brand identity.';
        }

        return 'I may not have the exact detail, but I can still help you move forward: tell me whether you want services, pricing, location, or the best package for your goal.';
    };

    const addMessage = (text, sender) => {
        const bubble = document.createElement('div');
        bubble.className = `chat-message ${sender}`;
        bubble.textContent = text;
        messagesEl.appendChild(bubble);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    };

    const sendMessage = async (message) => {
        const trimmed = message.trim();

        if (!trimmed) {
            return;
        }

        addMessage(trimmed, 'user');
        inputEl.value = '';

        if (window.location.protocol === 'file:') {
            addMessage(localReply(trimmed), 'bot');
            return;
        }

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: trimmed })
            });

            if (!response.ok) {
                throw new Error('Chat API unavailable');
            }

            const data = await response.json();
            addMessage(data.reply || localReply(trimmed), 'bot');
        } catch (error) {
            addMessage(localReply(trimmed), 'bot');
        }
    };

    launcherEl?.addEventListener('click', () => {
        openPanel();
        inputEl.focus();
    });

    closeEl?.addEventListener('click', closePanel);

    addMessage('Hi, I can answer questions about our services, prices, location, or help you choose the best option for your goal.', 'bot');

    formEl.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage(inputEl.value);
    });

    quickButtons.forEach((button) => {
        button.addEventListener('click', () => {
            openPanel();
            sendMessage(button.dataset.message || '');
        });
    });
}