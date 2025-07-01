import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import { Menu } from "@/types/MenuItem";

type LayoutContextType = {
  welcomePageOverlay: boolean;
  toggleWelcomePageOverlay: () => void;
  toggleInfoScheduleMobileModal: () => void;
  setWelcomePageOverlay: (value: boolean) => void;
  menu_data: Menu | null;
  setMenuData: React.Dispatch<React.SetStateAction<Menu | null>>;
  select_category: string;
  setSelectCategory: (value: string) => void;
  main_page_layout: boolean;
  setMainPageLayout: (value: boolean) => void;
  scroll_extended: boolean;
  setScrollExtended: (value: boolean) => void;
  modal_state: boolean;
  setModalState: (value: boolean) => void;
  modal_mode: string;
  setModalMode: (value: string) => void;
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
  const [scroll_extended, setScrollExtended] = useState(false);
  const [modal_state, setModalState] = useState(false);
  const [modal_mode, setModalMode] = useState("");

  const toggleWelcomePageOverlay = useCallback(() => {
    setWelcomePageOverlay((prev) => !prev);
  }, []);

  const toggleInfoScheduleMobileModal = useCallback(() => {
    setModalState((prev) => !prev);
  }, []);

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
    scroll_extended,
    setScrollExtended,
    modal_mode,
    setModalMode,
    setModalState,
    modal_state,
    toggleInfoScheduleMobileModal,
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
