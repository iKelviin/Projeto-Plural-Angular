export interface ISidebarData {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: ISidebarData[];
}
