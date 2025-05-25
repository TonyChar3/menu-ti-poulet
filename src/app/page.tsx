"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import MainPage from "./main/page";

export default function Home() {
  const searchParams = useSearchParams();
  const [menu_state, setMenuState] = useState("");

  useEffect(() => {
    const uid = searchParams.get("uid");

    if (uid == null) {
      setMenuState("");
    } else if (menu_state == "") {
      setMenuState(uid);
    }
  }, [menu_state, searchParams]);

  return (
    <>
      <div className="relative w-full min-h-full flex flex-col items-center">
        {menu_state != "" ? <MainPage uid={menu_state} /> : <p>Loading...</p>}
      </div>
    </>
  );
}
