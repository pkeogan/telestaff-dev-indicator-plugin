if (window.location.hostname.endsWith('.npr.mykronos.com')) {
    let subdomain = window.location.hostname.slice(0, -'.npr.mykronos.com'.length);
    if (subdomain.includes('-uat-tsc')) {
        let style = document.createElement('style');
        style.textContent = '.header, .mainNav { background-color: #e7000b !important; }';
        document.head.appendChild(style);
    }
}