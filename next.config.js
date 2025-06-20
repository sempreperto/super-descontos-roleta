/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione este bloco à sua configuração do Next.js
  eslint: {
    // Aviso: Isso permite que builds de produção sejam concluídos com sucesso,
    // mesmo que seu projeto tenha erros de ESLint. É altamente recomendável
    // corrigir os erros em vez de desabilitar esta verificação.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
