import { ISidebarData } from "./helper";

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
      routeLink: 'Acabamento',
      icon: 'import_contacts',
      label: 'Acabamento',
      sublevel: 0
    }
    ,{
      routeLink: 'Expedicao',
      icon: ' local_shipping',
      label: 'Expedição',
      sublevel: 0
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
