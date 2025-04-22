if (window.location.hostname.endsWith('.mykronos.com')) {
    let subdomain = window.location.hostname.slice(0, -'.mykronos.com'.length);
    if (subdomain.includes('uat-tsc')) {
        let style = document.createElement('style');
        style.textContent = '.navbar-header, .navbar-brand, .header, .mainNav, .navLink { background-color: #9f0712 !important; color: #fef2f2 !important; }';
        document.head.appendChild(style);
    }
}