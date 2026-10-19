interface TechChipProps {
  name: string;
}

export function CustomTechChip({ name }: TechChipProps) {
  return (
    <span className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground">
      {name}
    </span>
  );
}
