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

// Render exercícios
function renderExercicios() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active');
    const category = activeTab.id;
    
    let exercicios = [];
    let containerId = '';
    
    if (category === 'força-soltando') {
        exercicios = window.dadosForçaSoltando || [];
        containerId = 'exercicios-força';
    } else if (category === 'soltando-blindagem') {
        exercicios = window.dadosSoltandoBlindagem || [];
        containerId = 'exercicios-soltando';
    }
    
    // Filter by search term
    const filtered = exercicios.filter(ex => {
        const nome = (ex.nome || '').toLowerCase();
        const comentario = (ex.comentario || '').toLowerCase();
        return nome.includes(searchTerm) || comentario.includes(searchTerm);
    });
    
    const container = document.getElementById(containerId);
    
    if (filtered.length === 0) {
        if (searchTerm) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <h3>Nenhum exercício encontrado</h3>
                    <p>Tente outra busca</p>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <h3>Sem exercícios</h3>
                    <p>Adicione exercícios em data.js</p>
                </div>
            `;
        }
        return;
    }
    
    container.innerHTML = filtered.map(ex => `
        <div class="exercicio-card">
            <div class="exercicio-titulo">${ex.nome}</div>
            
            <div class="exercicio-info">
                ${ex.cargas ? `
                    <div class="info-item">
                        <span class="info-label">⚙️ Cargas:</span>
                        <span class="info-value">${ex.cargas}</span>
                    </div>
                ` : ''}
                
                ${ex.series ? `
                    <div class="info-item">
                        <span class="info-label">📊 Séries:</span>
                        <span class="info-value">${ex.series}</span>
                    </div>
                ` : ''}
                
                ${ex.repeticoes ? `
                    <div class="info-item">
                        <span class="info-label">🔄 Reps:</span>
                        <span class="info-value">${ex.repeticoes}</span>
                    </div>
                ` : ''}
            </div>
            
            ${ex.comentario ? `
                <div class="exercicio-comentario">
                    "${ex.comentario}"
                </div>
            ` : ''}
            
            ${ex.videoUrl ? `
                <a href="${ex.videoUrl}" target="_blank" class="video-link">
                    ▶️ Ver Vídeo
                </a>
            ` : ''}
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderExercicios);
