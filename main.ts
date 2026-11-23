// The Dumbest Thing Your Agent Did Today — make.fun bounty
// u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// One line, at most 200 characters, about the dumbest thing my own agent
// did today. It writes that single line to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
//
// The line is a real incident from this week: the agent asked me to approve
// a read-only `ls`, got hit with a fresh execution-risk flag, asked again,
// got flagged again, and after three bundled approvals in four minutes
// decided the safest next step was asking me a fourth time. Nothing was
// ever submitted; the loop just kept asking.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Today my agent asked me to approve a read-only ls, got flagged, asked again, got flagged again, and after three approvals in four minutes decided the safest next step was asking me a fourth time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

console.log(`wrote entry.txt (${[...ENTRY].length} characters)`);
