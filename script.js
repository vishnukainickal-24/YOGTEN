document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage || (href === "index.html" && currentPage === "")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    const whatsappForm = document.getElementById("whatsapp-form");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(whatsappForm);
            const name = formData.get("name")?.toString().trim();
            const email = formData.get("email")?.toString().trim();
            const phone = formData.get("phone")?.toString().trim();
            const message = formData.get("message")?.toString().trim();

            const whatsappNumber = "919526482417";
            let text = `Hi, my name is ${name}.\nEmail: ${email}.`;
            if (phone) {
                text += `\nPhone: ${phone}.`;
            }
            text += `\nMessage: ${message}`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, "_blank");
        });
    }
});
