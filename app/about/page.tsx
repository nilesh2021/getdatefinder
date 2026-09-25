import { LegalPage } from "@/components/LegalPage";
import { getLegalPage, legalMetadata } from "@/lib/legal";

const slug = "about";

export const metadata = legalMetadata(slug);

export default function AboutPage() {
  return <LegalPage content={getLegalPage(slug)} />;
}
