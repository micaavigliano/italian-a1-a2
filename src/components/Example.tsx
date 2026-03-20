interface ExampleProps {
  it: string;
  en: string;
}

export function Example({ it, en }: ExampleProps) {
  return (
    <div className="example">
      <span className="it">{it}</span>
      <span className="en">{en}</span>
    </div>
  );
}
