import Image from "next/image";
import Card from "./Card";

export default function StackCard({
  name,
  category,
  logo,
  href,
}: {
  name: string;
  category: string;
  logo?: string;
  href?: string;
}) {
  return (
    <Card href={href} external={!!href} className="flex items-center gap-4 p-4">
      <span className="h-9 w-9 rounded-[8px] bg-background hairline flex items-center justify-center shrink-0">
        {logo ? (
          <Image src={logo} alt="" width={20} height={20} className="object-contain" />
        ) : (
          <span className="text-body-s text-heading">{name[0]}</span>
        )}
      </span>
      <div className="flex flex-col">
        <span className="text-body-m text-heading">{name}</span>
        <span className="text-body-s text-body">{category}</span>
      </div>
    </Card>
  );
}
