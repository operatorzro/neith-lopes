export default function ExperienceRow({
  role,
  org,
  period,
  summary,
}: {
  role: string;
  org: string;
  period: string;
  summary: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 py-5 border-b border-white/10 last:border-0">
      <span className="text-body-s text-body">{period}</span>
      <div className="flex flex-col gap-1">
        <h3 className="text-body-m text-heading">
          {role && (
            <>
              {role} <span className="text-body">· {org}</span>
            </>
          )}
          {!role && org}
        </h3>
        <p className="text-body-s text-body max-w-[560px]">{summary}</p>
      </div>
    </div>
  );
}
