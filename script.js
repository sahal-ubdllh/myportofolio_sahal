const sidebar = document.querySelector(".sidebar")

function showSidebar() {
    sidebar.style.display = "flex"

}
function hideSidebar() {
    sidebar.style.display = "none"
}

window.addEventListener("scroll", function() {
    if (sidebar.style.display === "flex") {
        hideSidebar(); // Menyembunyikan sidebar ketika menggulir
    }
});

window.onload = function() {
    const elements = document.querySelectorAll('.fade-in'); // Menargetkan elemen dengan kelas fade-in
    elements.forEach(element => {
        element.classList.add('fade-in'); // Menambahkan kelas untuk memicu animasi
    });
};

window.onload = function() {
    const elements = document.querySelectorAll('.zoom-in'); // Menargetkan elemen dengan kelas zoom-in
    elements.forEach(element => {
        element.classList.add('zoom-in'); // Menambahkan kelas untuk memicu animasi
    });
};
    

   var options = {
       strings: ["Sahal Ubaidillah Gunardo"],
       typeSpeed: 50,
       backSpeed: 50,
       loop: true // Optional: loops the typing effect 
   };
   var typed = new Typed("#typed", options);


// Scroll infinity
const logo = document.querySelector(".scroll-item").cloneNode(true);

document.querySelector(".skill-item").appendChild(logo)