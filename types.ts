
export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}
