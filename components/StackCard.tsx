import Card from "./Card";

export default function StackCard({
  name,
  category,
  href,
}: {
  name: string;
  category: string;
  href?: string;
}) {
  return (
    <Card href={href} external={!!href} className="flex items-center gap-4 p-4">
      <span className="h-9 w-9 rounded-[8px] bg-heading text-background flex items-center justify-center text-body-s">
        {name[0]}
      </span>
      <div className="flex flex-col">
        <span className="text-body-m text-heading">{name}</span>
        <span className="text-body-s text-body">{category}</span>
      </div>
    </Card>
  );
}
