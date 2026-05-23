"use client";
import { useEffect, useState } from "react";

export default function LocalTime() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const fmt = () => {
      const d = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/London",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date());
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      return `${d} - ${t}`;
    };
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 30000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{now || " "}</span>;
}
