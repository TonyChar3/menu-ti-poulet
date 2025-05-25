// /src/types/MenuItem.ts

export interface Color {
  id: number;
  menu_id: string;
  hex_code: string;
  rgba: string | null;
  created_at: string;
  updated_at: string;
}

export interface FilterOptions {
  id: number;
  menu_id: string;
  a_z_desc: number;
  a_z_asc: number;
  special_category: number;
  created_at: string;
  updated_at: string;
}

export interface MobileLayout {
  id: number;
  menu_id: string;
  main_page: number;
  hamburger_navigation: number;
  created_at: string;
  updated_at: string;
}

export interface LogoLayout {
  id: number;
  menu_id: string;
  no_name: number;
  center_layout: number;
  left_layout: number;
  right_layout: number;
  show_contact_info: number;
  show_schedule: number;
  created_at: string;
  updated_at: string;
}

export interface PlateCardLayout {
  id: number;
  menu_id: string;
  show_image: number;
  show_description: number;
  show_prices: number;
  show_diet_tags: number;
  show_add_ons: number;
  created_at: string;
  updated_at: string;
}

export interface Menu {
  id: string;
  owner_id: number;
  name: string;
  is_public: number;
  created_at: string;
  updated_at: string;
  colors: Color[];
  plates_categories: []; // Define a type if you have plate categories structure
  filter_options: FilterOptions;
  mobile_layout: MobileLayout;
  logo_layout: LogoLayout;
  plate_card_layout: PlateCardLayout[];
}

export interface MenuResponse {
  status: boolean;
  menu: Menu;
}
