# Fortella

Uma aplicação web mobile-first com foco em segurança. O projeto permite que o usuário encontre seu caminho de forma segura, com opções para desviar de incidentes e compartilhar o trajeto com contatos.

## Funcionalidades

  * **Geolocalização Automática:** Detecta a sua localização atual como ponto de partida.
  * **Busca por Endereço:** Encontra o destino a partir de um endereço digitado.
  * **Ajuste de Ponto no Mapa:** Permite arrastar e soltar o marcador de destino para garantir a precisão do ponto.
  * **Rotas Dinâmicas:** Exibe rotas alternativas ("Acidente em andamento" e "Árvore no caminho") com desvios simulados, além da rota segura padrão.
  * **Compartilhamento de Rota:** Funcionalidade para compartilhar o trajeto via redes sociais ou contatos.
  * **Design Responsivo:** Interface otimizada para ser utilizada em dispositivos móveis.

## Como Rodar o Projeto

Este projeto é uma aplicação web estática e precisa ser executado através de um servidor local para que as funcionalidades de mapa e geolocalização funcionem corretamente.

1.  **Salve os Arquivos:** Certifique-se de que todos os arquivos HTML estão na mesma pasta:
      * `rotas1.html`
      * `rtas2.html`
      * `rotas3.html`
      * `rotas4.html`
      * `destino.html`
2.  **Inicie o Servidor:**
      * Abra o **Terminal** (Mac/Linux) ou **Prompt de Comando** (Windows).
      * Navegue até a pasta do projeto.
      * Execute o seguinte comando:
        ```bash
        python3 -m http.server
        ```
3.  **Acesse no Navegador:**
      * Abra seu navegador e acesse a URL:
        ```
        http://localhost:8000/rotas1.html
        ```

## Estrutura das Telas

  * **`rotas1.html`**: Tela inicial para inserção do destino e ajuste do pino no mapa.
  * **`rtas2.html`**: Tela de seleção de rota (segura, desvio por acidente ou desvio por árvore).
  * **`rotas3.html`**: Tela de exibição da rota segura, com opções para alterar o meio de transporte e iniciar o trajeto.
  * **`rotas4.html`**: Tela de compartilhamento da rota.
  * **`destino.html`**: Tela de confirmação de chegada ao destino.

## Tecnologias Utilizadas

  * **HTML5:** Estrutura da página.
  * **CSS3:** Estilização da interface.
  * **JavaScript:** Lógica de navegação, manipulação do mapa e chamadas de API.
  * **Leaflet.js:** Biblioteca de mapas interativos.
  * **OpenStreetMap:** Provedor de dados de mapa.
  * **OSRM (Open Source Routing Machine):** API de roteamento para cálculo de caminhos.
  * **Nominatim:** Serviço de geocodificação para converter endereços em coordenadas.