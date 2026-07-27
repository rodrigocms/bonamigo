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
                videoUrl: "https://youtube.com/shorts/gQE0xGEgXMw"
            },
            {
                nome: "Melhor do mundo",
                series: "1",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: "https://youtu.be/Lx6MTKKy-DY"
            },
            {
                nome: "Psoas",
                series: "2",
                reps: "20seg",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: "https://youtube.com/shorts/11VMeQ-4jLs"
            },
            {
                nome: "90/90 com intenção",
                series: "2",
                reps: "12 (6+6)",
                intervalo: "-",
                cadencia: "-",
                obs: "Mobilidade de quadril",
                videoUrl: "https://youtube.com/shorts/adejAn52XAk"
            },
            {
                nome: "Cócoras",
                series: "1",
                reps: "60s",
                intervalo: "-",
                cadencia: "-",
                obs: "Mobilidade",
                videoUrl: "https://youtu.be/ubv8v15cRvU"
            },
            {
                nome: "Estabilidade de Joelho - ISO",
                series: "3",
                reps: "20seg",
                intervalo: "-",
                cadencia: "Isometria",
                obs: "Cada perna",
                videoUrl: "https://youtube.com/shorts/nzFnA2bJwRo"
            },
            {
                nome: "Pallof press",
                series: "3",
                reps: "12",
                intervalo: "-",
                cadencia: "-",
                obs: "Anti-rotação",
                videoUrl: "https://youtu.be/w3da-JttkXs"
            },
            {
                nome: "Agachamento Goblet",
                series: "4",
                reps: "8-10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Progressão de cadência ao longo das 6 semanas",
                videoUrl: "https://youtu.be/vsKlU7Nm8K4"
            },
            {
                nome: "Remada curvada",
                series: "4",
                reps: "10",
                intervalo: "60-90s",
                cadencia: "3.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Realizar com halter",
                videoUrl: "https://youtube.com/shorts/QQs8cp_UD64"
            },
            {
                nome: "Supino reto com halter",
                series: "3-4",
                reps: "8 a 10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: "https://youtu.be/aCA4yTctuyg"
            },
            {
                nome: "Afundo peso corporal",
                series: "3-4",
                reps: "10",
                intervalo: "60s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: "https://youtu.be/jgTxBaFwu64"
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
                videoUrl: "https://youtube.com/shorts/11VMeQ-4jLs"
            },
            {
                nome: "Mobilidade de Quadril 90/90",
                series: "2",
                reps: "12 (6+6)",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: "https://youtube.com/shorts/adejAn52XAk"
            },
            {
                nome: "Volta ao mundo",
                series: "2",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Aquecimento / mobilidade",
                videoUrl: "https://youtube.com/shorts/gQE0xGEgXMw"
            },
            {
                nome: "Melhor do Mundo",
                series: "1",
                reps: "10",
                intervalo: "-",
                cadencia: "-",
                obs: "Devagar",
                videoUrl: "https://youtu.be/Lx6MTKKy-DY"
            },
            {
                nome: "SL Squat - Estabilidade",
                series: "2",
                reps: "8",
                intervalo: "-",
                cadencia: "-",
                obs: "Agachamento unilateral com foco em estabilidade",
                videoUrl: "https://youtube.com/shorts/hmwCN5UN_-M"
            },
            {
                nome: "Prancha tocando ombros",
                series: "3",
                reps: "10",
                intervalo: "-",
                cadencia: "-",
                obs: "Anti-rotação / core",
                videoUrl: "https://youtu.be/Hl2tu2jvcKA"
            },
            {
                nome: "Stiff unilateral",
                series: "4",
                reps: "8-10",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Progressão de cadência ao longo das 6 semanas",
                videoUrl: "https://youtu.be/-6HbsLhUARg"
            },
            {
                nome: "Serrote",
                series: "4",
                reps: "10-12",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "Remada unilateral com halter",
                videoUrl: "https://youtu.be/egoX7nD8m1o"
            },
            {
                nome: "Z Press light",
                series: "3-4",
                reps: "10-12",
                intervalo: "60-90s",
                cadencia: "4.0.0.0 → 6.0.0.0 → 4.0.X.0",
                obs: "4 séries a partir da semana 6",
                videoUrl: "https://youtu.be/FFlcyns1TKA"
            },
            {
                nome: "Copenhagen Plank",
                series: "3-4",
                reps: "20seg",
                intervalo: "60seg",
                cadencia: "ISO",
                obs: "Cada perna. 4 séries a partir da semana 6",
                videoUrl: "https://youtu.be/rphXPW5eepI"
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
                videoUrl: "https://youtube.com/shorts/11VMeQ-4jLs"
            },
            {
                nome: "Frog Stretch",
                series: "2",
                reps: "30seg",
                intervalo: "20seg",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/BmarkDRrYcg"
            },
            {
                nome: "Mobilidade de flexão e extensão de quadril",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "8x para a frente e para trás, máxima amplitude",
                videoUrl: "https://youtu.be/QK_sCtsgDpE"
            },
            {
                nome: "Pescador para Alcance",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "Ficar 5seg na posição crítica",
                videoUrl: "https://youtu.be/TIkE3ser4Pc"
            },
            {
                nome: "Cócoras",
                series: "1",
                reps: "60seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/ubv8v15cRvU"
            },
            {
                nome: "Extensão e alinhamento cervical",
                series: "2",
                reps: "10 reps",
                intervalo: "15seg",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/kGKbdax8yuU"
            },
            {
                nome: "Alongamento extensores de punho",
                series: "1",
                reps: "45seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/4e-qFQiIA14"
            },
            {
                nome: "Fortalecimento de ombro - RE",
                series: "1",
                reps: "8+8",
                intervalo: "-",
                cadencia: "-",
                obs: "Rotação externa",
                videoUrl: "https://youtube.com/shorts/moSvYHiIz-Q"
            },
            {
                nome: "Melhor do mundo",
                series: "1",
                reps: "10 reps",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/EwAeBOEo5cM"
            },
            {
                nome: "Mobilidade Y",
                series: "1",
                reps: "10 reps",
                intervalo: "-",
                cadencia: "-",
                obs: "Fazer com pressão e consciência",
                videoUrl: "https://youtu.be/QD3ee0On3V4"
            },
            {
                nome: "Cobra pose",
                series: "2",
                reps: "30seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/xAjjpYvFR3w"
            },
            {
                nome: "Torção de tronco sobre o ombro",
                series: "2",
                reps: "30seg",
                intervalo: "-",
                cadencia: "-",
                obs: "",
                videoUrl: "https://youtu.be/nTboQrgmT0E"
            }
        ]
    }
];
