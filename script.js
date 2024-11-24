document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav-list a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust for header height
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  // Special check for the last section (#contact)
  const contactSection = document.querySelector("#contact");
  const contactTop = contactSection.offsetTop - 60; // Adjust for header height
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 10) {
    currentSection = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

function toggleMenu() {
  const navList = document.getElementById("nav-list");
  const menuIcon = document.getElementById("menu-icon");
  const socialSidebar = document.querySelector(".social-media-sidebar");

  navList.classList.toggle("open");
  menuIcon.classList.toggle("open");

  // Handle social media sidebar visibility with delay
  if (navList.classList.contains("open")) {
    setTimeout(() => {
      socialSidebar.classList.add("visible"); // Show the sidebar after a delay
      setTimeout(() => {
        socialSidebar.classList.add("float-up"); // Add float animation from bottom
      }, 100); // Delay float-up slightly for smoothness
    }, 100); // Delay to ensure nav menu is fully visible
  } else {
    socialSidebar.classList.remove("float-up"); // Reset float-up animation
    socialSidebar.classList.remove("visible"); // Hide the sidebar
  }
}

document.querySelectorAll("#nav-list a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor click behavior

    // Get the target section's ID from the href attribute
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start", // Align the section at the top of the viewport
    });

    // Close the mobile menu if it's open
    const navList = document.getElementById("nav-list");
    const menuIcon = document.getElementById("menu-icon");
    const socialSidebar = document.querySelector(".social-media-sidebar");

    if (navList.classList.contains("open")) {
      navList.classList.remove("open");
      menuIcon.classList.remove("open");
      socialSidebar.classList.remove("float-up");
      socialSidebar.classList.remove("visible");
    }
  });
});

// Add flashlight dynamically
const flashlight = document.createElement("div");
flashlight.id = "flashlight";
document.body.appendChild(flashlight);

// Update flashlight position based on mouse movement
document.addEventListener("mousemove", (event) => {
  flashlight.style.top = `${event.clientY}px`;
  flashlight.style.left = `${event.clientX}px`;
});

// Ensure scrolling is enabled
document.addEventListener("mouseleave", () => {
  flashlight.style.opacity = 0;
});

document.addEventListener("mouseenter", () => {
  flashlight.style.opacity = 1;
});

// Function to toggle "scrolled" class on header
function updateHeaderState() {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Update header state on scroll
window.addEventListener("scroll", updateHeaderState);

// Update header state on page load
document.addEventListener("DOMContentLoaded", updateHeaderState);

document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".project-item");

  const applyBackgroundImages = () => {
    projectItems.forEach((item) => {
      const imageElement = item.querySelector(".project-image img");

      if (imageElement) {
        const imageUrl = imageElement.src;

        // Check if the screen width is less than 1500px
        if (window.innerWidth <= 1500) {
          // Apply background image for project-item
          item.style.backgroundImage = `url('${imageUrl}')`;
          item.style.backgroundSize = "cover";
          item.style.backgroundPosition = "center";
          item.style.backgroundRepeat = "no-repeat";

          // Hide the original .project-image
          const projectImageContainer = item.querySelector(".project-image");
          if (projectImageContainer) {
            projectImageContainer.style.display = "none";
          }
        } else {
          // Revert styles for larger screens
          item.style.backgroundImage = "";
          const projectImageContainer = item.querySelector(".project-image");
          if (projectImageContainer) {
            projectImageContainer.style.display = "block";
          }
        }
      }
    });
  };

  // Apply background images on page load
  applyBackgroundImages();

  // Reapply background images on window resize
  window.addEventListener("resize", applyBackgroundImages);
});

document.addEventListener("DOMContentLoaded", () => {
  // Disable browser's scroll restoration feature
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Scroll to the top (hero section)
  const heroSection = document.getElementById("hero");

  if (heroSection) {
    heroSection.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init({
    publicKey: "XLy7l0PtqY5KesP7z",
  });

  // Form submission event listener
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const serviceID = "service_eik2ebt"; // Replace with your EmailJS Service ID
      const templateID = "template_ev7ysrs"; // Replace with your EmailJS Template ID

      // Send email using EmailJS
      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          alert("Message sent successfully!");
          this.reset(); // Reset form fields after successful submission
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
    });
});
