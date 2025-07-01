import React from "react";
import { CircleX } from "lucide-react";
import { useLayout } from "@/context/LayoutContext";
import { ConstantsVariables } from "@/helpers/ConstantsVariables";

import ModalInfoLayoutComponent from "@/components/layout/modals/ModalInfoLayoutComponent";
import ModalScheduleLayoutComponent from "@/components/layout/modals/ModalScheduleLayoutComponent";

const InfoSchedulePopUpComponent: React.FC = () => {
  const {
    modal_mode,
    modal_state,
    toggleInfoScheduleMobileModal,
    setModalMode,
  } = useLayout();

  return (
    <div
      className={`absolute w-full h-full flex flex-col justify-center items-center z-50 backdrop-blur-xs transition-opacity duration-300 ${
        modal_state ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative w-full h-full flex flex-col justify-center items-center transition-transform duration-300 ease-out ${
          modal_state ? "scale-100" : "scale-75"
        }`}
      >
        <div className="absolute top-2 right-2 lg:top-4 lg:right-4">
          <CircleX
            size={30}
            className="text-gray-500 hover:text-red-500 transition cursor-pointer"
            onClick={() => {
              toggleInfoScheduleMobileModal();
              setModalMode("");
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {modal_mode == ConstantsVariables.INFO_MODE_FR ? (
            <ModalInfoLayoutComponent />
          ) : null}
          {modal_mode == ConstantsVariables.SCHEDULE_MODE_FR ? (
            <ModalScheduleLayoutComponent />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InfoSchedulePopUpComponent;
