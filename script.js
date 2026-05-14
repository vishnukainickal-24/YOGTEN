document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href === currentPage || (href === "index.html" && currentPage === "")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});
