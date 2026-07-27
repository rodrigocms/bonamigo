// Tabs switching
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Remove active class from all buttons and contents
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(category).classList.add('active');
        
        // Reset search
        document.getElementById('searchInput').value = '';
        renderExercicios();
    });
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', renderExercicios);

// Escapar HTML para evitar problemas de renderização/segurança
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Devolve o link do vídeo; se não existir, faz pesquisa no YouTube pelo nome
function getVideoUrl(ex) {
    if (ex.videoUrl && ex.videoUrl.trim() !== '') {
        return ex.videoUrl;
    }
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ex.nome + ' exercício');
}

// Extrai o ID do vídeo do YouTube a partir do link (youtu.be, /shorts/ ou watch?v=)
function getYouTubeId(url) {
    if (!url) return '';
    const patterns = [
        /youtu\.be\/([A-Za-z0-9_-]{6,})/,
        /youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/,
        /[?&]v=([A-Za-z0-9_-]{6,})/,
        /youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return '';
}

// Devolve a URL da miniatura do vídeo (ou '' se não houver ID)
function getThumbUrl(url) {
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
}

// Renderiza um cartão de exercício
function renderCard(ex) {
    const videoUrl = getVideoUrl(ex);
    const temLinkProprio = ex.videoUrl && ex.videoUrl.trim() !== '';
    const thumbUrl = getThumbUrl(videoUrl);
    return `
        <div class="exercicio-card">
            <div class="exercicio-titulo">${escapeHtml(ex.nome)}</div>

            ${thumbUrl ? `
                <a href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener" class="video-thumb">
                    <img src="${escapeHtml(thumbUrl)}" alt="Vídeo: ${escapeHtml(ex.nome)}" loading="lazy">
                    <span class="video-thumb-play">▶️</span>
                </a>
            ` : ''}

            <div class="exercicio-info">
                ${ex.series ? `
                    <div class="info-item">
                        <span class="info-label">📊 Séries:</span>
                        <span class="info-value">${escapeHtml(ex.series)}</span>
                    </div>
                ` : ''}

                ${ex.reps ? `
                    <div class="info-item">
                        <span class="info-label">🔄 Reps:</span>
                        <span class="info-value">${escapeHtml(ex.reps)}</span>
                    </div>
                ` : ''}

                ${ex.intervalo && ex.intervalo !== '-' ? `
                    <div class="info-item">
                        <span class="info-label">⏱️ Intervalo:</span>
                        <span class="info-value">${escapeHtml(ex.intervalo)}</span>
                    </div>
                ` : ''}

                ${ex.cadencia && ex.cadencia !== '-' ? `
                    <div class="info-item">
                        <span class="info-label">🎯 Cadência:</span>
                        <span class="info-value">${escapeHtml(ex.cadencia)}</span>
                    </div>
                ` : ''}
            </div>

            ${ex.obs ? `
                <div class="exercicio-comentario">
                    "${escapeHtml(ex.obs)}"
                </div>
            ` : ''}

            <a href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener" class="video-link">
                ▶️ ${temLinkProprio ? 'Ver Vídeo' : 'Procurar no YouTube'}
            </a>
        </div>
    `;
}

// Render exercícios
function renderExercicios() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active');
    const category = activeTab.id;

    let grupos = [];
    let containerId = '';

    if (category === 'força-soltando') {
        grupos = window.dadosForçaSoltando || [];
        containerId = 'exercicios-força';
    } else if (category === 'soltando-blindagem') {
        grupos = window.dadosSoltandoBlindagem || [];
        containerId = 'exercicios-soltando';
    }

    const container = document.getElementById(containerId);

    // Filtra os exercícios dentro de cada grupo (treino)
    const gruposFiltrados = grupos.map(grupo => {
        const exerciciosFiltrados = (grupo.exercicios || []).filter(ex => {
            const nome = (ex.nome || '').toLowerCase();
            const obs = (ex.obs || '').toLowerCase();
            return nome.includes(searchTerm) || obs.includes(searchTerm);
        });
        return { treino: grupo.treino, exercicios: exerciciosFiltrados };
    }).filter(grupo => grupo.exercicios.length > 0);

    if (gruposFiltrados.length === 0) {
        container.innerHTML = searchTerm
            ? `
                <div class="empty-state">
                    <h3>Nenhum exercício encontrado</h3>
                    <p>Tente outra busca</p>
                </div>
            `
            : `
                <div class="empty-state">
                    <h3>Sem exercícios</h3>
                    <p>Adicione exercícios em data.js</p>
                </div>
            `;
        return;
    }

    container.innerHTML = gruposFiltrados.map(grupo => `
        <section class="treino-bloco">
            <h2 class="treino-titulo">${escapeHtml(grupo.treino)}</h2>
            <div class="exercicios-grid">
                ${grupo.exercicios.map(renderCard).join('')}
            </div>
        </section>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderExercicios);
