import { type ReactNode } from "react";

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
}

type WarningBoxProps = {
  mode: "hint" | "warning";
  severity?: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const {children, mode} = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  } 
  
  const { severity } = props;

  if (mode === "warning") {
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <p>{children}</p>
      </aside>
    );
  }
}
