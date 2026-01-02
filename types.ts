export interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface OrganizationMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
}