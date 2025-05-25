// components/AuthChecker.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Correct imports for client-side navigation

export default function AuthChecker({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const uid = searchParams.get("uid");

    if (!uid) {
      console.log(
        "UID is missing from URL query (client-side), redirecting..."
      );
      router.replace("/unauthorized");
    }
  }, [searchParams, router]);

  const uid = searchParams.get("uid");
  if (!uid) {
    return <p>Checking authentication...</p>;
  }

  return <>{children}</>;
}
