function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
section.style.display= section.style.display ===  'none' ? 'block' : 'none';
    }
}