export const handleNavigation = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -40; // Offset if you have a fixed header
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const API_URL = import.meta.env.VITE_API_BASE_URL;
