import { SexEmulatorKeywordLanding } from "@/components/sex-emulator/SexEmulatorKeywordLanding";
import {
  buildKeywordLandingMetadata,
  requireKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const landing = requireKeywordLanding("/realistic-virtual-experience");

export const metadata = buildKeywordLandingMetadata(landing);

export default function RealisticVirtualExperiencePage() {
  return <SexEmulatorKeywordLanding landing={landing} />;
}
