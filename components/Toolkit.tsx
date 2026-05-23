import Image from "next/image";
import { toolkit } from "@/lib/data";

export default function Toolkit() {
  return (
    <div className="flex flex-col">
      {toolkit.map((g) => (
        <div
          key={g.group}
          className="grid grid-cols-[150px_1fr] gap-6 items-start py-5 border-b border-white/10 last:border-0"
        >
          <span className="text-body-s text-heading pt-2">{g.group}</span>
          <div className="flex flex-wrap gap-2">
            {g.tools.map((t) => (
              <span
                key={t.name}
                className="flex items-center gap-2 surface-sm rounded-lg bg-ui px-3 py-2"
              >
                {t.logo ? (
                  <Image
                    src={t.logo}
                    alt=""
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                ) : (
                  <span className="h-[18px] w-[18px] rounded-[5px] bg-background flex items-center justify-center text-[10px] text-heading">
                    {t.name[0]}
                  </span>
                )}
                <span className="text-body-s text-heading">{t.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
