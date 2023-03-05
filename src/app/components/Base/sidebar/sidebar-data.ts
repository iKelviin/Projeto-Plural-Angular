import { ISidebarData } from "./helper";

export const sidebarData: ISidebarData[] = [
    {
        routeLink: 'home',
        icon: 'home',
        label: 'Home'
    },
    {
        routeLink: 'TI',
        icon: 'computer',
        label: 'T.I',
        items: [
          {
            routeLink: 'chat',
            //icon: 'arrow_right',
            label: 'Chat',
          },
          {
            routeLink: 'turno',
            //icon: 'arrow_right',
            label: 'Passagem de turno'
          },
          {
            routeLink: 'profile',
            //icon: 'arrow_right',
            label: 'Perfil'
          }
        ]
    },
    {
      routeLink: 'Cadastros',
      icon: 'dvr',
      label: 'Cadastros',
      items: [
        {
          routeLink:'cadastros/estruturas',
          //icon:'arrow_right',
          label:'Cadastro de Estruturas'
        },
        {
          routeLink:'cadastros/locais',
          //icon:'arrow_right',
          label:'Cadastro de Locais'
        },
        {
          routeLink:'cadastros/estoque',
          //icon:'arrow_right',
          label:'Gerenciar Estoque'
        },
        {
          routeLink:'cadastros/push-backs',
          //icon:'arrow_right',
          label:'Cadastro de Push Backs'
        },
        {
          routeLink:'cadastros/grupo-ruas',
          //icon:'arrow_right',
          label:'Cadastro de Grupo de Ruas'
        },
        {
          routeLink:'cadastros/recursos-ruas',
          //icon:'arrow_right',
          label:'Associar Recursos às Ruas'
        },
        {
          routeLink:'cadastros/ruas',
          //icon:'arrow_right',
          label:'Inventário de Ruas'
        },
        {
          routeLink:'cadastros/producao-prevista',
          //icon:'arrow_right',
          label:'Produção Prevista'
        },
        {
          routeLink:'cadastros/ruas-maquinas',
          //icon:'arrow_right',
          label:'Ruas x Maquinas'
        },
        {
          routeLink:'cadastros/liberar-etiq-ativ',
          //icon:'arrow_right',
          label:'Liberar Etiquetas Para Atividade'
        },
        {
          routeLink:'cadastros/checklist',
          //icon:'arrow_right',
          label:'Configuração Checklist',
          items:[
              {
                routeLink:'cadastros/checklist/requisicao',
                //icon:'arrow_right',
                label:'Cadastro Formulário Requisição'
              },
              {
                routeLink:'cadastros/checklist/recondicionados',
                //icon:'arrow_right',
                label:'Checklist Recondicionados',
                items: [
                  {
                    routeLink:'cadastros/checklist/tipo-peca',
                    //icon:'arrow_right',
                    label:'Cadastro Tipo Peça',
                  }
                ]
              },
              {
                routeLink:'cadastros/checklist-sensores',
                //icon:'arrow_right',
                label:'Checklist Sensores',
                items: [
                  {
                    routeLink:'cadastros/checklist-sensores/config',
                    //icon:'arrow_right',
                    label:'Checklist Sensor Configuração'
                    
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
      items: [
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Pallets de Impressão',
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Entrada de Pallets',
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Pallets de Desperdício',
        },
        {
          routeLink: 'impressao/pallets',
          //icon: 'arrow_right',
          label: 'Ocorrências de produção',
        },
      ]
    }
    ,{
      routeLink: 'Acabamento',
      icon: 'import_contacts',
      label: 'Acabamento'
    }
    ,{
      routeLink: 'Expedicao',
      icon: ' local_shipping',
      label: 'Expedição'
    }
    ,{
      routeLink: 'Portaria',
      icon: 'person_outline',
      label: 'Portaria'
    }
    ,{
      routeLink: 'Atendimento',
      icon: 'perm_phone_msg',
      label: 'Atendimento'
    }
    ,{
      routeLink: 'Comercial',
      icon: 'attach_money',
      label: 'Comercial'
    }
    ,{
      routeLink: 'Qualidade',
      icon: 'playlist_add_check',
      label: 'Qualidade'
    }
    ,{
      routeLink: 'Producao',
      icon: 'trending_up',
      label: 'Produção'
    }
    ,{
      routeLink: 'PCP',
      icon: 'bar_chart',
      label: 'PCP'
    }
    ,{
      routeLink: 'Consultas',
      icon: 'search',
      label: 'Consultas'
    }
    ,{
      routeLink: 'Relatorios',
      icon: 'list_alt',
      label: 'Relatórios'
    }
    ,{
      routeLink: 'Integracao',
      icon: 'device_hub',
      label: 'Integração'
    }
    ,{
      routeLink: 'Almoxarifado',
      icon: 'shopping_cart',
      label: 'Almoxarifado'
    }
    ,{
      routeLink: 'Seguranca',
      icon: 'security',
      label: 'Segurança'
    }
    ,{
      routeLink: 'Anotacao',
      icon: 'note_add',
      label: 'Anotação'
    }
];
