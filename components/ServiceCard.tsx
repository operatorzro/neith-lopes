import Card from "./Card";
import Crossfade from "./Crossfade";

export default function ServiceCard({
  prefix,
  words,
  description,
  meta,
  href,
}: {
  prefix: string;
  words: string[];
  description: string;
  meta: string;
  href: string;
}) {
  return (
    <Card href={href} className="flex-1 flex flex-col gap-6">
      <h3 className="text-h3 text-heading">
        {prefix} <Crossfade words={words} />
      </h3>
      <p className="text-body-s text-body">{description}</p>
      <span className="text-body-s text-body mt-auto">{meta}</span>
    </Card>
  );
}
