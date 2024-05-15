document.addEventListener('DOMContentLoaded', function () {
  const sectionTitles = document.querySelectorAll('.section-title');

  sectionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const sectionContent = title.nextElementSibling;
      const expanded = title.getAttribute('aria-expanded') === 'true' || false;
      sectionContent.style.display = expanded ? 'none' : 'block';
      title.setAttribute('aria-expanded', !expanded);
    });
  });
document.getElementById('toggle-language').addEventListener('click', function () {
  const googleTranslateElement = document.getElementById('google_translate_element');
  const currentLanguage = googleTranslateElement.getAttribute('data-language');

  if (currentLanguage === 'es') {
    googleTranslateElement.setAttribute('data-language', 'en');
    googleTranslateElement.innerHTML = ''; // Clear existing content
    // No need to recreate the element, update its configuration instead
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }); 
    this.textContent = 'Change to English';
  } else {
    googleTranslateElement.setAttribute('data-language', 'es');
    googleTranslateElement.innerHTML = '';  // Clear existing content
          // No need to recreate the element, update its configuration instead
    new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE });
    this.textContent = 'Cambiar a Inglés';
  }
});
