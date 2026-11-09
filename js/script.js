document.addEventListener('DOMContentLoaded', function () {
    // Captura o botão e a sidebar
    const sidebarCollapseBtn = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    if (sidebarCollapseBtn && sidebar) {
        // Adiciona evento de clique para alternar a classe 'active'
        sidebarCollapseBtn.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }
});
