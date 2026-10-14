/* Small line-art marks, one per crop. Deliberately simple shapes drawn
   from the plant's actual silhouette — a farmer scanning the hub page
   should recognise the crop before reading the label, including when the
   label is in a script they read slowly. */

type Mark = "maize" | "coconut" | "ginger" | "sugarcane" | "ragi" | "calendar";

export default function CropMark({
  slug,
  size = 34,
}: {
  slug: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    stroke: "var(--color-leaf-600)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "shrink-0",
  };

  switch (slug as Mark) {
    case "maize":
      return (
        <svg {...common}>
          <path d="M12 2.5c2.3 0 3.7 3 3.7 8s-1.4 11-3.7 11-3.7-6-3.7-11 1.4-8 3.7-8Z" />
          <path d="M12 4.5v15M9.4 8.5h5.2M8.9 12.5h6.2M9.4 16.5h5.2" />
          <path d="M15.8 9.5c2.6-.4 4.3-2 5-4.3-2.3 0-4.3 1-5.4 2.5" />
        </svg>
      );
    case "coconut":
      return (
        <svg {...common}>
          <path d="M12.4 21.5c-.4-5.5 0-9 1.2-12.5" />
          <path d="M13.5 8C11.6 5.6 8.8 4.6 5.5 5.2c1.6 2.6 4.3 3.9 7.3 3.6" />
          <path d="M13.5 8c1.2-2.9 3.6-4.6 6.9-5-.5 3-2.7 5.2-5.7 5.9" />
          <path d="M13.5 8C12.6 5.2 13 2.9 14.7 1c1.5 1.9 1.8 4.4.8 6.8" />
          <circle cx="11.2" cy="10.4" r="1.5" />
          <circle cx="15.3" cy="10.8" r="1.5" />
        </svg>
      );
    case "ginger":
      return (
        <svg {...common}>
          <path d="M4.5 15.2c0-1.8 1.4-2.8 3-2.6 1-1.6 3-1.8 4.2-.6 1.5-1.2 3.6-.7 4.4 1 1.9-.2 3.3 1.1 3.3 2.8 0 1.9-1.6 3.2-3.6 3.2H8c-2 0-3.5-1.4-3.5-3.8Z" />
          <path d="M11 11.8c-.4-2.4.3-4.4 2.2-6M15.4 12.6c.6-1.7 1.9-2.8 3.8-3.2" />
        </svg>
      );
    case "sugarcane":
      return (
        <svg {...common}>
          <path d="M8.5 21.5V7.5M14 21.5V9" />
          <path d="M6.8 17.3h3.4M6.8 13.3h3.4M12.3 17.8h3.4M12.3 13.8h3.4" />
          <path d="M8.5 7.5C7.2 5.6 5.4 4.6 3 4.4c.6 2.3 2.3 3.6 5 3.9" />
          <path d="M8.5 7.5c.5-2.3 1.9-3.9 4-4.8.3 2.4-.8 4.3-3 5.3" />
          <path d="M14 9c1.4-1.5 3.1-2.1 5.2-1.9-.6 1.9-2.1 3-4.4 3.2" />
        </svg>
      );
    case "ragi":
      return (
        <svg {...common}>
          <path d="M12 21.5v-9" />
          <path d="M12 12.5C9.6 11 7.6 8.3 6.6 4.4 9.6 5.2 11.5 7.6 12 11" />
          <path d="M12 12.5c-1.2-2.3-1.4-5-.6-8.2 1.9 2 2.5 4.6 2 7.8" />
          <path d="M12 12.5c1.6-1.9 3.9-3.1 7-3.5-.9 3-3.1 4.9-6.4 5.4" />
          <path d="M12 12.5c2.1-.6 4.1-.4 6 .7-1.6 1.8-3.6 2.4-5.9 1.9" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <path d="M3 10h18M8 3v4M16 3v4" />
          <path d="M12 18.5v-3.2M12 15.3c0-1.3-1.1-2.4-2.4-2.4 0 1.3 1.1 2.4 2.4 2.4ZM12 15.3c0-1.5 1.2-2.7 2.7-2.7 0 1.5-1.2 2.7-2.7 2.7Z" />
        </svg>
      );
  }
}
