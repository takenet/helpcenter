---
id: information-security-document
title: Informativo Público de Segurança da Informação
sidebar_label: Segurança da Informação
---
Última atualização em setembro de 2020

## 1. Missão e Responsabilidades

### 1.1 Missão

Garantir a disponibilidade, integridade e confidencialidade da informação.

### 1.2 Responsabilidades do times

As responsabilidades dos times de segurança são assim distribuídos, mas não limitados, aos seguintes temas:

* Security Operations Center (SOC)
* Security Governance
* Segurança de aplicações
* Segurança de nuvem
* Testes de penetração
* Investigações de incidentes
* Controle de acesso e identidades
* Privacidade e proteção dos dados
* Compliance e auditoria de segurança
* Gestão de incidentes de segurança
* Avaliação de risco
* Direcionamento de boas práticas de segurança

## 2. Segurança BLiP

### 2.1 Análise de código estática SAST

Todo pipeline de compilação passa por análise estática de código. Com esta ferramenta são avaliadas categorias de defeitos de software, entre eles: code smells, vulnerabilidades, e security hotspots.

### 2.2 Análise SCA - Software Composition Analysis

É realizada a verificação de software componente, bibliotecas, e busca de vulnerabilidades.

### 2.3 Análise e Aprovação de Pull Request

As equipes de desenvolvimento ao finalizar codificações, sejam de novas implementações ou correção de defeitos de software, fazem o commit do código e enviam pull requests, que são avaliados pelo tech lead de sua squad.

### 2.4 Guarda de código fonte

Os códigos fontes são armazenados em repositório Git privado, com acesso autorizado utilizando autenticação integrada.

### 2.5 Segregação de ambientes

Existe a separação dos ambientes de desenvolvimento, homologação e produção, cada um com suas respectivas permissões de acesso. O ambiente produtivo segue o conceito do mínimo privilégio.

### 2.6 Criptografia de dados em trânsito

Os dados em trânsito em toda a plataforma utilizam por padrão TLS 1.2 em sua comunicação HTTP. As conexões com os bancos também possuem criptografia em trânsito.

### 2.7 Gestão de segredos

Informações sensíveis de aplicativos como chaves de API e senhas de bancos de dados são armazenadas em cofre de senha com log de atividade e acesso restrito de rede. O cofre do ambiente de produção segue o privilégio mínimo conforme descrito no item 3.1.

### 2.8 Troca de arquivos no BLiP

As mídias que trafegam no BLiP são submetidas à análise de antivírus e não podem ultrapassar 20 megabytes. Alguns tipos de arquivos potencialmente maliciosos, como executáveis e bibliotecas também são bloqueados.

### 2.9 Execução de pentest

A Take realiza a cada seis meses a contratação de empresa terceirizada para execução independente de pentest do tipo gray box da aplicação BLiP. As cartas de comprovação podem ser solicitadas ao time de Segurança da Informação da Take.

## 3. Segurança em nuvem

### 3.1 Privilégio mínimo

Os acessos ao ambiente em nuvem exigem por padrão segundo fator de autenticação. Dados considerados sensíveis dependem de acesso por VPN para acesso ou que o computador esteja fisicamente nas redes internas da Take.

As assinaturas de produção possuem acesso restrito, somente tech leads acessam dados e ativos, ressalvado que dados de auditorias como logs de acesso permanecem restritos aos times de infraestrutura e segurança.

### 3.2 Logs de Ações e Atividades

São mantidos logs de ações e atividades como modificação de configurações, criação e exclusão de ativos das assinaturas de produção para permitir auditorias e investigações sempre que necessário.

### 3.3 Monitoramento

Existe monitoramento de ações por meio de dashboard onde são inspecionadas o compliance do ambiente com relação às políticas de segurança em vigor. As políticas são aplicadas por enforcement sempre que possível.

### 3.4 Certificações de segurança

Os ambientes de nuvem utilizados pela Take na prestação de serviço atende aos mais rígidos requisitos de segurança, os quais são auditados e certificados.

## 4. Segurança dos Dados

### 4.1 Criptografia

Os bancos de dados relacionais estão todos criptografados em disco e em trânsito.

### 4.2 Anonimização

