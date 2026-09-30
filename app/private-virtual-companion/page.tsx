import { SexEmulatorKeywordLanding } from "@/components/sex-emulator/SexEmulatorKeywordLanding";
import {
  buildKeywordLandingMetadata,
  requireKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const landing = requireKeywordLanding("/private-virtual-companion");

export const metadata = buildKeywordLandingMetadata(landing);

export default function PrivateVirtualCompanionPage() {
  return <SexEmulatorKeywordLanding landing={landing} />;
}
