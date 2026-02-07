# Codebase Review: Suggested Fix Tasks

## 1) Typo fix task
**Issue found:** The portfolio content uses the misspelling **"Amezing"** in both project title and client name.

**Evidence:** `src/components/CinematicPortfolio.tsx` has `"Amezing Restaurant Menu"` and `"Amezing Restaurant"`.

**Task:** Rename those strings to **"Amazing"** (or the official client spelling if different), and keep naming consistent across UI text and asset metadata.

**Acceptance criteria:**
- The rendered project title/client text no longer contains "Amezing".
- Any related labels remain internally consistent.

---

## 2) Bug fix task
**Issue found:** TikTok social link points to a placeholder URL (`@your_username`), which is a broken/non-production destination.

**Evidence:** `src/components/Contact.tsx` sets TikTok `href` to `https://www.tiktok.com/@your_username`.

**Task:** Replace the placeholder with the real profile URL, or temporarily disable/hide the TikTok card until a valid profile is available.

**Acceptance criteria:**
- Clicking TikTok opens a valid, intended destination.
- No social link in production uses placeholder profile names.

---

## 3) Code comment / documentation discrepancy task
**Issue found:** A scaffold placeholder comment remains in source (`// ... existing imports ...`), which no longer reflects the actual code and adds ambiguity.

**Evidence:** `src/components/CinematicPortfolio.tsx` line with `// ... existing imports ...`.

**Task:** Remove or replace the placeholder comment with a meaningful grouping comment (e.g., "Portfolio image asset imports").

**Acceptance criteria:**
- No generic scaffold comments remain in this module.
- Comments accurately describe nearby code.

---

## 4) Test improvement task
**Issue found:** The project currently has no test script and no automated component/behavior tests.

**Evidence:** `package.json` only defines `dev`, `build`, `preview`, and `lint` scripts; no `test` script.

**Task:** Add a minimal test setup (e.g., Vitest + React Testing Library) and create one focused test for `Contact` social links (assert all active links are non-placeholder URLs).

**Acceptance criteria:**
- `npm test` (or equivalent) runs successfully in CI/local.
- At least one test fails when a placeholder URL like `your_username` is present.
- Documentation includes how to run tests.
