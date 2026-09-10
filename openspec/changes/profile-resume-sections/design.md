# Design: Profile sections, experience timeline, and resume downloads

## Content model

`data/profileData.ts` owns locale-specific experience, certification, and skill data. The shared `ProfileData` types keep the page content structured while the existing locale JSON files provide section labels and descriptions.

## Experience presentation

`components/ProfileTimeline.tsx` implements the ReUI/shadcn timeline visual language locally with Tailwind: a vertical connector, timeline indicators, date/location metadata, and achievement bullets. It is semantic, keyboard-neutral, responsive, and supports the existing light/dark themes without adding shadcn runtime dependencies.

## Resume delivery

- `scripts/generate_resumes.py` generates single-column DOCX and PDF files.
- The general resume is published under `public/static/documents/`.
- The Entropy-specific pair is generated under ignored `.private-resumes/`.
- The public path is configured in `data/siteMetadata.js` and rendered beside the profile social links.
