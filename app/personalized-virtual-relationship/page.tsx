import { SexEmulatorKeywordLanding } from "@/components/sex-emulator/SexEmulatorKeywordLanding";
import {
  buildKeywordLandingMetadata,
  requireKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const landing = requireKeywordLanding("/personalized-virtual-relationship");

export const metadata = buildKeywordLandingMetadata(landing);

export default function PersonalizedVirtualRelationshipPage() {
  return <SexEmulatorKeywordLanding landing={landing} />;
}
