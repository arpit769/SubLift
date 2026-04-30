export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfk3qdtX6Dqg1JYEzob44f1xOIFpR9pEQ-XdplMpCI9p9fmLA/viewform?usp=publish-editor";

export function getApplyFormUrl(planName?: string) {
  if (!planName) return FORM_URL;
  return `${FORM_URL}&selected_plan=${encodeURIComponent(planName)}`;
}
