import { ISidebarData } from "./helper";
import { SublevelBarComponent } from "./sublevel-bar.component";

export const sidebarData: ISidebarData[] = [
    {
        routeLink: 'home',
        icon: 'home',
        label: 'Home',
        sublevel: 0
    },
    {
        routeLink: 'TI',
        icon: 'computer',
        label: 'T.I',
        sublevel: 0,
        items: [
          {
            routeLink: 'chat',
            //icon: 'arrow_right',
            label: 'Chat',
            sublevel: 1
          },
          {
            routeLink: 'turno',
            //icon: 'arrow_right',
            label: 'Passagem de turno',
            sublevel: 1
          },
          {
            routeLink: 'profile',
            //icon: 'arrow_right',
            label: 'Perfil',
            sublevel: 1
          }
        ]
    },
    {
      routeLink: 'Cadastros',
      icon: 'dvr',
      label: 'Cadastros',
      sublevel: 0,
      items: [
        {
          routeLink:'cadastros/estruturas',
          //icon:'arrow_right',
          label:'Cadastro de Estruturas',
          sublevel: 1
        },
        {
          routeLink:'cadastros/locais',
          //icon:'arrow_right',
          label:'Cadastro de Locais',
          sublevel: 1
        },
        {
          routeLink:'cadastros/estoque',
          //icon:'arrow_right',
          label:'Gerenciar Estoque',
          sublevel: 1
        },
        {
          routeLink:'cadastros/push-backs',
          //icon:'arrow_right',
          label:'Cadastro de Push Backs',
          sublevel: 1
        },
        {
          routeLink:'cadastros/grupo-ruas',
          //icon:'arrow_right',
          label:'Cadastro de Grupo de Ruas',
          sublevel: 1
        },
        {
          routeLink:'cadastros/recursos-ruas',
          //icon:'arrow_right',
          label:'Associar Recursos às Ruas',
          sublevel: 1
        },
        {
          routeLink:'cadastros/ruas',
          //icon:'arrow_right',
          label:'Inventário de Ruas',
          sublevel: 1
        },
        {
          routeLink:'cadastros/producao-prevista',
          //icon:'arrow_right',
          label:'Produção Prevista',
          sublevel: 1
        },
        {
          routeLink:'cadastros/ruas-maquinas',
          //icon:'arrow_right',
          label:'Ruas x Maquinas',
          sublevel: 1
        },
        {
          routeLink:'cadastros/liberar-etiq-ativ',
          //icon:'arrow_right',
          label:'Liberar Etiquetas Para Atividade',
          sublevel: 1
        },
        {
          routeLink:'cadastros/checklist',
          //icon:'arrow_right',
          label:'Configuração Checklist',
          sublevel: 1,
          items:[
              {
                routeLink:'cadastros/checklist/requisicao',
                //icon:'arrow_right',
                label:'Cadastro Formulário Requisição',
                sublevel: 2
              },
              {
                routeLink:'cadastros/checklist/recondicionados',
                //icon:'arrow_right',
                label:'Checklist Recondicionados',
                sublevel: 2,
                items: [
                  {
                    routeLink:'cadastros/checklist/tipo-peca',
                    //icon:'arrow_right',
                    label:'Cadastro Tipo Peça',
                    sublevel: 3,
                  },
                ]
              },
              {
                routeLink:'cadastros/checklist-sensores',
                //icon:'arrow_right',
                label:'Checklist Sensores',
                sublevel: 2,
                items: [
                  {
                    routeLink:'cadastros/checklist-sensores/config',
                    //icon:'arrow_right',
                    label:'Checklist Sensor Configuração',
                    sublevel: 3

                  }
                ]
              }
          ]
        },
      ]
    },
    {
      routeLink: 'impressao',
      icon: ' format_color_fill',
      label: 'Impressão',
      sublevel: 0,
      items: [
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Pallets de Impressão',
          sublevel: 1
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Entrada de Pallets',
          sublevel: 1
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Pallets de Desperdício',
          sublevel: 1
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Ocorrências de produção',
          sublevel: 1
        },
      ]
    }
    ,{
      routeLink: 'acabamento',
      icon: 'import_contacts',
      label: 'Acabamento',
      sublevel: 0,
      items:[
        {
          routeLink: 'acabamento/pallets',
          label: 'Pallets de Acabamento',
          sublevel: 1
        },
        {
          routeLink: 'acabamento/pallets',
          label: 'Entrada de Pallets',
          sublevel: 1
        },
        {
          routeLink: 'acabamento/pallets',
          label: 'Pallets de Desperdício',
          sublevel: 1
        },
        {
          routeLink: 'acabamento/pallets',
          label: 'Ocorrências de produção',
          sublevel: 1
        },
      ]
    }
    ,{
      routeLink: 'expedicao',
      icon: ' local_shipping',
      label: 'Expedição',
      sublevel: 0,
      items:[
        {
          routeLink: 'expedicao/ppcp',
          label: 'Programação do PCP',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Gerenciamento de Repartes',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Recevimento de Materiais',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Quebra de Pallets Expedição',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de Expedição',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Sinalizador de Paletização',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Sinalizador de Requisição',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Pallets de OP encerradas (Exped)',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Programação da Expedição',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Transportadoras',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Clientes',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Cadastro de Tipos de Veiculo',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Cadastro de tabela de frete',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Cadastro de Veiculos',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Cadastro de Motoristas',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta Solicitação de Transporte',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta Op Encerradas',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta Pallets OPs Encerradas',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta Estoque',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Autoriza Recebimento',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Contratos Correios',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta de Vinculos de Solicitação de Transp.',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Histórico de Expedição',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Manuseio',
          sublevel: 1,
          items:[
            {
              routeLink: 'expedicao/ppcp',
              label: 'Consulta Manuseios',
              sublevel: 2
            }
          ]
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Frete',
          sublevel: 1,
          items:[
            {
              routeLink: 'expedicao/ppcp',
              label: 'Cadastro de Rotas',
              sublevel: 2,
              items:[]
            },
            {
              routeLink: 'expedicao/ppcp',
              label: 'Cadastro Frete Viagem',
              sublevel: 2,
              items:[]
              
            },
            {
              routeLink: 'expedicao/ppcp',
              label: 'Fechamento Frete',
              sublevel: 2             
            },
            {
              routeLink: 'expedicao/ppcp',
              label: 'Verba Disponivel Frete',
              sublevel: 2
            }
          ]
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Monitoramento Fiscal',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Consulta Milheiro',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de LeadTime',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de LeadTime Analitico',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de Ocup. Carga de Veiculos',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de Desempenho',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Relatório de Programação Diária',
          sublevel: 1
        },
        {
          routeLink: 'expedicao/ppcp',
          label: 'Expedição com RFID',
          sublevel: 1
        },
      ]
    }
    ,{
      routeLink: 'Portaria',
      icon: 'person_outline',
      label: 'Portaria',
      sublevel: 0,
      items:[
        {
          routeLink: 'portaria/pager',
          label:'Controle de Pager',
          sublevel: 1
        }
      ]
    }
    ,{
      routeLink: 'Atendimento',
      icon: 'perm_phone_msg',
      label: 'Atendimento',
      sublevel: 0,
      items:[
        {
          routeLink:'atendimento/',
          label:'Autorização de Descarte de Pallet',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Cadastro de Materiais a Receber',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Consulta de Saídas da Expedição',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Consulta de Materiais de Terceiro',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Cadastro de Sequência de Acabamento',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Importar Reparte Personalizado',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Gerenciamento de Repartes',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Reprogramação de Repartes',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Cadastro de OPs para Clientes Estoque',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Cadastro de Controle externo para expedição',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Ocorrências de Produção',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Recebimento Repartes VIA ATC',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Publicação de OP de Acabamento',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Solicitação de Prova de Cor',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Pesquisa de Cliente - EMS',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Consulta Verba - Envio de Plotter',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'De para Caderno',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Lista de Fechamento de OPs por Data',
          sublevel: 1
        },
        {
          routeLink:'atendimento/',
          label:'Follow UP Completo',
          sublevel: 1
        },
      ]
    }
    ,{
      routeLink: 'Comercial',
      icon: 'attach_money',
      label: 'Comercial',
      sublevel: 0,
      items:[
        {
          routeLink:'comercial/',
          label:'Vincular OP x Orçamento',
          sublevel: 1
        }
      ]
    }
    ,{
      routeLink: 'Qualidade',
      icon: 'playlist_add_check',
      label: 'Qualidade',
      sublevel: 0,
      items:[
        {
          routeLink:'qualidade/Cadastro',
          label:'Cadastro',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/cadastro',
              label:'Gerenciamento de Perguntas',
              sublevel: 1,
            },
            {
              routeLink:'qualidade/cadastro',
              label:'Problemas de Produção',
              sublevel: 1
            },
            {
              routeLink:'qualidade/cadastro',
              label:'Cadastro Fornecedores',
              sublevel: 1
            },
            {
              routeLink:'qualidade/cadastro',
              label:'Cadastro de Causa Raiz',
              sublevel: 1
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'RNC / Ações Corretivas',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/',
              label:'RNC',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Painel Qualidade',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Relatório de Cliente/Maquina',
              sublevel: 2,
            },
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Relatórios',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/',
              label:'Qualidade Relatórios',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Acompanhamento',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Acompanhamento por Usuário',
              sublevel: 2,
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Alertas',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/Alertas',
              label:'Gerenciar Alertas',
              sublevel: 2
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Acompanhamento',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/acompanhamento',
              label:'Programação',
              sublevel:2
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Programação de Especiais',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/',
              label:'Programação de Especiais',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Relatório Entrega Especiais',
              sublevel: 2,
            },
            {
              routeLink:'qualidade/',
              label:'Relatório Pendencias Especiais',
              sublevel: 2,
            },
          ]
        },
        {
          routeLink:'qualidade/',
          label:'FSC',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/',
              label:'Emissão de NF',
              sublevel: 2
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Premiações',
          sublevel: 1,
          items:[
            {
              routeLink:'qualidade/',
              label:'Cadastro de Premiações',
              sublevel:2
            },
            {
              routeLink:'qualidade/',
              label:'Cadastro de Categorias',
              sublevel:2
            },
            {
              routeLink:'qualidade/',
              label:'Controle de Premiações',
              sublevel:2
            }
          ]
        },
        {
          routeLink:'qualidade/',
          label:'Recebimento Especiais Diretoria',
          sublevel: 1
        },
        {
          routeLink:'qualidade/',
          label:'Controle de Produto FSC',
          sublevel: 1
        },
        {
          routeLink:'qualidade/',
          label:'Inspetor X Máquinas',
          sublevel: 1
        },
        {
          routeLink:'qualidade/',
          label:'Gerenciar Pallets Quarentena (Revisão)',
          sublevel: 1
        }
      ]
    }
    ,{
      routeLink: 'Producao',
      icon: 'trending_up',
      label: 'Produção',
      sublevel: 0,
      items:[
        {
          routeLink:'Producao/',
          label:'Cadastro de Código de Rolaria',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Requisição de Troca de Rolaria',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Consulta Requisição de Troca de Rolaria',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Publicar Programa de Produção e K16',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Publicar Performance K16',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Lista de Fechamento de OPs por Data',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Follow UP Completo',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Consulta Verba - Terceiros',
          sublevel: 1
        },
        {
          routeLink:'Producao/',
          label:'Relatórios',
          sublevel: 1,
          items:[
            {
              routeLink:'Producao/',
              label:'Detalhado por Máquina (saída)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Detalhado por Máquina (entrada)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Consumo de Rolos (mensal e por grupo)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Análise por Tipo de Rolo (por grupo)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Análise por fornecedor (geral e por grupo)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Análise por Ocorrência (geral e por grupo)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Análise Ocorrência por Fornecedor (geral e por grupo)',
              sublevel: 2
            },
            {
              routeLink:'Producao/',
              label:'Mapa de Máquina',
              sublevel: 2
            },
          ]
        },
        {
          routeLink:'Producao/',
          label:'Requisição de Peças',
          sublevel: 1,
          items:[
            {
              routeLink:'Producao/',
              label:'Máquina',
              sublevel: 2,
              items:[
                {
                  routeLink:'Producao/',
                  label:'Requisição Peça Máquina',
                  sublevel: 3,
                },
                {
                  routeLink:'Producao/',
                  label:'Requisição Peça Máquina Aprovação',
                  sublevel: 3,
                }
              ]
            },
            {
              routeLink:'Producao/',
              label:'Almoxarifado',
              sublevel: 2,
              items:[
                {
                  routeLink:'Producao/',
                  label:'Fila Requisições Almox.',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Envio de Peça para Reparação',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Recebimento de Peça Recondicionada',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Recebimento de Peça Nova',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Requisições com Questionário Pendente',
                  sublevel: 3,  
                }
              ]
            },
            {
              routeLink:'Producao/',
              label:'Configuração',
              sublevel: 2,
              items:[
                {
                  routeLink:'Producao/',
                  label:'Cadastro Tipo de Peça',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Cadastro de Perguntas',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Configuração Tipo Peça X Perguntas',
                  sublevel: 3,  
                }
              ]
            },
            {
              routeLink:'Producao/',
              label:'Relatórios',
              sublevel: 2,
              items:[
                {
                  routeLink:'Producao/',
                  label:'Inventário de Peças',
                  sublevel: 3,  
                },
                {
                  routeLink:'Producao/',
                  label:'Histórico de Peça',
                  sublevel: 3,  
                }
              ]
            }
          ]
        },
        {
          routeLink:'Producao/',
          label:'Cadastro de Procedimentos de Manutenção',
          sublevel: 1
        },
      ]
    }
    ,{
      routeLink: 'PCP',
      icon: 'bar_chart',
      label: 'PCP',
      sublevel: 0,
      items:[
        {
          routeLink: 'PCP/',
          label: 'Terceirização',
          sublevel: 1,
          items:[
            {
              routeLink: 'PCP/',
              label: 'Cadastro de Terceiros',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Cadastro de Tipos de Serviços',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Porgramação Terceirização',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Autorização de Serviço Externo',
              sublevel: 2,
            }
          ]
        },
        {
          routeLink: 'PCP/',
          label: 'Importar e Exportar Preço Papel',
          sublevel: 1,
        },
        {
          routeLink: 'PCP/',
          label: 'Planejamento',
          sublevel: 1,
          items:[
            {
              routeLink: 'PCP/',
              label: 'Cadastro de Grupo de Máquinas',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Cadastro de Máquinas',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Dia',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Feriado',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Calendário',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Departamento',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Mês',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Grupo Relatório',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Tipo Controle',
              sublevel: 2,
            },
            {
              routeLink: 'PCP/',
              label: 'Planejamento',
              sublevel: 2,
            }
          ]
        }
      ]
    }
    ,{
      routeLink: 'Consultas',
      icon: 'search',
      label: 'Consultas',
      sublevel: 0,
      items:[
        {
          routeLink: 'Consultas',
          label: 'Histórico da OP',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Meta da Produção',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Consulta da OP (Geral)',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Consulta da OP (Impressão)',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Consulta da OP (Acabamento)',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Rastreabilidade de Pallets',
          sublevel: 1,
        },
        {
          routeLink: 'Consultas',
          label: 'Gestão de Tripulação',
          sublevel: 1,
          items:[
            {
              routeLink: 'Consultas',
              label: 'Controle de Pessoas',
              sublevel: 2,
            },
            {
              routeLink: 'Consultas',
              label: 'DDS',
              sublevel: 2,
            },
            {
              routeLink: 'Consultas',
              label: 'Manutenção da Tripulação',
              sublevel: 2,
            },
            {
              routeLink: 'Consultas',
              label: 'Controle de Presença',
              sublevel: 2,
              items:[
                {
                  routeLink: 'Consultas',
                  label: 'Chamada da Tripulação',
                  sublevel: 3,
                },
                {
                  routeLink: 'Consultas',
                  label: 'Justificativas de Faltas',
                  sublevel: 3,
                },
                {
                  routeLink: 'Consultas',
                  label: 'Relatório de Ciência',
                  sublevel: 3,
                }
              ]
            },
            {
              routeLink: 'Consultas',
              label: 'Relatórios',
              sublevel: 2,
              items:[
                {
                  routeLink: 'Consultas',
                  label: 'Relatório de Controle de Pessoas',
                  sublevel: 3,
                },
                {
                  routeLink: 'Consultas',
                  label: 'Relatório de Quadro da Tripulação',
                  sublevel: 3,
                }
              ]
            }
          ]
        }
      ]
    }
    ,{
      routeLink: 'Relatorios',
      icon: 'list_alt',
      label: 'Relatórios',
      sublevel: 0,
      items:[
        {
          routeLink: 'Relatorios',
          label: 'Estruturas',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Situação de Ruas',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Situação do Estoque',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Posição Push Back',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Grupos de Estoque',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Ruas sem Movimentação',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Estoque de Pallets (Por Cliente)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Consultar Pallets de Descarte',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Inventários',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Leituras por Operador',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Sugestão de Leituras por Operador',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Manuseio Ativo',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Controle de Leitura de Expedição',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Pallets por Tempo de Estoque',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Expedição Diária',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Histório da OP',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Pallets Por Dia',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Descarte de Pallets',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Pallets Diversos',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Veículos Por Dia',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Veículos Por Turno',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Frete (Período)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Verba de Frete (Período)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Exp. Diária X Transportadora',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'OP Expedidas X Encerramento (Metrics)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Relatório de Alertas',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Plano de Repartes',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Plano de Repartes (Hora)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Devoluções por Período',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Manuseio e Retornos',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Recebimentos',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Velocidade Média (Acabamento)',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Tempo de Abastecimento',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'LeadTime Acabamento',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Pendências de OP',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Satisfação de Clientes',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Premiações',
          sublevel: 1,
        },
        {
          routeLink: 'Relatorios',
          label: 'Relatório de Plano de Ação das Ocorrencias de Produção',
          sublevel: 1,
        },
      ]
    }
    ,{
      routeLink: 'Integracao',
      icon: 'device_hub',
      label: 'Integração',
      sublevel: 0,
      items:[
        {
          routeLink: 'Integracao',
          label: 'LogHaus',
          sublevel: 1,
        },
        {
          routeLink: 'Integracao',
          label: 'Importação',
          sublevel: 1,
        },
        {
          routeLink: 'Integracao',
          label: 'Coleta NFs LogHaus',
          sublevel: 1,
        },
        {
          routeLink: 'Integracao',
          label: 'Porta Bobinas MCI',
          sublevel: 0,
        }
      ]
    }
    ,{
      routeLink: 'Almoxarifado',
      icon: 'shopping_cart',
      label: 'Almoxarifado',
      sublevel: 0,
      items:[
        {
          routeLink: 'Almoxarifado',
          label: 'Movimentação Pallet Semi Acabado INEP',
          sublevel: 1,
        },
        {
          routeLink: 'Almoxarifado',
          label: 'Plano de Consumo Polietileno',
          sublevel: 1,
        },
        {
          routeLink: 'Almoxarifado',
          label: 'Plano de Consumo Discovery',
          sublevel: 1,
        },
        {
          routeLink: 'Almoxarifado',
          label: 'Discovery',
          sublevel: 1,
        },
        {
          routeLink: 'Almoxarifado',
          label: 'Relatório Discovery',
          sublevel: 1,
        },
        {
          routeLink: 'Almoxarifado',
          label: 'Relatório de Movimentação de Discovery',
          sublevel: 1,
        }
      ]
    }
    ,{
      routeLink: 'Seguranca',
      icon: 'security',
      label: 'Segurança',
      sublevel: 0,
      items:[
        {
          routeLink: 'Seguranca',
          label: 'Parâmetros do Sistema',
          sublevel: 1,
        },
        {
          routeLink: 'Seguranca',
          label: 'Direitos de Acessos',
          sublevel: 1,
        },
        {
          routeLink: 'Seguranca',
          label: 'Cadastro de Usuários Externos',
          sublevel: 1,
        },
        {
          routeLink: 'Seguranca',
          label: 'Parâmetros de Serviços do Acabamento',
          sublevel: 1,
        }
      ]
    }
    ,{
      routeLink: 'Anotacao',
      icon: 'note_add',
      label: 'Anotação',
      sublevel: 0,
      items:[
        {
          routeLink: 'Anotacao',
          label: 'Anotações dos Operadores',
          sublevel: 1,
        },
        {
          routeLink: 'Anotacao',
          label: 'Anotações dos Líderes',
          sublevel: 1,
        }
      ]
    }
];
