from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

SERVICES = {
    'web development': 'We build modern responsive websites for businesses, startups, and personal brands.',
    'graphic design': 'We create branding assets, social media creatives, and professional visual identities.',
    'digital marketing': 'We support SEO, social media management, and practical marketing strategies.',
    'consultancy': 'We offer business and career consultancy to help visitors choose the right growth path.',
}

PRICING = {
    'frontend development': 'Frontend Development is Rs. 25,000.',
    'ui/ux design': 'UI/UX Design is Rs. 30,000.',
    'digital marketing': 'Digital Marketing is Rs. 50,000.',
}


def smart_reply(message: str) -> str:
    text = message.lower()

    def has_any(terms):
        return any(term in text for term in terms)

    if has_any(['location', 'where are you', 'address', 'office', 'map', 'city']):
        return 'We are based in Rawalpindi, Pakistan. If you want, I can also guide you to the best service based on your goal.'

    if has_any(['contact', 'phone', 'email', 'whatsapp']):
        return 'You can reach us by email at info@taimoursolutions.com or call +92 300 1234567. If you want, I can also recommend the right service for your need.'

    if has_any(['marketing strategy', 'strategy', 'growth plan', 'campaign', 'promote', 'promotion']):
        return 'A smart marketing move is to combine a clear website, a strong offer, and consistent social media promotion. If you want, I can suggest the best service mix for your business goal.'

    if has_any(['price', 'pricing', 'cost', 'fee', 'rate', 'charges']):
        return 'Our current course prices are Frontend Development at Rs. 25,000, UI/UX Design at Rs. 30,000, and Digital Marketing at Rs. 50,000.'

    for keyword, reply in PRICING.items():
        if keyword in text:
            return reply

    if has_any(['frontend', 'html', 'css', 'responsive']):
        return 'Frontend Development covers HTML, CSS, and responsive design for modern websites.'

    if has_any(['ui/ux', 'ux', 'user experience', 'interface', 'design']):
        return 'UI/UX Design focuses on modern interfaces, user flows, and a smoother customer journey.'

    if has_any(['digital marketing', 'marketing', 'seo', 'social media', 'ads']):
        return 'Digital Marketing includes SEO, social media management, and growth strategies for your brand.'

    if has_any(['web development', 'website', 'web site', 'landing page']):
        return 'Web Development gives you a responsive website built for trust, leads, and business growth.'

    if has_any(['graphic design', 'branding', 'logo', 'poster', 'flyer']):
        return 'Graphic Design supports branding, logos, and social media visuals that make your business stand out.'

    if has_any(['consultancy', 'recommend', 'suggest', 'best for me', 'which service']):
        return 'Smart move: start with web development for a strong online presence, add digital marketing for leads, and use graphic design to sharpen your brand identity.'

    for keyword, reply in SERVICES.items():
        if keyword in text:
            return reply

    return 'I may not have the exact detail, but I can still help you move forward: tell me whether you want services, pricing, location, or the best package for your goal.'


@app.route('/')
def home():
    return send_from_directory('.', 'index.html')


@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)


@app.route('/api/chat', methods=['POST'])
def chat():
    payload = request.get_json(silent=True) or {}
    message = str(payload.get('message', '')).strip().lower()

    if not message:
        return jsonify(reply='Please ask about a service, a price, or a package.')

    return jsonify(reply=smart_reply(message))


if __name__ == '__main__':
    app.run(debug=True)