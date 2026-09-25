import { LegalPage } from "@/components/LegalPage";
import { getLegalPage, legalMetadata } from "@/lib/legal";

const slug = "cookie-policy";

export const metadata = legalMetadata(slug);

export default function CookiePolicyPage() {
  return <LegalPage content={getLegalPage(slug)} />;
}
