function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';
}
