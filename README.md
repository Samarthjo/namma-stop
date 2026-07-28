# Namma Stop

Namma Stop is a Bengaluru metro stop reminder prototype. It focuses on one job: pick a destination, start a trip, and get a calm heads-up before a stop or interchange.

## Run

Open `index.html` directly, or serve the folder for PWA behavior:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:5173`.

## Prototype Scope

- English-first UI with Kannada support.
- Purple, Green, and Yellow line seed data.
- Offline route planning across Majestic and RV Road interchanges.
- Station and place destination search.
- Active-trip screen with simulated station progress.
- Calm in-app/device notification behavior.

Before production, the station/timing data should be verified against the latest BMRCL feed or official route map.
