function MenuLista() {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
    menu.classList.add('hide');
  }
}

function botonMostrar(sectionId) {
  const sections = document.querySelectorAll('.hidden');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}


