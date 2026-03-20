import type { ReactNode } from 'react';

interface GrammarBoxProps {
  title?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function GrammarBox({ title, children, style }: GrammarBoxProps) {
  return (
    <div className="grammar-box" style={style}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
}
