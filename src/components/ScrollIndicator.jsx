import { ChevronDown } from "lucide-react";

/**
 * A quiet hint that there's more below. Decorative only -- scrolling is
 * the browser's own affordance, so this is hidden from assistive tech.
 */
export default function ScrollIndicator({ label = "Scroll" }) {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span className="scroll-indicator__label">{label}</span>
      <ChevronDown size={15} strokeWidth={1.25} />
    </div>
  );
}
