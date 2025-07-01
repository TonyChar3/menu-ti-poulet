import React from "react";

import ScheduleDaysComponent from "./ScheduleDaysComponent";

const ModalScheduleLayoutComponent: React.FC = () => {
  return (
    <div className="w-[80%] md:w-[60%] lg:w-[40%]">
      <ScheduleDaysComponent day={"lundi"} />
      <ScheduleDaysComponent day={"mardi"} />
      <ScheduleDaysComponent day={"mercredi"} />
      <ScheduleDaysComponent day={"jeudi"} />
      <ScheduleDaysComponent day={"vendredi"} />
      <ScheduleDaysComponent day={"samedi"} />
      <ScheduleDaysComponent day={"dimanche"} />
    </div>
  );
};

export default ModalScheduleLayoutComponent;
