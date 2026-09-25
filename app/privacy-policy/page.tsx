import { LegalPage } from "@/components/LegalPage";
import { getLegalPage, legalMetadata } from "@/lib/legal";

const slug = "privacy-policy";

export const metadata = legalMetadata(slug);

export default function PrivacyPolicyPage() {
  return <LegalPage content={getLegalPage(slug)} />;
}
