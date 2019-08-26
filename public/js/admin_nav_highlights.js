const navURL = new URL(window.location);


const urlString = navURL.pathname.replace('/admin', '');
//console.log(urlString);

if (urlString === '') {
    document.querySelector('.admin_aside_pc .admin_home').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_home').classList.add('admin_nav_highlight');
}

if (urlString === '/produkter') {
    document.querySelector('.admin_aside_pc .admin_products').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_products').classList.add('admin_nav_highlight');
}

if (urlString === '/kategorier') {
    document.querySelector('.admin_aside_pc .admin_categories').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_categories').classList.add('admin_nav_highlight');
}

if (urlString === '/brugere') {
    document.querySelector('.admin_aside_pc .admin_users').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_users').classList.add('admin_nav_highlight');
}

if (urlString === '/sider') {
    document.querySelector('.admin_aside_pc .admin_sites').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_sites').classList.add('admin_nav_highlight');
}

if (urlString === '/kontakt') {
    document.querySelector('.admin_aside_pc .admin_contact').classList.add('admin_nav_highlight');
    document.querySelector('.admin_aside_mobile .admin_contact').classList.add('admin_nav_highlight');
}

