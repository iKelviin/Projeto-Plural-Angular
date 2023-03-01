import { ISidebarData } from "./helper";

export const sidebarData: ISidebarData[] = [
    {
        routeLink: 'home',
        icon: 'home',
        label: 'Home'
    },
    {
        routeLink: 'chat',
        icon: 'chat',
        label: 'Chat',
        items: [
          {
            routeLink: 'chat',
            icon: 'chat',
            label: 'Chat',
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
