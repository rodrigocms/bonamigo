# 💪 Acessoria Bonamigo

App para acesso rápido aos exercícios e vídeos de treino.

## Como usar

1. Abra `index.html` no navegador
2. Navegue entre as duas categorias de treino
3. Use a barra de pesquisa para encontrar exercícios
4. Clique em "Ver Vídeo" para abrir o link do vídeo

## Como adicionar exercícios

Edite o arquivo `data.js` e adicione novos exercícios no seguinte formato:

```javascript
{
    nome: "Nome do Exercício",
    cargas: "Peso utilizado",
    series: "Número de séries",
    repeticoes: "Número de repetições",
    comentario: "Dicas ou observações",
    videoUrl: "https://link-do-video"
}
```

## Estrutura

- `index.html` - Estrutura da página
- `styles.css` - Estilos e design
- `app.js` - Lógica da aplicação (tabs, pesquisa, etc)
- `data.js` - Dados dos exercícios

## Funcionalidades

✅ Duas categorias de treino  
✅ Pesquisa de exercícios  
✅ Links diretos para vídeos  
✅ Design responsivo (mobile/desktop)  
✅ Tema escuro com cores douradas  

## Próximas melhorias

- [ ] Importar dados diretamente dos PDFs
- [ ] Adicionar histórico de treinos
- [ ] Sistema de favoritos
- [ ] Gerador de rotinas personalizadas
