import { LegalPage } from "@/components/LegalPage";
import { getLegalPage, legalMetadata } from "@/lib/legal";

const slug = "terms";

export const metadata = legalMetadata(slug);

export default function TermsPage() {
  return <LegalPage content={getLegalPage(slug)} />;
}
