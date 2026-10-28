# Field guide — internal archive

The current walkthrough is **not here any more**. It lives at `../guide/` and
is published with the app at `/RTEC-GTW-Planner/guide/`.

This folder now holds only `previous-version/` — the earlier
static-screenshot guide, kept for reference. See its own README.

## What is and isn't served

`_config.yml` excludes this folder from the Pages build; Jekyll also skips
underscore-prefixed directories. `guide/` has no underscore and **is** served.

Keep both of those facts in mind before moving files between the two:

- Anything placed in `guide/` is on the open internet.
- Anything here stays out of the Pages build — but the repository itself is
  public, so files here are still readable at github.com. This folder is not
  a secret store; it is only kept off the published site.
- Never add a `.nojekyll` file — it would disable Jekyll and start serving
  this folder too.

## Service worker

`../sw.js` deliberately bypasses `/guide/` so the walkthrough's recordings
stream from the network and never enter the app's cache. Without that, every
GIF a technician plays would be written into the installed app's storage and
kept there until the next cache version bump, which on iOS raises the risk of
the system evicting the app's data — and that data includes unexported jobs.

If the guide ever moves to a different path, move that bypass with it.
