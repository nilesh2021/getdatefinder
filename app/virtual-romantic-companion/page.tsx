import { SexEmulatorKeywordLanding } from "@/components/sex-emulator/SexEmulatorKeywordLanding";
import {
  buildKeywordLandingMetadata,
  requireKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const landing = requireKeywordLanding("/virtual-romantic-companion");

export const metadata = buildKeywordLandingMetadata(landing);

export default function VirtualRomanticCompanionPage() {
  return <SexEmulatorKeywordLanding landing={landing} />;
}
