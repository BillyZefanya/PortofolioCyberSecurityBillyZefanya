function openGate(id) {
    const modal = document.getElementById("securityModal");
    const modalGallery = document.getElementById("modalGallery"); // Container gallery di modal
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    
    // Ambil data dari elemen yang diklik
    const items = document.querySelectorAll('.timeline-item');
    const selected = items[id-1];
    
    const title = selected.querySelector('h3').innerText;
    const desc = selected.querySelector('.tech-detail').innerHTML;
    
    // AMBIL SEMUA FOTO DI DALAM GALLERY
    const images = selected.querySelectorAll('.image-gallery img');
    
    // Bersihkan isi modal gallery sebelumnya
    modalGallery.innerHTML = '';
    
    // Looping untuk memasukkan semua foto ke modal
    images.forEach(img => {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        modalGallery.appendChild(newImg);
    });

    modalTitle.innerText = "Audit Evidence: " + title;
    modalDesc.innerHTML = desc;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Menghilangkan scroll pada background
}

// Close function
document.querySelector(".close").onclick = function() {
    document.getElementById("securityModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById("securityModal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}