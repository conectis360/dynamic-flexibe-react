import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  } else if (mode === "warning") {
    return (
      <aside className="infobox infobox-warning warning--low">
        <p>{children}</p>
      </aside>
    );
  }
}
