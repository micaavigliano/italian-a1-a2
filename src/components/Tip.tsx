import type { ReactNode } from 'react';

export function Tip({ children }: { children: ReactNode }) {
  return <div className="tip">{children}</div>;
}
