# Portfólio comercial — AM Consultoria / Alan Moreira

## Base e escopo

Implementado no repositório solicitado `alankardecm/site`, a partir de `f919138`.
O repositório tinha apenas uma página genérica de serviços. Para reaproveitar o trabalho anterior, foram lidos os arquivos atuais `index.html` e `docs/REFORMULACAO.md` do repositório público `alankardecm/portfolio`, commit `f42ca41` (reformulação de 29/09/2026). Esse portfólio não foi alterado.

Foram preservados os 14 projetos originais e acrescentado Postei como caso selecionado já descrito na seção de cases da fonte. Destaques: Hub NTT, KPI NOC Dashboard, Churn Prediction System, Pipeline ETL / DataLake e Postei. Apps pessoais e de saúde continuam no repertório, sem protagonismo na narrativa B2B.

Contato reutilizado da versão mais recente: WhatsApp +55 19 99548-3158 e comercial@amconsultoria.tech. Não há integração ao CRM ou envio automático: o visitante abre a conversa e envia sua mensagem.

## Hierarquia comercial

A página apresenta problema, contexto e execução antes de ferramentas. Cada destaque contém contexto, problema, abordagem, resultado documentado, investimento percebido para escopo semelhante, evidências pendentes, critérios de medição e contato contextualizado. Os demais projetos têm a mesma ficha, com campos a completar quando a fonte não oferece informação suficiente.

| Referência de nova proposta | Responsabilidade | Caso que ajuda a explicar a abordagem | Aceite proposto |
| --- | --- | --- | --- |
| R$ 10 mil | Processo delimitado / fundação de dados | Pipeline ETL / DataLake | Entradas e saídas validadas; execução documentada |
| R$ 20 mil | Indicadores, pipeline e rotina de gestão | KPI NOC Dashboard | Reconciliação com fontes; aprovação dos usuários |
| R$ 50 mil | Fluxo integrado ou piloto de IA/produto | Churn Prediction / Postei | Fluxo de ponta a ponta; avaliação do piloto |
| R$ 100 mil | Operação integrada em fases | Hub NTT | Marcos aceitos; monitoramento e passagem para a operação |

Esses valores são referências editoriais para novos escopos. Não são preços históricos, avaliações de mercado, contratos existentes ou pacotes fechados. Os requisitos de uma proposta futura não devem ser atribuídos a funcionalidades já entregues. Prazos e custos recorrentes dependem do diagnóstico. Não foi estimado ROI.

## Evidências e linguagem

A fonte é a descrição do portfólio, não uma auditoria de produção. A interface diz “entrega descrita” e mantém “estágio a confirmar”. Não atribui status de produção, acurácia, redução de churn, economia de horas ou crescimento de receita sem documentação.

Foi removida do texto importado a afirmação do TelecomAgent “Reduz análise de horas para minutos”, pois a fonte não apresenta período, método ou base de comparação. As descrições técnicas dos demais projetos permanecem como repertório declarado, não como prova de impacto comercial.

## Como completar os casos

Edite `src/projects.json`. O conteúdo é mantido separado da apresentação; não existe formulário que grave os campos em produção.

Para cada caso, substituir os campos pendentes somente com informação verificável:

- Contexto: segmento, período, dimensão relevante, situação inicial e envolvidos.
- Problema: gargalo observado, frequência, impacto e decisão a apoiar.
- Abordagem: entregas efetivas, sequência, fontes, dependências e tecnologias utilizadas.
- Papel de Alan: responsabilidade direta e contribuição dos demais profissionais.
- Estágio: produção, piloto ou desenvolvimento; data da confirmação.
- Resultado: distinguir entrega técnica de impacto no negócio.
- Evidência: screenshot autorizado, demonstração, documento de aceite ou relatório; fonte e autorização para divulgação.
- Medição: antes e depois, período, amostra/base, método e limitações. Não preencher com metas como se fossem resultados.
- Limites: fatores externos, restrições, dependências e responsabilidades do cliente.
- Investimento: manter o enquadramento de novos escopos separado de valores efetivamente contratados. Só divulgar contratos com autorização.

Modelo de medição: `[indicador] passou de [antes] para [depois] no período [ ], considerando [base], conforme [fonte] e [método]. Limites: [ ].`

## Validação

Build de produção com Vite aprovado. Verificação de conteúdo e interação em DOM simulado: montagem, âncoras, cinco casos, preservação dos 14 projetos, filtros, abas de investimento, navegação por teclado, campos de evidência e mensagens de contato.

A revisão visual desktop/celular e a verificação de overflow permanecem pendentes: o ambiente não tem Chromium instalado e a tentativa de download retornou um arquivo inválido. O CSS inclui layouts responsivos, mas isso não substitui a revisão visual em navegador real.

## Executar

```bash
npm ci
npm run build
npm run dev -- --host 127.0.0.1
```

Publicação não faz parte desta alteração. As mudanças são disponibilizadas em branch/PR para revisão, sem integrar `main` ou alterar os sites publicados.
