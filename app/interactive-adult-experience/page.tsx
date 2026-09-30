import { SexEmulatorKeywordLanding } from "@/components/sex-emulator/SexEmulatorKeywordLanding";
import {
  buildKeywordLandingMetadata,
  requireKeywordLanding,
} from "@/lib/sex-emulator-keyword-landings";

const landing = requireKeywordLanding("/interactive-adult-experience");

export const metadata = buildKeywordLandingMetadata(landing);

export default function InteractiveAdultExperiencePage() {
  return <SexEmulatorKeywordLanding landing={landing} />;
}
