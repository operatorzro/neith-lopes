export default function Item({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-4 w-4 rounded-[4px] flex items-center justify-center ${
          checked ? "bg-heading" : "bg-white/[0.07] surface-sm"
        }`}
        aria-hidden
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M1.5 5.2L3.8 7.5L8.5 2"
              stroke="rgb(10,10,10)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-body-m ${checked ? "text-body line-through" : "text-heading"}`}
      >
        {label}
      </span>
    </div>
  );
}
