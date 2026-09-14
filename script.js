// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
}


// Close mobile menu after clicking a link
document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });
});


// Project request form
const projectForm = document.getElementById("projectForm");
const formMessage = document.getElementById("formMessage");

if (projectForm) {

    projectForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const customerPhone =
            document.getElementById("customerPhone").value.trim();

        const projectType =
            document.getElementById("projectType").value;

        const budget =
            document.getElementById("budget").value;

        const deadline =
            document.getElementById("deadline").value;

        const contact =
            document.getElementById("contact").value;

        const details =
            document.getElementById("details").value.trim();

        if (!name || !customerPhone || !projectType || !details) {
            formMessage.textContent =
                "Please fill in all required fields.";

            return;
        }

        const message =
`Hello AB LOOTS,

I would like to discuss a project.

Name: ${name}
WhatsApp Number: ${customerPhone}
Project Type: ${projectType}
Budget: ${budget}
Deadline: ${deadline || "Not specified"}
Preferred Contact: ${contact}

Project Details:
${details}`;

        const whatsappNumber = "919597269970";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        formMessage.textContent =
            "Opening WhatsApp...";

        window.open(whatsappURL, "_blank");
    });
}


// Project tracking
const trackBtn = document.getElementById("trackBtn");
const trackResult = document.getElementById("trackResult");

if (trackBtn) {

    trackBtn.addEventListener("click", () => {

        const projectId =
            document.getElementById("projectId").value.trim();

        if (!projectId) {
            trackResult.textContent =
                "Please enter a Project ID.";

            return;
        }

        trackResult.innerHTML =
            `<strong>${projectId}</strong><br>
             Status: Project ID received.<br>
             Current tracking is in demo mode.`;
    });
}


// Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}