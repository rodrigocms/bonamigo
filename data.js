// ============================================================
// DADOS DOS TREINOS
// ------------------------------------------------------------
// Para adicionar o vídeo de um exercício, cola o link do YouTube
// no campo "videoUrl". Enquanto estiver vazio (""), o botão
// "Ver Vídeo" faz automaticamente uma pesquisa no YouTube pelo
// nome do exercício.
// ============================================================

// ============================================================
// PROGRAMA 1 — Força 2x + Soltando o Jogo (HALTER)
// Progressão em 6 semanas (varia sobretudo intervalo e cadência)
// ============================================================
window.dadosForçaSoltando = [
    {
        treino: "Treino A",
        exercicios: [
            {
                nome: "Volta ao mundo",
                series: "2",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: ""
            },
            {
                nome: "Melhor do mundo",
                series: "1",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: ""
            },
            {
                nome: "Psoas",
                series: "2",
                reps: "20seg",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: ""
            },
            {
                nome: "90/90 com intenção",
                series: "2",
                reps: "12 (6+6)",
                intervalo: "-",
                cadencia: "-",
                obs: "Mobilidade de quadril",
                videoUrl: ""
            },
            {
                nome: "Cócoras",
                series: "1",
                reps: "60s",
                intervalo: "-",
                cadencia: "-",
                obs: "Mobilidade",
                videoUrl: ""
            },
            {
                nome: "Estabilidade de Joelho - ISO",
                series: "3",
                reps: "20seg",
                intervalo: "-",
                cadencia: "Isometria",
                obs: "Cada perna",
                videoUrl: ""
            },
            {
                nome: "Pallof press",
                series: "3",
                reps: "12",
                intervalo: "-",
                cadencia: "-",
                obs: "Anti-rotação",
                videoUrl: ""
            },
            {
                nome: "Agachamento Goblet",
                series: "4",
                reps: "8-10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Progressão de cadência ao longo das 6 semanas",
                videoUrl: ""
            },
            {
                nome: "Remada curvada",
                series: "4",
                reps: "10",
                intervalo: "60-90s",
                cadencia: "3.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Realizar com halter",
                videoUrl: ""
            },
            {
                nome: "Supino reto com halter",
                series: "3-4",
                reps: "8 a 10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: ""
            },
            {
                nome: "Afundo peso corporal",
                series: "3-4",
                reps: "10",
                intervalo: "60s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: ""
            }
        ]
    },
    {
        treino: "Treino B",
        exercicios: [
            {
                nome: "Psoas com Mobilidade",
                series: "2",
                reps: "20seg",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: ""
            },
            {
                nome: "Mobilidade de Quadril 90/90",
                series: "2",
                reps: "12 (6+6)",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: ""
            },
            {
                nome: "Volta ao mundo",
                series: "2",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: ""
            },
            {
                nome: "Melhor do Mundo",
                series: "1",
                reps: "10",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: ""
            },
            {
                nome: "SL Squat - Estabilidade",
                series: "2",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Agachamento unilateral com foco em estabilidade",
                videoUrl: ""
            },
            {
                nome: "Prancha tocando ombros",
                series: "3",
                reps: "10",
                intervalo: "-",
                cadencia: "-",
                obs: "Anti-rotação / core",
                videoUrl: ""
            },
            {
                nome: "Stiff unilateral",
                series: "4",
                reps: "8-10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Progressão de cadência ao longo das 6 semanas",
                videoUrl: ""
            },
            {
                nome: "Serrote",
                series: "4",
                reps: "10-12",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Remada unilateral com halter",
                videoUrl: ""
            },
            {
                nome: "Z Press light",
                series: "3-4",
                reps: "10-12",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: ""
            },
            {
                nome: "Copenhagen Plank",
                series: "3-4",
                reps: "20seg",
                intervalo: "60seg",
                cadencia: "ISO",
                obs: "Cada perna. 4 séries a partir da semana 6",
                videoUrl: ""
            }
        ]
    }
];

// ============================================================
// PROGRAMA 2 — Soltando o Jogo e Blindagem (QUADRIL E OMBRO 2.0)
// ============================================================
window.dadosSoltandoBlindagem = [
    {
        treino: "Quadril e Ombro 2.0",
        exercicios: [
            {
                nome: "Mobilidade Psoas",
                series: "2",
                reps: "30seg ou 10 mov",
                intervalo: "30seg",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Frog Stretch",
                series: "2",
                reps: "30seg",
                intervalo: "20seg",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Mobilidade de flexão e extensão de quadril",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "8x para a frente e para trás, máxima amplitude",
                videoUrl: ""
            },
            {
                nome: "Pescador para Alcance",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "Ficar 5seg na posição crítica",
                videoUrl: ""
            },
            {
                nome: "Cócoras",
                series: "1",
                reps: "60seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Extensão e alinhamento cervical",
                series: "2",
                reps: "10 reps",
                intervalo: "15seg",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Alongamento extensores de punho",
                series: "1",
                reps: "45seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Fortalecimento de ombro - RE",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "Rotação externa",
                videoUrl: ""
            },
            {
                nome: "Melhor do mundo",
                series: "1",
                reps: "10 reps",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Mobilidade Y",
                series: "1",
                reps: "10 reps",
                intervalo: "-",
                cadencia: "-",
                obs: "Fazer com pressão e consciência",
                videoUrl: ""
            },
            {
                nome: "Cobra pose",
                series: "2",
                reps: "30seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            },
            {
                nome: "Torção de tronco sobre o ombro",
                series: "2",
                reps: "30seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: ""
            }
        ]
    }
];
