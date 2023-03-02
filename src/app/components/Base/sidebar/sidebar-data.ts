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
            icon: 'chat',
            label: 'Chat',
          },
          {
            routeLink: 'turno',
            icon: 'home',
            label: 'Passagem de turno'
          },
          {
              routeLink: 'profile',
              label: 'Perfil'
          }
        ]
    },
    {
        routeLink: 'turno',
        icon: 'supervisor_account',
        label: 'Passagem de Turno'
    },
    {
        routeLink: 'profile',
        icon: 'person',
        label: 'Perfil'
    }
];
