// Create WhatsApp float button
const whatsappFloat = document.createElement('a');
whatsappFloat.href = "https://wa.me/919810336031";
whatsappFloat.className = "whatsapp-float";
whatsappFloat.target = "_blank";
whatsappFloat.innerHTML = `
    <i class="fab fa-whatsapp"></i>
    <span class="whatsapp-text">Chat with us</span>
`;

// Add to all pages
document.body.appendChild(whatsappFloat); 