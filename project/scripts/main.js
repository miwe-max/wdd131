"use strict";

/* ====================================
   MOBILE NAVIGATION
==================================== */

const navToggle = document.querySelector("#nav-toggle");
const mainNav = document.querySelector("#main-nav");

if (navToggle && mainNav) {

    navToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        navToggle.setAttribute("aria-expanded", isOpen);

        navToggle.textContent = isOpen ? "✕" : "☰";
    });
}


/* ====================================
   EVENT DATA
==================================== */

const events = [
    {
        title: "Youth Entrepreneurship Workshop",
        date: "October 15, 2026",
        location: "Umuahia, Abia State",
        category: "Entrepreneurship",
        description:
            "A practical workshop on business planning, marketing and financial management."
    },

    {
        title: "Digital Skills Training",
        date: "November 5, 2026",
        location: "Aba, Abia State",
        category: "Skills",
        description:
            "An introductory training programme covering useful digital and workplace skills."
    },

    {
        title: "Innovation and Business Seminar",
        date: "November 22, 2026",
        location: "Umuahia, Abia State",
        category: "Innovation",
        description:
            "A seminar exploring innovation, entrepreneurship and new economic opportunities."
    },

    {
        title: "Women Enterprise Development Forum",
        date: "December 3, 2026",
        location: "Aba, Abia State",
        category: "Entrepreneurship",
        description:
            "A development forum supporting women interested in business and enterprise growth."
    }
];


/* ====================================
   FUNCTION TO CREATE EVENT HTML
==================================== */

function createEventCard(event) {

    return `
        <article class="card">
            <h3>${event.title}</h3>

            <p>${event.description}</p>

            <p class="card-meta">
                ${event.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${event.location}
            </p>

            <p>
                <strong>Category:</strong>
                ${event.category}
            </p>
        </article>
    `;
}


/* ====================================
   HOME PAGE EVENTS
==================================== */

const homeEventList = document.querySelector("#home-event-list");

if (homeEventList) {

    const featuredEvents = events.slice(0, 3);

    homeEventList.innerHTML =
        featuredEvents.map(createEventCard).join("");
}


/* ====================================
   EVENTS PAGE
==================================== */

const allEventList = document.querySelector("#all-event-list");

function displayEvents(eventArray) {

    if (!allEventList) {
        return;
    }

    if (eventArray.length === 0) {

        allEventList.innerHTML = `
            <p>No events were found in this category.</p>
        `;

        return;
    }

    allEventList.innerHTML =
        eventArray.map(createEventCard).join("");
}


if (allEventList) {
    displayEvents(events);
}


/* ====================================
   EVENT FILTER
==================================== */

const eventFilter = document.querySelector("#event-filter");

if (eventFilter) {

    eventFilter.addEventListener("change", function () {

        const selectedCategory = eventFilter.value;

        if (selectedCategory === "All") {

            displayEvents(events);

        } else {

            const filteredEvents = events.filter(function (event) {
                return event.category === selectedCategory;
            });

            displayEvents(filteredEvents);
        }
    });
}


/* ====================================
   NEWSLETTER FORMS
==================================== */

const newsletterForms =
    document.querySelectorAll(".newsletter-form");

newsletterForms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput =
            form.querySelector('input[type="email"]');

        const message =
            form.parentElement.querySelector(".newsletter-message");

        if (!emailInput || !message) {
            return;
        }

        const email = emailInput.value.trim();

        if (email === "") {

            message.textContent =
                "Please enter your email address.";

            message.className =
                "form-message newsletter-message error-message";

            return;
        }

        message.textContent =
            `Thank you! ${email} has been subscribed successfully.`;

        message.className =
            "form-message newsletter-message success-message";

        form.reset();
    });
});


/* ====================================
   CONTACT FORM
==================================== */

const contactForm =
    document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const message =
            document.querySelector("#message").value.trim();

        const response =
            document.querySelector("#contact-response");

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            response.textContent =
                "Please complete all required fields.";

            response.className =
                "form-message error-message";

            return;
        }

        response.textContent =
            `Thank you, ${name}. Your message has been received.`;

        response.className =
            "form-message success-message";

        contactForm.reset();
    });
}


/* ====================================
   AUTOMATIC COPYRIGHT YEAR
==================================== */

const yearElements =
    document.querySelectorAll(".current-year");

const currentYear =
    new Date().getFullYear();

yearElements.forEach(function (element) {
    element.textContent = currentYear;
});