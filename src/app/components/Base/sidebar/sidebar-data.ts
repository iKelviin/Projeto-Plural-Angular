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
                  {
                    routeLink:'cadastros/checklist/tipo-peca',
                    //icon:'arrow_right',
                    label:'TESTE 1',
                    sublevel: 3,
                  },
                  {
                    routeLink:'cadastros/checklist/tipo-peca',
                    //icon:'arrow_right',
                    label:'TESTE 2',
                    sublevel: 3,
                  },
                  {
                    routeLink:'cadastros/checklist/tipo-peca',
                    //icon:'arrow_right',
                    label:'TESTE 3',
                    sublevel: 3,
                    items:[ {
                      routeLink:'cadastros/checklist/tipo-peca',
                      //icon:'arrow_right',
                      label:'FILHO 1',
                      sublevel: 3,
                    },
                    {
                      routeLink:'cadastros/checklist/tipo-peca',
                      //icon:'arrow_right',
                      label:'FILHO 2',
                      sublevel: 3,
                    },
                    {
                      routeLink:'cadastros/checklist/tipo-peca',
                      //icon:'arrow_right',
                      label:'FILHO 3',
                      sublevel: 3,
                      items:[
                        {
                          routeLink:'cadastros/checklist/tipo-peca',
                          //icon:'arrow_right',
                          label:'NETO 1',
                          sublevel: 3,
                        },
                        {
                          routeLink:'cadastros/checklist/tipo-peca',
                          //icon:'arrow_right',
                          label:'NETO 2',
                          sublevel: 3,
                        }
                      ]
                    }]
                  }
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
            },
            {
              routeLink: 'expedicao/ppcp',
              label: 'Consulta TESTE',
              sublevel: 2,
             
            },
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
              sublevel: 2,
              items:[
                {
                  routeLink: 'expedicao/ppcp',
                  label: 'Assim vai',
                  sublevel: 3
                }
              ]
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
      sublevel: 0
    }
    ,{
      routeLink: 'Atendimento',
      icon: 'perm_phone_msg',
      label: 'Atendimento',
      sublevel: 0
    }
    ,{
      routeLink: 'Comercial',
      icon: 'attach_money',
      label: 'Comercial',
      sublevel: 0
    }
    ,{
      routeLink: 'Qualidade',
      icon: 'playlist_add_check',
      label: 'Qualidade',
      sublevel: 0
    }
    ,{
      routeLink: 'Producao',
      icon: 'trending_up',
      label: 'Produção',
      sublevel: 0
    }
    ,{
      routeLink: 'PCP',
      icon: 'bar_chart',
      label: 'PCP',
      sublevel: 0
    }
    ,{
      routeLink: 'Consultas',
      icon: 'search',
      label: 'Consultas',
      sublevel: 0
    }
    ,{
      routeLink: 'Relatorios',
      icon: 'list_alt',
      label: 'Relatórios',
      sublevel: 0
    }
    ,{
      routeLink: 'Integracao',
      icon: 'device_hub',
      label: 'Integração',
      sublevel: 0
    }
    ,{
      routeLink: 'Almoxarifado',
      icon: 'shopping_cart',
      label: 'Almoxarifado',
      sublevel: 0
    }
    ,{
      routeLink: 'Seguranca',
      icon: 'security',
      label: 'Segurança',
      sublevel: 0
    }
    ,{
      routeLink: 'Anotacao',
      icon: 'note_add',
      label: 'Anotação',
      sublevel: 0
    }
];
