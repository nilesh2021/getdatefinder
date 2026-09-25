import { LegalPage } from "@/components/LegalPage";
import { getLegalPage, legalMetadata } from "@/lib/legal";

const slug = "affiliate-disclosure";

export const metadata = legalMetadata(slug);

export default function AffiliateDisclosurePage() {
  return <LegalPage content={getLegalPage(slug)} />;
}
