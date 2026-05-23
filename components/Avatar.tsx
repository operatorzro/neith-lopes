import Image from "next/image";

export default function Avatar({ size = 40 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-ui hairline overflow-hidden shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/avatar.jpg"
        alt="Neith Lopes"
        width={size}
        height={size}
        className="object-cover w-full h-full"
        priority
      />
    </span>
  );
}
