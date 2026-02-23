document.addEventListener("DOMContentLoaded", () => {
  // --- Initialize ScrollReveal ---
  if (typeof ScrollReveal !== "undefined") {
    const defaultProps = {
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      distance: "30px",
      duration: 1000,
      desktop: true,
      mobile: true,
    };

    const targetElements = [
      {
        element: ".section-heading",
        animation: {
          delay: 300,
          distance: "0px",
          origin: "bottom",
        },
      },
      {
        element: ".hero-title",
        animation: {
          delay: 500,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".hero-cta",
        animation: {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".about-info",
        animation: {
          delay: 1000,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
      },
      {
        element: ".project-card",
        animation: {
          delay: 500,
          origin: "bottom",
        },
      },
    ];

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
      ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
  }

  // --- Initialize Tilt Effect ---
  if (typeof VanillaTilt !== "undefined") {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
  }
});
