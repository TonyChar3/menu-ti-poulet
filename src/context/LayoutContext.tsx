import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import { Menu } from "@/types/MenuItem";

type LayoutContextType = {
  welcomePageOverlay: boolean;
  toggleWelcomePageOverlay: () => void;
  setWelcomePageOverlay: (value: boolean) => void;
  menu_data: Menu | null;
  setMenuData: React.Dispatch<React.SetStateAction<Menu | null>>;
  select_category: string;
  setSelectCategory: (value: string) => void;
  main_page_layout: boolean;
  setMainPageLayout: (value: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

type LayoutProviderProps = {
  children: ReactNode;
};

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [welcomePageOverlay, setWelcomePageOverlay] = useState(false);
  const [menu_data, setMenuData] = useState<Menu | null>(null);
  const [select_category, setSelectCategory] = useState("");
  const [main_page_layout, setMainPageLayout] = useState(false);

  const toggleWelcomePageOverlay = useCallback(() => {
    setWelcomePageOverlay((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log("welcomePageOverlay changed:", welcomePageOverlay);
  }, [welcomePageOverlay]);

  const value: LayoutContextType = {
    welcomePageOverlay,
    toggleWelcomePageOverlay,
    setWelcomePageOverlay,
    menu_data,
    setMenuData,
    select_category,
    setSelectCategory,
    main_page_layout,
    setMainPageLayout,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
