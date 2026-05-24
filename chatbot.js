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

        if (text.includes('price') || text.includes('pricing') || text.includes('cost') || text.includes('fee')) {
            return 'Frontend Development is Rs. 25,000, UI/UX Design is Rs. 30,000, and Digital Marketing is Rs. 50,000.';
        }

        if (text.includes('frontend')) {
            return 'Frontend Development covers HTML, CSS, and responsive design for modern websites.';
        }

        if (text.includes('ui/ux') || text.includes('ux') || text.includes('design')) {
            return 'UI/UX Design focuses on modern interfaces, user flows, and better customer experience.';
        }

        if (text.includes('digital marketing') || text.includes('marketing')) {
            return 'Digital Marketing includes SEO, social media management, and growth strategies for your brand.';
        }

        if (text.includes('web development') || text.includes('website')) {
            return 'Web Development gives you a responsive website built for business, trust, and lead generation.';
        }

        if (text.includes('graphic design') || text.includes('branding')) {
            return 'Graphic Design supports branding, logos, and social media visuals that make your business stand out.';
        }

        if (text.includes('consultancy') || text.includes('recommend') || text.includes('suggest')) {
            return 'For service websites, start with web development. For lead generation, add digital marketing. For brand identity, use graphic design.';
        }

        return 'I can help with web development, graphic design, digital marketing, consultancy, and course prices.';
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

    addMessage('Hi, I can answer questions about our services, prices, and which option fits your needs best.', 'bot');

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