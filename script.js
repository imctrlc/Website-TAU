/* script.js */

// Database User 
const users = [
    { nama: "oci", email: "oci@gmail.com", password: "121212" },
    { nama: "adit", email: "adit@gmail.com", password: "212121" },
    { nama: "hadi", email: "hadi@gmail.com", password: "343434" },
    { nama: "rudi", email: "rudi@gmail.com", password: "434343" }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Logic Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const emailInput = document.getElementById('email').value;
            const passInput = document.getElementById('password').value;

            // Cek data dengan database
            const validUser = users.find(user => user.email === emailInput && user.password === passInput);

            if (validUser) {
                // Simpan sesi 
                localStorage.setItem('currentUser', JSON.stringify(validUser));
                alert(`Login Berhasil! Selamat datang, ${validUser.nama}`);
                window.location.href = 'home.html';
            } else {
                alert('Email atau Password salah!');
            }
        });
    }

    // Cek Sesi di halaman lain 
    const currentUser = localStorage.getItem('currentUser');
    const path = window.location.pathname;
    
    // Jika bukan di halaman login (index.html) dan user belum login
    if (!path.includes('index.html') && !currentUser) {
        // Uncomment baris di bawah jika ingin memaksa user login dulu
        // window.location.href = 'index.html'; 
    }
});