import { identity } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full max-w-footer px-16 pb-16 flex flex-col gap-8">
      <div className="flex items-end justify-between gap-8 pt-8 border-t border-white/10">
        <div className="flex flex-col gap-2">
          <h3 className="text-h3">{identity.name}</h3>
          <p className="text-body-s text-body max-w-[360px]">{identity.bio}</p>
        </div>
        <ul className="flex flex-col gap-1 text-right">
          {identity.social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-body-s text-body hover:text-heading transition-colors"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between text-body-s text-body">
        <span>© {new Date().getFullYear()} {identity.name}</span>
        <a href={`mailto:${identity.email}`} className="hover:text-heading">
          {identity.email}
        </a>
      </div>
    </footer>
  );
}
