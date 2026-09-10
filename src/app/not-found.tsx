import type { Metadata } from "next";

import { MainColumn } from "@/components/main-column";
import { NotFoundScreen } from "@/components/not-found-screen";

export const metadata: Metadata = {
  title: "404 - Page not found",
};

export default function NotFound() {
  return (
    <MainColumn>
      <NotFoundScreen />
    </MainColumn>
  );
}
