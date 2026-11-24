# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/ibell230814/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/ibell230814/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

**The World in One Day: 24 November 2026 in a single image.**

One 1024×1024 page that sums up the world news of Tuesday 24 November
2026, drawn as a newspaper front page: a navy masthead naming the day,
a lead story, four beat cards, an Indonesia strip, an "ALSO TODAY"
footer and a sources line.

## The six stories

1. **Lead — The Gulf standoff.** President Trump says he is inclined to
   resume military strikes on Iran as indirect talks stall; Tehran vows
   "maximum deterrence" and readies a convoy of more than 14 tankers
   from Kharg Island to break the US blockade of the Strait of Hormuz.
2. **Markets — Wall Street's wild rebound.** Nvidia surges 31% as
   Jensen Huang returns as CEO; the Nasdaq jumps 6.5% and the S&P 500
   4.7% to 7,237, snapping the seven-session slide into correction.
3. **Climate — COP31 ends with no fossil-fuel deal.** The Antalya
   summit closes without agreement on phasing out fossil fuels; the
   final text never named them, drawing wide criticism.
4. **Europe — Ukraine.** Russian drones and missiles strike a home in
   Dymer, Kyiv region, with deaths and missing reported; the Russian
   cargo ship Sparta II burns in the Gulf of Finland after a drone
   strike.
5. **Washington — Cartel de los Soles.** The US designates the
   Venezuelan group a foreign terrorist organisation, tightening the
   squeeze on President Maduro; US strikes on alleged drug boats pass
   21, with about 83 killed.
6. **Asia — Indonesia.** The death toll from Saturday's fire at a
   sweets factory in Cikande, Serang, Banten rises to at least 24, and
   rescue teams keep searching for around 30 workers still missing.

Footer: Modi and Nepal's PM Shah open the Ayodhya–Janakpur express ·
Bangladesh vows to arrest ex-PM Hasina if she returns · Thousands march
in Lisbon over living costs · Verstappen wins the Las Vegas Grand Prix.

Stories were checked against AP, Reuters, BBC, AFP and Guardian wires
on the morning of 24 November 2026 (WIB).

## The competition

news-image-20261124, program/v1, escrowed, prize total $100
(1st $20, 2nd $12, 3rd $6, 4th–10th $2, 11th–50th $1.20), no entry
fee. Entries close 2026-11-26T00:00:00Z (Thu 26 Nov 2026 07:00 WIB);
results are due 2026-12-10T08:00:00Z.

## Files

- `main.ts` — Node 22, standard library only. Validates `entry.png`
  (PNG signature, IHDR chunk, exact 1024×1024, 1 MiB cap), copies it to
  `$MAKEFUN_OUTPUT_DIR/entry.png`, then reads the copy back and
  verifies it byte for byte.
- `entry.png` — the image itself, 1024×1024 PNG.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the entrant's claim file.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification

`node main.ts` was run twice into two separate output directories.
Both outputs are byte-identical to each other and to `entry.png`:
1024×1024 PNG, 140,478 bytes, sha256
`707a6b5b0ae72deb9321b5c66ed7e5b9985fcd868c7db45dce1c2610cda20a78`.
The image was visually inspected after rendering: all six stories are
complete, no text overflows any card, and the footer and sources line
are fully visible.

New to make.fun? This entry was made for the daily news-image bounty:
https://make.fun/bounty/news-image-20261124 — sign up with referral
code 2zq0ch20.
