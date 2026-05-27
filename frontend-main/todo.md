npm create vite@latest frontend -- --template react-ts
npm install
npm install axios react-router-dom
npm install -D @types/node

<!-- add to package.json  -->
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://teu-username.github.io/nome-repo"
}

npm install -D gh-pages

<!-- 
    Mudar BrowserRouter para HashRouter em App.tsx
    Atualizar homepage no package.json com URL correta
    Atualizar base no vite.config.ts com /nome-repo/
    Atualizar VITE_API_URL no .env para o backend no Render
    Commit e push: git add . && git commit -m "ready for deploy" && git push
    Executar: npm run deploy
    No GitHub: Settings → Pages → Escolher branch gh-pages → Save 
-->