As informações são anonimizadas sempre que possível em respeito à privacidade. A anonimização, quando necessária, é realizada em razão de mapeamento dos dados sensíveis existentes nas bases relacionais.

### 4.3 Logs de acesso e registro de modificações

São mantidos logs de acesso e alterações de registros para fins auditoria quando necessário de todos os bancos de dados relacionais de produção. Os logs são mantidos por cinco anos.

### 4.4 Backups

Os backups de bancos de dados relacionais de produção são realizados automaticamente todos os dias com retenção de sete dias.

### 4.5 Localização dos Dados

Os bancos de dados e arquivos de mídia são armazenados em nuvem em datacenters localizados no Brasil.

## 5. Segurança das estações de trabalho

### 5.1 Antivírus

Os computadores da Take possuem instalado por padrão sistema de antivírus com gerência controlada por administração remota.

### 5.2 Instalação de software

Aos colaboradores da Take não é permitida a instalação de software sem o conhecimento da equipe da Segurança da Informação. Existe inventário de software instalado.

## 6. Canal Whatsapp

### 6.1 Comunicação BLiP e Whatsapp

Cada número do Whatsapp representa um container na infraestrutura do BLiP, cada um desses containers possui uma criptografia própria, tal qual um aparelho de celular com um número ativado.

Dessa forma a Take não possui acesso a nenhum conteúdo de texto ou de mídia, armazenados em cada container ativo no canal Whatsapp.

## 7. Redes

### 7.1 Firewall

As redes da operação em nuvem do BLiP possui firewalls nas bordas que podem executar o bloqueio em razão do risco que representam à plataforma.

### 7.2 Reputação de IPs

Análise de reputação de IPs são realizadas em cada request recebido pela plataforma, de maneira que uma requisição poderá ser bloqueada em razão dessa condição.

### 7.3 Segregação das redes

As redes de produção, homologação e testes são segregadas e não possuem comunicação entre si.

## 8. Iniciativas by-design

### 8.1 Segurança by-design

Durante a fase de refinamento do desenvolvimento o time de SI participa como consultores de segurança, buscando adequar cada nova implementação em padrões de segurança mais adequados. Sempre que possível é utilizado o framework OWASP Threat Modeling.

### 8.2 Privacidade by-design

Durante a fase de refinamento dos times de desenvolvimento o time de SI conduz avaliações no impacto à privacidade dos dados inseridos no projeto. Os times possuem autonomia para requisitar avaliações de privacidade sempre que necessário.

## 9. Conscientização

### 9.1 Processo de onboarding

Novos funcionários são treinados pelo time de Segurança da Informação antes de iniciarem suas atividades. Nessa oportunidade os tópicos da Política da Segurança da Informação (PSI) são apresentados.

### 9.2 Treinamentos

Os times recebem rotineiramente do time de Segurança da Informação treinamentos a respeito de temas ligados à segurança e privacidade em linha com a execução de suas atividades.

### 9.3 Comunicação

O time de Segurança da Informação utiliza os canais de comunicação interna da Take para manter todos os colaboradores informados sobre os temas relacionados à segurança buscando a conscientização e que se mantenham atualizados a respeito da Política da Segurança da Informação (PSI).

### 9.4 Comitê de Segurança da Informação

Existe um comitê de Segurança da Informação com a participação de pessoas de diversos setores e responsabilidades da Take. O objetivo é a realização de treinamentos com o foco na identificação de necessidades de segurança, para uma ação proativa, no que tange os possíveis riscos aos projetos de segurança nos times internos.

## 10. Links Úteis
Links de informações complementares sobre o BLiP.

* Help Center BLiP

https://help.blip.ai/

* API Reference

https://docs.blip.ai/

* Políticas do BLiP (Cookies - Privacidade - Termos de Uso)

https://help.blip.ai/security/

* Página de Status do BLiP (Disponibilidade e histórico de incidentes)

https://status.blip.ai/

* Changelog do BLiP

http://help.blip.ai/changelog/

## 11. Contatos
O time de Segurança da Informação da Take está à disposição para esclarecimentos por meio do endereço eletrônico: si@take.net 

A Take conta com um Data Protection Officer (DPO) para apoio nos direcionamentos ligados à privacidade dos dados. Questões relacionadas à privacidade dos dados podem ser encaminhadas ao endereço eletrônico: legal@blip.ai 
