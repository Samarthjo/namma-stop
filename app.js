"use strict";

const LANG_KEY = "nammaStop.lang";
const RECENT_KEY = "nammaStop.recent";
const GAME_BEST_KEY = "nammaStop.gameBestStreak";

const icons = {
  train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="5" y="3" width="14" height="15" rx="3"></rect><path d="M8 21h8"></path><path d="M8 7h8"></path><path d="M8 12h.01"></path><path d="M16 12h.01"></path></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>`,
  route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M8 6h4a4 4 0 0 1 0 8H9a3 3 0 0 0 0 6h7"></path></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 21h4"></path></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path><path d="M19.4 15a1.8 1.8 0 0 0 .36 2l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1.1 1.65V21a2 2 0 0 1-4 0v-.09A1.8 1.8 0 0 0 8.7 19.3a1.8 1.8 0 0 0-2 .36l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.8 1.8 0 0 0 .36-2 1.8 1.8 0 0 0-1.65-1.1H2.5a2 2 0 0 1 0-4h.09A1.8 1.8 0 0 0 4.2 8.7a1.8 1.8 0 0 0-.36-2l-.06-.06A2 2 0 0 1 6.6 3.8l.06.06a1.8 1.8 0 0 0 2 .36h.04A1.8 1.8 0 0 0 9.8 2.6V2.5a2 2 0 0 1 4 0v.09a1.8 1.8 0 0 0 1.1 1.65 1.8 1.8 0 0 0 2-.36l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.8 1.8 0 0 0-.36 2v.04a1.8 1.8 0 0 0 1.65 1.1h.09a2 2 0 0 1 0 4h-.09A1.8 1.8 0 0 0 19.4 15Z"></path></svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M7 7h11l-3-3"></path><path d="M17 17H6l3 3"></path><path d="M18 7l-3 3"></path><path d="M6 17l3-3"></path></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-5"></path></svg>`,
  locate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3"></path><circle cx="12" cy="12" r="8"></circle></svg>`,
  game: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="2" y="8" width="20" height="10" rx="5"></rect><path d="M7 11v4M5 13h4"></path><circle cx="16" cy="12" r="1"></circle><circle cx="18" cy="14" r="1"></circle></svg>`
};

const T = {
  en: {
    subtitle: "Bengaluru metro reminder",
    independent: "Independent helper",
    beta: "Offline route seed",
    hero: "Where do you want to get down?",
    heroCopy: "Pick your stop, start the reminder, and keep your phone away.",
    station: "Station",
    place: "Place",
    from: "Start station",
    toStation: "Destination station",
    toPlace: "Destination place",
    findRoute: "Find route",
    startReminder: "Start reminder",
    recentTrips: "Recent trips",
    noRecent: "Your recent trips will appear here.",
    chooseRoute: "Choose route",
    stops: "stops",
    mins: "min",
    change: "change",
    changes: "changes",
    noChange: "No line change",
    highConfidence: "Clear route",
    estimate: "Estimated",
    interchangeAt: "Change at",
    toward: "towards",
    activeJourney: "Active trip",
    estimating: "Signal weak: estimating",
    tracking: "Tracking quietly",
    nextStop: "Next stop",
    stopsLeft: "Stops left",
    eta: "ETA",
    nextAlert: "Next alert",
    advance: "Next station",
    toggleSignal: "Signal weak",
    stopTrip: "Stop trip",
    journeyPath: "Journey path",
    home: "Home",
    trip: "Trip",
    settings: "Settings",
    reminderSettings: "Reminder settings",
    alertTiming: "Alert timing",
    oneStop: "1 stop before",
    twoStops: "2 stops before",
    voice: "Voice alert",
    voiceHint: "Short spoken heads-up",
    vibration: "Vibration",
    vibrationHint: "Strong pocket alert",
    language: "Language",
    privacy: "Privacy",
    privacyHint: "Use location only during an active trip.",
    permission: "Notifications work best after permission is allowed.",
    requestPermission: "Enable alerts",
    testAlert: "Test alert",
    ping: "Ping",
    destinationNext: "Your stop is next",
    destinationClose: "Your stop is close",
    interchangeNext: "Interchange coming",
    arrived: "You have reached your stop",
    ended: "Trip ended",
    selectError: "Choose a valid start and destination.",
    sameStation: "Start and destination are the same.",
    notOfficial: "Not an official BMRCL app. Check station signs too.",
    saved: "Saved",
    placeNearest: "Nearest metro stop",
    startFrom: "Start from",
    lineNow: "Current line",
    lineNext: "Next line",
    ready: "Ready",
    done: "Done",
    useMyLocation: "Use my location",
    locating: "Locating",
    locatingHint: "Finding your nearest station…",
    locatedTitle: "Nearest station set",
    locationDenied: "Location permission was denied.",
    locationUnsupported: "Location isn't available on this device.",
    interchangeAlerts: "Interchange alerts",
    interchangeAlertsHint: "Ping before a line change",
    interchangeTiming: "Interchange timing",
    play: "Play",
    gameTitle: "Metro Trivia",
    gameTagline: "A quick one for the ride.",
    score: "Score",
    streak: "Streak",
    best: "Best streak",
    correct: "Correct!",
    wrong: "Not quite",
    nextQuestion: "Next question",
    qLineOf: "Which line is {station} on?",
    qStopsBetween: "How many stops from {a} to {b}?",
    qInterchange: "Where do you change between {a} and {b}?",
    qOddOneOut: "Which one is NOT on the {line}?"
  },
  kn: {
    subtitle: "ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ನೆನಪಿನ ಸಹಾಯಕ",
    independent: "ಸ್ವತಂತ್ರ ಸಹಾಯಕ",
    beta: "ಆಫ್‌ಲೈನ್ ಮಾರ್ಗ ಮಾಹಿತಿ",
    hero: "ನೀವು ಎಲ್ಲಿ ಇಳಿಯಬೇಕು?",
    heroCopy: "ನಿಮ್ಮ ಸ್ಟಾಪ್ ಆಯ್ಕೆ ಮಾಡಿ, ನೆನಪನ್ನು ಶುರು ಮಾಡಿ, ಫೋನ್‌ನ್ನು ಪಕ್ಕಕ್ಕೆ ಇಡಿ.",
    station: "ನಿಲ್ದಾಣ",
    place: "ಸ್ಥಳ",
    from: "ಆರಂಭದ ನಿಲ್ದಾಣ",
    toStation: "ಗಮ್ಯ ನಿಲ್ದಾಣ",
    toPlace: "ಗಮ್ಯ ಸ್ಥಳ",
    findRoute: "ಮಾರ್ಗ ನೋಡಿ",
    startReminder: "ನೆನಪು ಶುರು ಮಾಡಿ",
    recentTrips: "ಇತ್ತೀಚಿನ ಪ್ರಯಾಣ",
    noRecent: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಪ್ರಯಾಣಗಳು ಇಲ್ಲಿ ಕಾಣುತ್ತವೆ.",
    chooseRoute: "ಮಾರ್ಗ ಆಯ್ಕೆ",
    stops: "ನಿಲ್ದಾಣಗಳು",
    mins: "ನಿಮಿಷ",
    change: "ಬದಲಾವಣೆ",
    changes: "ಬದಲಾವಣೆಗಳು",
    noChange: "ಮಾರ್ಗ ಬದಲಾವಣೆ ಇಲ್ಲ",
    highConfidence: "ಸ್ಪಷ್ಟ ಮಾರ್ಗ",
    estimate: "ಅಂದಾಜು",
    interchangeAt: "ಇಲ್ಲಿ ಬದಲಿಸಿ",
    toward: "ಕಡೆಗೆ",
    activeJourney: "ಸಕ್ರಿಯ ಪ್ರಯಾಣ",
    estimating: "ಸಿಗ್ನಲ್ ಕಡಿಮೆ: ಅಂದಾಜು",
    tracking: "ಶಾಂತವಾಗಿ ಗಮನಿಸುತ್ತಿದೆ",
    nextStop: "ಮುಂದಿನ ನಿಲ್ದಾಣ",
    stopsLeft: "ಉಳಿದ ನಿಲ್ದಾಣಗಳು",
    eta: "ಸಮಯ",
    nextAlert: "ಮುಂದಿನ ನೆನಪು",
    advance: "ಮುಂದಿನ ನಿಲ್ದಾಣ",
    toggleSignal: "ಸಿಗ್ನಲ್ ಕಡಿಮೆ",
    stopTrip: "ಪ್ರಯಾಣ ನಿಲ್ಲಿಸಿ",
    journeyPath: "ಪ್ರಯಾಣ ಮಾರ್ಗ",
    home: "ಮುಖಪುಟ",
    trip: "ಪ್ರಯಾಣ",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    reminderSettings: "ನೆನಪು ಸೆಟ್ಟಿಂಗ್ಸ್",
    alertTiming: "ನೆನಪು ಸಮಯ",
    oneStop: "1 ನಿಲ್ದಾಣ ಮೊದಲು",
    twoStops: "2 ನಿಲ್ದಾಣ ಮೊದಲು",
    voice: "ಧ್ವನಿ ನೆನಪು",
    voiceHint: "ಚಿಕ್ಕ ಧ್ವನಿ ಸೂಚನೆ",
    vibration: "ಕಂಪನ",
    vibrationHint: "ಜೇಬಿನಲ್ಲಿ ತಿಳಿಯುವ ಸೂಚನೆ",
    language: "ಭಾಷೆ",
    privacy: "ಗೌಪ್ಯತೆ",
    privacyHint: "ಸಕ್ರಿಯ ಪ್ರಯಾಣದಲ್ಲಷ್ಟೇ ಸ್ಥಳ ಬಳಕೆ.",
    permission: "ಅನುಮತಿ ನೀಡಿದರೆ ಸೂಚನೆಗಳು ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
    requestPermission: "ಸೂಚನೆ ಆನ್ ಮಾಡಿ",
    testAlert: "ನೆನಪು ಪರೀಕ್ಷಿಸಿ",
    ping: "ಪಿಂಗ್",
    destinationNext: "ನಿಮ್ಮ ಸ್ಟಾಪ್ ಮುಂದಿನದು",
    destinationClose: "ನಿಮ್ಮ ಸ್ಟಾಪ್ ಹತ್ತಿರದಲ್ಲಿದೆ",
    interchangeNext: "ಮಾರ್ಗ ಬದಲಾವಣೆ ಬರುತ್ತಿದೆ",
    arrived: "ನೀವು ನಿಮ್ಮ ಸ್ಟಾಪ್ ತಲುಪಿದ್ದೀರಿ",
    ended: "ಪ್ರಯಾಣ ಮುಗಿದಿದೆ",
    selectError: "ಸರಿಯಾದ ಆರಂಭ ಮತ್ತು ಗಮ್ಯ ಆಯ್ಕೆ ಮಾಡಿ.",
    sameStation: "ಆರಂಭ ಮತ್ತು ಗಮ್ಯ ಒಂದೇ ಆಗಿವೆ.",
    notOfficial: "ಇದು ಅಧಿಕೃತ BMRCL ಆಪ್ ಅಲ್ಲ. ನಿಲ್ದಾಣ ಸೂಚನೆಗಳನ್ನೂ ನೋಡಿ.",
    saved: "ಸೇವ್ ಆಯಿತು",
    placeNearest: "ಹತ್ತಿರದ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ",
    startFrom: "ಇಲ್ಲಿಂದ ಶುರು",
    lineNow: "ಈಗಿನ ಮಾರ್ಗ",
    lineNext: "ಮುಂದಿನ ಮಾರ್ಗ",
    ready: "ಸಿದ್ಧ",
    done: "ಆಯಿತು",
    useMyLocation: "ನನ್ನ ಸ್ಥಳ ಬಳಸಿ",
    locating: "ಹುಡುಕಲಾಗುತ್ತಿದೆ",
    locatingHint: "ಹತ್ತಿರದ ನಿಲ್ದಾಣ ಹುಡುಕಲಾಗುತ್ತಿದೆ…",
    locatedTitle: "ಹತ್ತಿರದ ನಿಲ್ದಾಣ ಆಯ್ಕೆಯಾಗಿದೆ",
    locationDenied: "ಸ್ಥಳದ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ.",
    locationUnsupported: "ಈ ಸಾಧನದಲ್ಲಿ ಸ್ಥಳ ಸೌಲಭ್ಯ ಲಭ್ಯವಿಲ್ಲ.",
    interchangeAlerts: "ಬದಲಾವಣೆ ನೆನಪುಗಳು",
    interchangeAlertsHint: "ಮಾರ್ಗ ಬದಲಾವಣೆಗೆ ಮೊದಲು ಸೂಚಿಸಿ",
    interchangeTiming: "ಬದಲಾವಣೆ ಸಮಯ",
    play: "ಆಟ",
    gameTitle: "ಮೆಟ್ರೋ ಟ್ರಿವಿಯಾ",
    gameTagline: "ಪ್ರಯಾಣಕ್ಕೊಂದು ಚುಟುಕು ಆಟ.",
    score: "ಸ್ಕೋರ್",
    streak: "ಸರಣಿ",
    best: "ಅತ್ಯುತ್ತಮ ಸರಣಿ",
    correct: "ಸರಿ!",
    wrong: "ಸ್ವಲ್ಪ ತಪ್ಪು",
    nextQuestion: "ಮುಂದಿನ ಪ್ರಶ್ನೆ",
    qLineOf: "{station} ಯಾವ ಮಾರ್ಗದಲ್ಲಿದೆ?",
    qStopsBetween: "{a} ಇಂದ {b} ಗೆ ಎಷ್ಟು ನಿಲ್ದಾಣಗಳು?",
    qInterchange: "{a} ಮತ್ತು {b} ನಡುವೆ ಎಲ್ಲಿ ಬದಲಾಯಿಸುತ್ತೀರಿ?",
    qOddOneOut: "{line} ನಲ್ಲಿ ಇಲ್ಲದಿರುವುದು ಯಾವುದು?"
  }
};

const lineConfig = {
  purple: { en: "Purple", kn: "ನೇರಳೆ", css: "purple" },
  green: { en: "Green", kn: "ಹಸಿರು", css: "green" },
  yellow: { en: "Yellow", kn: "ಹಳದಿ", css: "yellow" }
};

const stationKn = {
  "Whitefield": "ವೈಟ್‌ಫೀಲ್ಡ್",
  "Hopefarm": "ಹೋಪ್‌ಫಾರ್ಮ್",
  "Kadugodi Tree Park": "ಕಾಡುಗೋಡಿ ಟ್ರೀ ಪಾರ್ಕ್",
  "Pattandur Agrahara": "ಪಟ್ಟಂದೂರು ಅಗ್ರಹಾರ",
  "Sri Sathya Sai Hospital": "ಶ್ರೀ ಸತ್ಯ ಸಾಯಿ ಆಸ್ಪತ್ರೆ",
  "Nallurhalli": "ನಲ್ಲೂರುಹಳ್ಳಿ",
  "Kundalahalli": "ಕುಂದಲಹಳ್ಳಿ",
  "Seetharampalya": "ಸೀತಾರಾಂಪಾಳ್ಯ",
  "Hoodi": "ಹೂಡಿ",
  "Garudacharpalya": "ಗರುಡಾಚಾರ್ ಪಾಳ್ಯ",
  "Singayyanapalya": "ಸಿಂಗಯ್ಯನಪಾಳ್ಯ",
  "K.R. Pura": "ಕೆ.ಆರ್. ಪುರ",
  "Benniganahalli": "ಬೆನ್ನಿಗಾನಹಳ್ಳಿ",
  "Baiyappanahalli": "ಬೈಯಪ್ಪನಹಳ್ಳಿ",
  "Swami Vivekananda Road": "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ರಸ್ತೆ",
  "Indiranagar": "ಇಂದಿರಾನಗರ",
  "Halasuru": "ಹಲಸೂರು",
  "Trinity": "ಟ್ರಿನಿಟಿ",
  "MG Road": "ಎಂ.ಜಿ. ರಸ್ತೆ",
  "Cubbon Park": "ಕಬ್ಬನ್ ಪಾರ್ಕ್",
  "Vidhana Soudha": "ವಿಧಾನ ಸೌಧ",
  "Central College": "ಸೆಂಟ್ರಲ್ ಕಾಲೇಜು",
  "Majestic": "ಮೆಜೆಸ್ಟಿಕ್",
  "City Railway Station": "ಸಿಟಿ ರೈಲು ನಿಲ್ದಾಣ",
  "Magadi Road": "ಮಾಗಡಿ ರಸ್ತೆ",
  "Hosahalli": "ಹೊಸಹಳ್ಳಿ",
  "Vijayanagar": "ವಿಜಯನಗರ",
  "Attiguppe": "ಅತ್ತಿಗುಪ್ಪೆ",
  "Deepanjali Nagar": "ದೀಪಾಂಜಲಿ ನಗರ",
  "Mysuru Road": "ಮೈಸೂರು ರಸ್ತೆ",
  "Pantharapalya - Nayandahalli": "ಪಂತರಪಾಳ್ಯ - ನಾಯಂಡಹಳ್ಳಿ",
  "Rajarajeshwari Nagar": "ರಾಜರಾಜೇಶ್ವರಿ ನಗರ",
  "Jnanabharathi": "ಜ್ಞಾನಭಾರತಿ",
  "Pattanagere": "ಪಟ್ಟಣಗೆರೆ",
  "Kengeri Bus Terminal": "ಕೆಂಗೇರಿ ಬಸ್ ಟರ್ಮಿನಲ್",
  "Kengeri": "ಕೆಂಗೇರಿ",
  "Challaghatta": "ಚಲ್ಲಘಟ್ಟ",
  "Madavara": "ಮಾದವಾರ",
  "Chikkabidarakallu": "ಚಿಕ್ಕಬಿದರಕಲ್ಲು",
  "Manjunatha Nagar": "ಮಂಜುನಾಥ ನಗರ",
  "Nagasandra": "ನಾಗಸಂದ್ರ",
  "Dasarahalli": "ದಾಸರಹಳ್ಳಿ",
  "Jalahalli": "ಜಾಲಹಳ್ಳಿ",
  "Peenya Industry": "ಪೀಣ್ಯ ಇಂಡಸ್ಟ್ರಿ",
  "Peenya": "ಪೀಣ್ಯ",
  "Goraguntepalya": "ಗೊರಗುಂಟೆಪಾಳ್ಯ",
  "Yeshwanthpur": "ಯಶವಂತಪುರ",
  "Sandal Soap Factory": "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ",
  "Mahalakshmi": "ಮಹಾಲಕ್ಷ್ಮಿ",
  "Rajajinagar": "ರಾಜಾಜಿನಗರ",
  "Mahakavi Kuvempu Road": "ಮಹಾಕವಿ ಕುವೆಂಪು ರಸ್ತೆ",
  "Srirampura": "ಶ್ರೀರಾಂಪುರ",
  "Sampige Road": "ಸಂಪಿಗೆ ರಸ್ತೆ",
  "Chickpete": "ಚಿಕ್ಕಪೇಟೆ",
  "KR Market": "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ",
  "National College": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜು",
  "Lalbagh": "ಲಾಲ್‌ಬಾಗ್",
  "South End Circle": "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್",
  "Jayanagar": "ಜಯನಗರ",
  "RV Road": "ಆರ್.ವಿ. ರಸ್ತೆ",
  "Banashankari": "ಬನಶಂಕರಿ",
  "JP Nagar": "ಜೆ.ಪಿ. ನಗರ",
  "Yelachenahalli": "ಯೆಲಚೇನಹಳ್ಳಿ",
  "Konanakunte Cross": "ಕೊಣನಕುಂಟೆ ಕ್ರಾಸ್",
  "Doddakallasandra": "ದೊಡ್ಡಕಲ್ಲಸಂದ್ರ",
  "Vajarahalli": "ವಜರಹಳ್ಳಿ",
  "Thalaghattapura": "ತಲಘಟ್ಟಪುರ",
  "Silk Institute": "ಸಿಲ್ಕ್ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್",
  "Ragigudda": "ರಾಗಿಗುಡ್ಡ",
  "Jayadeva Hospital": "ಜಯದೇವ ಆಸ್ಪತ್ರೆ",
  "BTM Layout": "ಬಿ.ಟಿ.ಎಂ. ಲೇಔಟ್",
  "Central Silk Board": "ಸೆಂಟ್ರಲ್ ಸಿಲ್ಕ್ ಬೋರ್ಡ್",
  "Bommanahalli": "ಬೊಮ್ಮನಹಳ್ಳಿ",
  "Hongasandra": "ಹೊಂಗಸಂದ್ರ",
  "Kudlu Gate": "ಕುಡ್ಲು ಗೇಟ್",
  "Singasandra": "ಸಿಂಗಸಂದ್ರ",
  "Hosa Road": "ಹೊಸ ರಸ್ತೆ",
  "Beratena Agrahara": "ಬೆರಟೇನ ಅಗ್ರಹಾರ",
  "Electronic City": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ",
  "Konappana Agrahara": "ಕೋಣಪ್ಪನ ಅಗ್ರಹಾರ",
  "Huskur Road": "ಹುಸ್ಕೂರು ರಸ್ತೆ",
  "Hebbagodi": "ಹೆಬ್ಬಗೋಡಿ",
  "Bommasandra": "ಬೊಮ್ಮಸಂದ್ರ"
};

const rawLines = {
  purple: [
    "Whitefield", "Hopefarm", "Kadugodi Tree Park", "Pattandur Agrahara", "Sri Sathya Sai Hospital",
    "Nallurhalli", "Kundalahalli", "Seetharampalya", "Hoodi", "Garudacharpalya", "Singayyanapalya",
    "K.R. Pura", "Benniganahalli", "Baiyappanahalli", "Swami Vivekananda Road", "Indiranagar",
    "Halasuru", "Trinity", "MG Road", "Cubbon Park", "Vidhana Soudha", "Central College",
    "Majestic", "City Railway Station", "Magadi Road", "Hosahalli", "Vijayanagar", "Attiguppe",
    "Deepanjali Nagar", "Mysuru Road", "Pantharapalya - Nayandahalli", "Rajarajeshwari Nagar", "Jnanabharathi", "Pattanagere",
    "Kengeri Bus Terminal", "Kengeri", "Challaghatta"
  ],
  green: [
    "Madavara", "Chikkabidarakallu", "Manjunatha Nagar", "Nagasandra", "Dasarahalli", "Jalahalli",
    "Peenya Industry", "Peenya", "Goraguntepalya", "Yeshwanthpur", "Sandal Soap Factory", "Mahalakshmi",
    "Rajajinagar", "Mahakavi Kuvempu Road", "Srirampura", "Sampige Road", "Majestic", "Chickpete", "KR Market",
    "National College", "Lalbagh", "South End Circle", "Jayanagar", "RV Road", "Banashankari",
    "JP Nagar", "Yelachenahalli", "Konanakunte Cross", "Doddakallasandra", "Vajarahalli",
    "Thalaghattapura", "Silk Institute"
  ],
  yellow: [
    "RV Road", "Ragigudda", "Jayadeva Hospital", "BTM Layout", "Central Silk Board", "Bommanahalli",
    "Hongasandra", "Kudlu Gate", "Singasandra", "Hosa Road", "Beratena Agrahara", "Electronic City",
    "Konappana Agrahara", "Huskur Road", "Hebbagodi", "Bommasandra"
  ]
};

const placeData = [
  ["Church Street", "ಚರ್ಚ್ ಸ್ಟ್ರೀಟ್", "MG Road"],
  ["Brigade Road", "ಬ್ರಿಗೇಡ್ ರಸ್ತೆ", "MG Road"],
  ["Cubbon Park", "ಕಬ್ಬನ್ ಪಾರ್ಕ್", "Cubbon Park"],
  ["Vidhana Soudha", "ವಿಧಾನ ಸೌಧ", "Vidhana Soudha"],
  ["KSR Railway Station", "ಕೆ.ಎಸ್.ಆರ್ ರೈಲು ನಿಲ್ದಾಣ", "City Railway Station"],
  ["Majestic Bus Stand", "ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ", "Majestic"],
  ["Lalbagh Botanical Garden", "ಲಾಲ್‌ಬಾಗ್ ಉದ್ಯಾನ", "Lalbagh"],
  ["Orion Mall", "ಓರಿಯನ್ ಮಾಲ್", "Sandal Soap Factory"],
  ["Mantri Square", "ಮಂತ್ರಿಮಾಲ್", "Sampige Road"],
  ["IKEA Nagasandra", "ಐಕಿಯಾ ನಾಗಸಂದ್ರ", "Nagasandra"],
  ["Electronic City Phase 1", "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಫೇಸ್ 1", "Electronic City"],
  ["Central Silk Board", "ಸೆಂಟ್ರಲ್ ಸಿಲ್ಕ್ ಬೋರ್ಡ್", "Central Silk Board"],
  ["BTM Layout", "ಬಿ.ಟಿ.ಎಂ. ಲೇಔಟ್", "BTM Layout"],
  ["Banashankari TTMC", "ಬನಶಂಕರಿ ಟಿಟಿಎಂಸಿ", "Banashankari"],
  ["KR Market", "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ", "KR Market"],
  ["IISc Bengaluru", "ಐಐಎಸ್ಸಿ ಬೆಂಗಳೂರು", "Sandal Soap Factory"],
  ["Phoenix Marketcity", "ಫೀನಿಕ್ಸ್ ಮಾರ್ಕೆಟ್‌ಸಿಟಿ", "K.R. Pura"],
  ["JP Nagar", "ಜೆ.ಪಿ. ನಗರ", "JP Nagar"]
];

function idify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const stationMap = new Map();
const lines = Object.fromEntries(
  Object.entries(rawLines).map(([line, names]) => [
    line,
    names.map((name) => {
      const id = idify(name);
      if (!stationMap.has(id)) {
        stationMap.set(id, {
          id,
          en: name,
          kn: stationKn[name] || name,
          lines: []
        });
      }
      stationMap.get(id).lines.push(line);
      return id;
    })
  ])
);

const stations = Array.from(stationMap.values()).sort((a, b) => a.en.localeCompare(b.en));
const stationByName = new Map(stations.flatMap((s) => [[s.en.toLowerCase(), s.id], [s.kn.toLowerCase(), s.id]]));
const places = placeData.map(([en, kn, station]) => ({ en, kn, stationId: idify(station) }));

const graph = new Map(stations.map((station) => [station.id, []]));
Object.entries(lines).forEach(([line, stationIds]) => {
  for (let index = 0; index < stationIds.length - 1; index += 1) {
    const a = stationIds[index];
    const b = stationIds[index + 1];
    graph.get(a).push({ to: b, line });
    graph.get(b).push({ to: a, line });
  }
});

// Approximate coordinates for a handful of well-known stations per line; every
// other station on that line is linearly interpolated between its nearest
// anchors. Good enough to pick a "nearest station" — not survey-grade.
const purpleAnchors = {
  "kengeri": [12.9081, 77.4830],
  "pantharapalya-nayandahalli": [12.9481, 77.5289],
  "mysuru-road": [12.9535, 77.5346],
  "majestic": [12.9767, 77.5713],
  "vidhana-soudha": [12.9794, 77.5912],
  "mg-road": [12.9757, 77.6068],
  "indiranagar": [12.9719, 77.6412],
  "baiyappanahalli": [12.9909, 77.6530],
  "k-r-pura": [13.0059, 77.6970],
  "whitefield": [12.9698, 77.7500]
};
const greenAnchors = {
  "nagasandra": [13.0453, 77.5087],
  "yeshwanthpur": [13.0284, 77.5540],
  "rajajinagar": [12.9946, 77.5550],
  "majestic": [12.9767, 77.5713],
  "lalbagh": [12.9556, 77.5844],
  "jayanagar": [12.9308, 77.5838],
  "rv-road": [12.9221, 77.5824],
  "banashankari": [12.9081, 77.5711],
  "jp-nagar": [12.8987, 77.5854],
  "silk-institute": [12.8503, 77.5678]
};
const yellowAnchors = {
  "rv-road": [12.9221, 77.5824],
  "jayadeva-hospital": [12.9012, 77.5978],
  "btm-layout": [12.9166, 77.6101],
  "central-silk-board": [12.9172, 77.6228],
  "electronic-city": [12.8452, 77.6602],
  "bommasandra": [12.8154, 77.6906]
};

function interpolateLineCoords(stationIds, anchors) {
  const anchorPoints = stationIds
    .map((id, index) => ({ id, index }))
    .filter(({ id }) => anchors[id]);
  const result = {};
  stationIds.forEach((id, index) => {
    if (anchors[id]) {
      result[id] = anchors[id];
      return;
    }
    let before = null;
    let after = null;
    anchorPoints.forEach((point) => {
      if (point.index < index && (!before || point.index > before.index)) before = point;
      if (point.index > index && (!after || point.index < after.index)) after = point;
    });
    if (before && after) {
      const t = (index - before.index) / (after.index - before.index);
      const [lat1, lon1] = anchors[before.id];
      const [lat2, lon2] = anchors[after.id];
      result[id] = [lat1 + (lat2 - lat1) * t, lon1 + (lon2 - lon1) * t];
    } else if (before) {
      result[id] = anchors[before.id];
    } else if (after) {
      result[id] = anchors[after.id];
    }
  });
  return result;
}

const stationCoords = {
  ...interpolateLineCoords(lines.purple, purpleAnchors),
  ...interpolateLineCoords(lines.green, greenAnchors),
  ...interpolateLineCoords(lines.yellow, yellowAnchors)
};

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function nearestStationTo(lat, lon) {
  let best = null;
  stations.forEach((s) => {
    const coord = stationCoords[s.id];
    if (!coord) return;
    const distanceKm = haversineKm(lat, lon, coord[0], coord[1]);
    if (!best || distanceKm < best.distanceKm) best = { id: s.id, distanceKm };
  });
  return best;
}

function formatDistance(km) {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

let state = {
  lang: localStorage.getItem(LANG_KEY) || "en",
  tab: "home",
  mode: "station",
  fromInput: "Indiranagar",
  toInput: "Majestic",
  route: null,
  active: false,
  currentIndex: 0,
  weakSignal: false,
  alertStops: 1,
  interchangeAlerts: true,
  interchangeAlertStops: 1,
  voice: true,
  vibration: true,
  toast: null,
  firedAlerts: new Set(),
  recent: JSON.parse(localStorage.getItem(RECENT_KEY) || "[]"),
  game: {
    score: 0,
    streak: 0,
    bestStreak: Number(localStorage.getItem(GAME_BEST_KEY) || 0),
    current: null,
    answered: false,
    selectedIndex: null
  }
};

function tt(key) {
  return T[state.lang][key] || T.en[key] || key;
}

function lineLabel(line) {
  return `${lineConfig[line][state.lang] || lineConfig[line].en} ${state.lang === "kn" ? "ಮಾರ್ಗ" : "Line"}`;
}

function station(id) {
  return stationMap.get(id);
}

function stationLabel(id) {
  const item = station(id);
  return state.lang === "kn" ? item.kn : item.en;
}

function stationOptionLabel(item) {
  if (state.lang === "kn" && item.kn !== item.en) return `${item.kn} · ${item.en}`;
  return item.en;
}

function fillTemplate(str, vars) {
  return Object.keys(vars).reduce((acc, key) => acc.replace(`{${key}}`, vars[key]), str);
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateLineOfQuestion() {
  const pool = stations.filter((s) => s.lines.length === 1);
  const target = randomItem(pool);
  const optionLines = shuffle(Object.keys(lineConfig));
  return {
    type: "lineOf",
    stationId: target.id,
    optionLines,
    correctIndex: optionLines.indexOf(target.lines[0])
  };
}

function generateStopsBetweenQuestion() {
  let a = null;
  let b = null;
  let route = null;
  for (let attempt = 0; attempt < 30 && !route; attempt += 1) {
    const candidateA = randomItem(stations);
    const candidateB = randomItem(stations);
    if (candidateA.id === candidateB.id) continue;
    const candidateRoute = planRoute(candidateA.id, candidateB.id);
    if (candidateRoute && candidateRoute.stops >= 2 && candidateRoute.stops <= 30) {
      a = candidateA;
      b = candidateB;
      route = candidateRoute;
    }
  }
  if (!route) return generateLineOfQuestion();
  const correct = route.stops;
  const optionSet = new Set([correct]);
  const deltas = shuffle([-4, -3, -2, -1, 1, 2, 3, 4]);
  let deltaIndex = 0;
  while (optionSet.size < 4 && deltaIndex < deltas.length) {
    optionSet.add(Math.max(1, correct + deltas[deltaIndex]));
    deltaIndex += 1;
  }
  const options = shuffle(Array.from(optionSet));
  return {
    type: "stopsBetween",
    fromId: a.id,
    toId: b.id,
    options,
    correctIndex: options.indexOf(correct)
  };
}

function generateInterchangeQuestion() {
  const interchangeStations = stations.filter((s) => s.lines.length > 1);
  const target = randomItem(interchangeStations);
  const [lineA, lineB] = target.lines;
  const distractors = shuffle(stations.filter((s) => s.id !== target.id)).slice(0, 3);
  const optionIds = shuffle([target, ...distractors]).map((s) => s.id);
  return {
    type: "interchange",
    lineA,
    lineB,
    optionIds,
    correctIndex: optionIds.indexOf(target.id)
  };
}

function generateOddOneOutQuestion() {
  const line = randomItem(Object.keys(lineConfig));
  const onLine = shuffle(stations.filter((s) => lines[line].includes(s.id))).slice(0, 3);
  const offLine = shuffle(stations.filter((s) => !lines[line].includes(s.id)));
  const odd = offLine[0];
  const optionIds = shuffle([...onLine, odd]).map((s) => s.id);
  return {
    type: "oddOneOut",
    line,
    optionIds,
    correctIndex: optionIds.indexOf(odd.id)
  };
}

function generateQuestion() {
  const generators = [generateLineOfQuestion, generateStopsBetweenQuestion, generateInterchangeQuestion, generateOddOneOutQuestion];
  return randomItem(generators)();
}

function questionView(spec) {
  if (spec.type === "lineOf") {
    return {
      prompt: fillTemplate(tt("qLineOf"), { station: stationLabel(spec.stationId) }),
      options: spec.optionLines.map((line) => lineLabel(line))
    };
  }
  if (spec.type === "stopsBetween") {
    return {
      prompt: fillTemplate(tt("qStopsBetween"), { a: stationLabel(spec.fromId), b: stationLabel(spec.toId) }),
      options: spec.options.map((n) => String(n))
    };
  }
  if (spec.type === "interchange") {
    return {
      prompt: fillTemplate(tt("qInterchange"), { a: lineLabel(spec.lineA), b: lineLabel(spec.lineB) }),
      options: spec.optionIds.map((id) => stationLabel(id))
    };
  }
  return {
    prompt: fillTemplate(tt("qOddOneOut"), { line: lineLabel(spec.line) }),
    options: spec.optionIds.map((id) => stationLabel(id))
  };
}

function nextQuestion() {
  state.game.current = generateQuestion();
  state.game.answered = false;
  state.game.selectedIndex = null;
  render();
}

function answerQuestion(selectedIndex) {
  if (!state.game.current || state.game.answered) return;
  state.game.answered = true;
  state.game.selectedIndex = selectedIndex;
  if (selectedIndex === state.game.current.correctIndex) {
    state.game.score += 1;
    state.game.streak += 1;
    if (state.game.streak > state.game.bestStreak) {
      state.game.bestStreak = state.game.streak;
      localStorage.setItem(GAME_BEST_KEY, String(state.game.bestStreak));
    }
  } else {
    state.game.streak = 0;
  }
  render();
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function candidatesFromInput(input) {
  const raw = String(input || "").trim();
  const pieces = raw.split("·").map((part) => part.trim()).filter(Boolean);
  return [raw, ...pieces].map(normalize).filter(Boolean);
}

function resolveStation(input) {
  const candidates = candidatesFromInput(input);
  if (!candidates.length) return null;
  for (const value of candidates) {
    if (stationByName.has(value)) return stationByName.get(value);
  }
  const exact = stations.find((s) => candidates.includes(normalize(s.en)) || candidates.includes(normalize(s.kn)));
  if (exact) return exact.id;
  const partial = stations.find((s) =>
    candidates.some((value) => normalize(s.en).includes(value) || normalize(s.kn).includes(value))
  );
  return partial ? partial.id : null;
}

function resolvePlace(input) {
  const candidates = candidatesFromInput(input);
  if (!candidates.length) return null;
  return places.find((p) => candidates.includes(normalize(p.en)) || candidates.includes(normalize(p.kn)))
    || places.find((p) =>
      candidates.some((value) => normalize(p.en).includes(value) || normalize(p.kn).includes(value))
    );
}

function resolveDestination() {
  if (state.mode === "place") {
    const place = resolvePlace(state.toInput);
    return place ? { stationId: place.stationId, place } : null;
  }
  const stationId = resolveStation(state.toInput);
  return stationId ? { stationId, place: null } : null;
}

function planRoute(fromId, toId) {
  if (!fromId || !toId || !graph.has(fromId) || !graph.has(toId)) return null;
  if (fromId === toId) return { same: true, stations: [fromId], edges: [], changes: [], minutes: 0, stops: 0 };

  const queue = [{ id: fromId, path: [fromId], edges: [] }];
  const seen = new Set([fromId]);

  while (queue.length) {
    const current = queue.shift();
    for (const edge of graph.get(current.id)) {
      if (seen.has(edge.to)) continue;
      const nextPath = [...current.path, edge.to];
      const nextEdges = [...current.edges, edge.line];
      if (edge.to === toId) {
        const route = {
          stations: nextPath,
          edges: nextEdges,
          changes: routeChanges(nextPath, nextEdges),
          stops: nextPath.length - 1
        };
        route.minutes = Math.max(2, Math.round(route.stops * 2.15 + route.changes.length * 4));
        return route;
      }
      seen.add(edge.to);
      queue.push({ id: edge.to, path: nextPath, edges: nextEdges });
    }
  }
  return null;
}

function routeChanges(path, edges) {
  const changes = [];
  for (let index = 1; index < edges.length; index += 1) {
    if (edges[index] !== edges[index - 1]) {
      changes.push({
        stationId: path[index],
        fromLine: edges[index - 1],
        toLine: edges[index]
      });
    }
  }
  return changes;
}

function currentLineAt(index) {
  if (!state.route || !state.route.edges.length) return null;
  return state.route.edges[Math.max(0, Math.min(index, state.route.edges.length - 1))];
}

function destinationSummary() {
  const destination = resolveDestination();
  if (!destination) return "";
  if (destination.place) {
    return `${destination.place.en} → ${station(destination.stationId).en}`;
  }
  return station(destination.stationId).en;
}

function routeSummary(route) {
  const changeText = route.changes.length
    ? `${route.changes.length} ${route.changes.length === 1 ? tt("change") : tt("changes")}`
    : tt("noChange");
  return `${route.stops} ${tt("stops")} · ${route.minutes} ${tt("mins")} · ${changeText}`;
}

function setToast(title, body) {
  state.toast = { title, body };
  render();
  window.clearTimeout(setToast.timer);
  setToast.timer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 3600);
}

function deviceNotice(title, body) {
  if (state.vibration && "vibrate" in navigator) navigator.vibrate([220, 90, 220]);
  if (state.voice && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${title}. ${body}`);
    utterance.lang = state.lang === "kn" ? "kn-IN" : "en-IN";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body, tag: "namma-stop" });
  }
}

function maybeRegisterServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function requestNotifications() {
  if (!("Notification" in window)) {
    setToast(tt("ping"), tt("permission"));
    return;
  }
  Notification.requestPermission().then((permission) => {
    setToast(tt("saved"), permission === "granted" ? tt("requestPermission") : tt("permission"));
  });
}

function useMyLocation() {
  if (!("geolocation" in navigator)) {
    setToast(tt("ping"), tt("locationUnsupported"));
    return;
  }
  setToast(tt("locating"), tt("locatingHint"));
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const nearest = nearestStationTo(position.coords.latitude, position.coords.longitude);
      if (!nearest) {
        setToast(tt("ping"), tt("locationUnsupported"));
        return;
      }
      state.mode = "station";
      state.fromInput = stationOptionLabel(station(nearest.id));
      state.route = null;
      render();
      setToast(tt("locatedTitle"), `${stationLabel(nearest.id)} · ${formatDistance(nearest.distanceKm)}`);
    },
    () => {
      setToast(tt("ping"), tt("locationDenied"));
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function scrollToTop() {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function scrollToSelector(selector) {
  window.requestAnimationFrame(() => {
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function handleFindRoute() {
  const fromId = resolveStation(state.fromInput);
  const destination = resolveDestination();
  if (!fromId || !destination) {
    setToast(tt("ping"), tt("selectError"));
    return;
  }
  const route = planRoute(fromId, destination.stationId);
  if (!route || route.same) {
    setToast(tt("ping"), tt("sameStation"));
    return;
  }
  route.destinationPlace = destination.place;
  state.route = route;
  state.active = false;
  state.currentIndex = 0;
  state.firedAlerts = new Set();
  state.tab = "home";
  render();
  scrollToSelector(".route-card");
}

function startTrip() {
  if (!state.route) {
    handleFindRoute();
    if (!state.route) return;
  }
  state.active = true;
  state.currentIndex = 0;
  state.firedAlerts = new Set();
  state.tab = "trip";
  saveRecent();
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().catch(() => {});
  }
  render();
  scrollToTop();
  setToast(tt("activeJourney"), tt("tracking"));
}

function saveRecent() {
  if (!state.route) return;
  const from = state.route.stations[0];
  const to = state.route.stations[state.route.stations.length - 1];
  const item = { from, to, label: destinationSummary(), ts: Date.now() };
  state.recent = [item, ...state.recent.filter((trip) => !(trip.from === from && trip.to === to))].slice(0, 4);
  localStorage.setItem(RECENT_KEY, JSON.stringify(state.recent));
}

function stopTrip() {
  state.active = false;
  state.tab = "home";
  setToast(tt("ended"), tt("done"));
  render();
  scrollToTop();
}

function trainProgressPercent() {
  if (!state.route) return 0;
  const destinationIndex = state.route.stations.length - 1;
  return destinationIndex === 0 ? 100 : Math.round((state.currentIndex / destinationIndex) * 100);
}

function animateTrainProgress(fromPercent, toPercent) {
  requestAnimationFrame(() => {
    const bar = document.querySelector(".train-progress");
    const icon = document.querySelector(".train-icon");
    if (!bar || !icon || fromPercent === toPercent) return;
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    bar.animate([{ width: `${fromPercent}%` }, { width: `${toPercent}%` }], { duration: 450, easing });
    icon.animate([{ left: `${fromPercent}%` }, { left: `${toPercent}%` }], { duration: 450, easing });
  });
}

function advanceStation() {
  if (!state.route || !state.active) return;
  const fromProgress = trainProgressPercent();
  state.currentIndex = Math.min(state.currentIndex + 1, state.route.stations.length - 1);
  checkAlerts();
  if (state.currentIndex === state.route.stations.length - 1) {
    deviceNotice(tt("arrived"), stationLabel(state.route.stations[state.currentIndex]));
    setToast(tt("arrived"), stationLabel(state.route.stations[state.currentIndex]));
  }
  render();
  animateTrainProgress(fromProgress, trainProgressPercent());
}

function checkAlerts() {
  const route = state.route;
  if (!route) return;
  const destinationIndex = route.stations.length - 1;
  const stopsLeft = destinationIndex - state.currentIndex;

  if (state.interchangeAlerts) {
    route.changes.forEach((change) => {
      const changeIndex = route.stations.indexOf(change.stationId);
      if (changeIndex - state.currentIndex === state.interchangeAlertStops && !state.firedAlerts.has(`change-${change.stationId}`)) {
        state.firedAlerts.add(`change-${change.stationId}`);
        const body = `${stationLabel(change.stationId)} · ${lineLabel(change.toLine)}`;
        deviceNotice(tt("interchangeNext"), body);
        setToast(tt("interchangeNext"), body);
      }
    });
  }

  if (stopsLeft === state.alertStops && !state.firedAlerts.has("destination-close")) {
    state.firedAlerts.add("destination-close");
    const title = state.alertStops === 1 ? tt("destinationNext") : tt("destinationClose");
    const body = stationLabel(route.stations[destinationIndex]);
    deviceNotice(title, body);
    setToast(title, body);
  }
}

function applyRecent(trip) {
  state.fromInput = station(trip.from).en;
  state.toInput = station(trip.to).en;
  state.mode = "station";
  handleFindRoute();
}

function setLanguage(lang) {
  state.lang = lang;
  state.toast = null;
  localStorage.setItem(LANG_KEY, lang);
  render();
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = `
    <section class="app">
      ${renderTopbar()}
      ${state.tab === "home" ? renderHome() : ""}
      ${state.tab === "trip" ? renderTrip() : ""}
      ${state.tab === "settings" ? renderSettings() : ""}
      ${state.tab === "game" ? renderGame() : ""}
      ${renderNav()}
      ${state.toast ? `<div class="toast"><span class="toast-icon">${icons.bell}</span><div class="toast-body"><strong>${escapeHtml(state.toast.title)}</strong><span>${escapeHtml(state.toast.body)}</span></div></div>` : ""}
      ${renderDatalists()}
    </section>
  `;
  bindEvents();
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand-row">
        <div class="brand">
          <div class="logo">${icons.train}</div>
          <div>
            <h1 class="brand-title">${state.lang === "kn" ? "ನಮ್ಮ ಸ್ಟಾಪ್" : "Namma Stop"}</h1>
            <p class="brand-subtitle">${tt("subtitle")}</p>
          </div>
        </div>
        <div class="language-switch" aria-label="${tt("language")}">
          <button class="${state.lang === "en" ? "active" : ""}" data-action="lang" data-lang="en" aria-label="English">EN</button>
          <button class="${state.lang === "kn" ? "active" : ""}" data-action="lang" data-lang="kn" aria-label="Kannada">ಕ</button>
        </div>
      </div>
    </header>
  `;
}

function renderHome() {
  return `
    <section class="content">
      <h2 class="hero-title">${tt("hero")}</h2>
      <p class="hero-copy">${tt("heroCopy")}</p>
      <div class="badge-row">
        <span class="badge"><span class="badge-dot"></span>${tt("independent")}</span>
        <span class="badge">${tt("beta")}</span>
      </div>

      <section class="panel">
        <div class="toggle-row">
          <button class="${state.mode === "station" ? "active" : ""}" data-action="mode" data-mode="station">${icons.train} ${tt("station")}</button>
          <button class="${state.mode === "place" ? "active" : ""}" data-action="mode" data-mode="place">${icons.pin} ${tt("place")}</button>
        </div>
        <div class="form-stack">
          <div class="field">
            <label for="fromInput">${tt("from")}</label>
            <div class="field-row">
              <div class="input-wrap">
                <span class="input-icon">${icons.train}</span>
                <input id="fromInput" list="stationList" value="${escapeAttribute(state.fromInput)}" autocomplete="off">
              </div>
              <button class="icon-button" data-action="locate" aria-label="${tt("useMyLocation")}">${icons.locate}</button>
              <button class="swap-button" data-action="swap" aria-label="Swap">${icons.swap}</button>
            </div>
          </div>
          <div class="field">
            <label for="toInput">${state.mode === "place" ? tt("toPlace") : tt("toStation")}</label>
            <div class="input-wrap">
              <span class="input-icon">${state.mode === "place" ? icons.pin : icons.search}</span>
              <input id="toInput" list="${state.mode === "place" ? "placeList" : "stationList"}" value="${escapeAttribute(state.toInput)}" autocomplete="off">
            </div>
          </div>
          <button class="primary-button" data-action="find">${icons.route}${tt("findRoute")}</button>
        </div>
        <div class="quick-grid">
          ${["Majestic", "MG Road", "RV Road", "Electronic City", "Lalbagh"].map((name) => `
            <button class="chip" data-action="quick" data-value="${escapeAttribute(name)}">${escapeHtml(name)}</button>
          `).join("")}
        </div>
      </section>

      ${state.route ? renderRouteCard(state.route) : ""}
      ${renderRecent()}
      <p class="tiny-note">${tt("notOfficial")}</p>
    </section>
  `;
}

function renderRouteCard(route) {
  const from = route.stations[0];
  const to = route.stations[route.stations.length - 1];
  const firstLine = route.edges[0];
  const finalLine = route.edges[route.edges.length - 1];
  return `
    <section class="route-card">
      <div class="route-head">
        <div>
          <p class="route-meta">${tt("chooseRoute")}</p>
          <h3 class="route-title">${stationLabel(from)} → ${stationLabel(to)}</h3>
          <p class="route-meta">${routeSummary(route)}</p>
        </div>
        <span class="confidence">${tt("highConfidence")}</span>
      </div>
      ${route.destinationPlace ? `<p class="change-item">${tt("placeNearest")}: ${stationLabel(to)}</p>` : ""}
      <div class="route-line">
        <span class="route-stop"></span>
        <span class="route-segment ${lineConfig[firstLine].css}"></span>
        ${route.changes.length ? `<span class="route-stop"></span><span class="route-segment ${lineConfig[finalLine].css}"></span>` : ""}
        <span class="route-stop"></span>
      </div>
      <div class="change-list">
        ${route.changes.length ? route.changes.map((change) => `
          <div class="change-item">${tt("interchangeAt")} ${stationLabel(change.stationId)} · ${lineLabel(change.toLine)}</div>
        `).join("") : `<div class="change-item">${tt("noChange")} · ${lineLabel(firstLine)}</div>`}
      </div>
      <div style="margin-top: 14px;">
        <button class="primary-button" data-action="start">${icons.bell}${tt("startReminder")}</button>
      </div>
    </section>
  `;
}

function renderRecent() {
  return `
    <section class="panel compact">
      <h3 class="panel-title">${tt("recentTrips")}</h3>
      <div class="recent-list">
        ${state.recent.length ? state.recent.map((trip, index) => `
          <div class="recent-item">
            <div>
              <p class="recent-title">${stationLabel(trip.from)} → ${stationLabel(trip.to)}</p>
              <p class="recent-subtitle">${trip.label ? escapeHtml(trip.label) : ""}</p>
            </div>
            <button class="mini-button" data-action="recent" data-index="${index}">${tt("startFrom")}</button>
          </div>
        `).join("") : `<p class="empty">${tt("noRecent")}</p>`}
      </div>
    </section>
  `;
}

function renderTrip() {
  if (!state.route) {
    return `
      <section class="content">
        <section class="panel">
          <p class="empty">${tt("selectError")}</p>
          <button class="primary-button" data-action="tab" data-tab="home" style="margin-top: 12px;">${tt("home")}</button>
        </section>
      </section>
    `;
  }

  const route = state.route;
  const destinationIndex = route.stations.length - 1;
  const nextIndex = Math.min(state.currentIndex + 1, destinationIndex);
  const stopsLeft = Math.max(0, destinationIndex - state.currentIndex);
  const progress = destinationIndex === 0 ? 100 : Math.round((state.currentIndex / destinationIndex) * 100);
  const line = currentLineAt(state.currentIndex);
  const nextAlert = stopsLeft <= state.alertStops ? tt("destinationNext") : `${stopsLeft - state.alertStops} ${tt("stops")}`;

  return `
    <section>
      <div class="trip-hero">
        <div class="status-line">
          <span class="status-pill"><span class="badge-dot"></span>${state.weakSignal ? tt("estimating") : tt("tracking")}</span>
          <button class="signal-button" data-action="weak">${tt("toggleSignal")}</button>
        </div>
        <p class="next-label">${tt("nextStop")}</p>
        <h2 class="next-station">${stationLabel(route.stations[nextIndex])}</h2>
        <div class="trip-stats">
          <div class="stat"><strong>${stopsLeft}</strong><span>${tt("stopsLeft")}</span></div>
          <div class="stat"><strong>${Math.max(0, Math.round(stopsLeft * 2.15))}</strong><span>${tt("eta")}</span></div>
          <div class="stat"><strong>${line ? lineConfig[line][state.lang] : "-"}</strong><span>${tt("lineNow")}</span></div>
        </div>
        <div class="train-track">
          <div class="train-progress" style="width: ${progress}%"></div>
          <div class="train-icon" style="left: ${progress}%">${icons.train}</div>
        </div>
      </div>
      <div class="content">
        <section class="panel compact">
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("nextAlert")}</strong>
              <span>${escapeHtml(nextAlert)}</span>
            </div>
            <span class="line-pill ${line ? lineConfig[line].css : "purple"}">${line ? lineLabel(line) : tt("ready")}</span>
          </div>
          <div class="trip-actions">
            <button class="secondary-button" data-action="advance">${icons.arrow}${tt("advance")}</button>
            <button class="danger-button" data-action="stop">${tt("stopTrip")}</button>
          </div>
        </section>

        <section class="panel compact">
          <h3 class="panel-title">${tt("journeyPath")}</h3>
          ${renderStationPath()}
        </section>
      </div>
    </section>
  `;
}

function renderStationPath() {
  const route = state.route;
  return `
    <div class="station-list">
      ${route.stations.map((stationId, index) => {
        const line = route.edges[Math.min(index, route.edges.length - 1)] || route.edges[0];
        const change = route.changes.find((item) => item.stationId === stationId);
        const cls = index < state.currentIndex ? "done" : index === state.currentIndex ? "current" : (index - state.currentIndex <= state.alertStops && index > state.currentIndex ? "alert" : "");
        return `
          <div class="station-row ${cls}">
            <span class="station-dot"></span>
            <div style="min-width: 0; flex: 1;">
              <p class="station-name">${stationLabel(stationId)}</p>
              <p class="station-detail">${change ? `${tt("interchangeAt")} · ${lineLabel(change.toLine)}` : lineLabel(line)}</p>
            </div>
            ${change ? `<span class="line-pill ${lineConfig[change.toLine].css}">${lineConfig[change.toLine][state.lang]}</span>` : ""}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderGame() {
  if (!state.game.current) {
    state.game.current = generateQuestion();
  }
  const spec = state.game.current;
  const view = questionView(spec);
  return `
    <section class="content">
      <h2 class="hero-title">${tt("gameTitle")}</h2>
      <p class="hero-copy">${tt("gameTagline")}</p>
      <div class="badge-row">
        <span class="badge">${tt("score")}: ${state.game.score}</span>
        <span class="badge">${tt("streak")}: ${state.game.streak}</span>
        <span class="badge">${tt("best")}: ${state.game.bestStreak}</span>
      </div>
      <section class="panel">
        <p class="quiz-question">${escapeHtml(view.prompt)}</p>
        <div class="quiz-options">
          ${view.options
            .map((option, index) => {
              let cls = "quiz-option";
              if (state.game.answered) {
                if (index === spec.correctIndex) cls += " correct";
                else if (index === state.game.selectedIndex) cls += " wrong";
              }
              return `<button class="${cls}" data-action="answer" data-index="${index}" ${state.game.answered ? "disabled" : ""}>${escapeHtml(option)}</button>`;
            })
            .join("")}
        </div>
        ${
          state.game.answered
            ? `
          <p class="quiz-feedback ${state.game.selectedIndex === spec.correctIndex ? "good" : "bad"}">${state.game.selectedIndex === spec.correctIndex ? tt("correct") : tt("wrong")}</p>
          <button class="primary-button" data-action="nextQuestion">${tt("nextQuestion")}</button>
        `
            : ""
        }
      </section>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="content">
      <h2 class="hero-title" style="font-size: clamp(2rem, 10vw, 2.8rem);">${tt("settings")}</h2>
      <section class="panel">
        <h3 class="panel-title">${tt("reminderSettings")}</h3>
        <div class="settings-list">
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("alertTiming")}</strong>
              <span>${state.alertStops === 1 ? tt("oneStop") : tt("twoStops")}</span>
            </div>
            <button class="mini-button" data-action="alertStops">${state.alertStops === 1 ? "1" : "2"}</button>
          </div>
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("interchangeAlerts")}</strong>
              <span>${tt("interchangeAlertsHint")}</span>
            </div>
            <button class="switch ${state.interchangeAlerts ? "on" : ""}" data-action="toggleInterchangeAlerts" aria-label="${tt("interchangeAlerts")}"><span></span></button>
          </div>
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("interchangeTiming")}</strong>
              <span>${state.interchangeAlertStops === 1 ? tt("oneStop") : tt("twoStops")}</span>
            </div>
            <button class="mini-button" data-action="interchangeAlertStops" ${state.interchangeAlerts ? "" : "disabled"}>${state.interchangeAlertStops === 1 ? "1" : "2"}</button>
          </div>
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("voice")}</strong>
              <span>${tt("voiceHint")}</span>
            </div>
            <button class="switch ${state.voice ? "on" : ""}" data-action="toggleVoice" aria-label="${tt("voice")}"><span></span></button>
          </div>
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("vibration")}</strong>
              <span>${tt("vibrationHint")}</span>
            </div>
            <button class="switch ${state.vibration ? "on" : ""}" data-action="toggleVibration" aria-label="${tt("vibration")}"><span></span></button>
          </div>
          <div class="settings-row">
            <div class="settings-text">
              <strong>${tt("privacy")}</strong>
              <span>${tt("privacyHint")}</span>
            </div>
            <span class="line-pill green">${tt("ready")}</span>
          </div>
        </div>
        <p class="tiny-note">${tt("permission")}</p>
        <div class="form-stack">
          <button class="secondary-button" data-action="notify">${icons.bell}${tt("requestPermission")}</button>
          <button class="primary-button" data-action="test">${icons.shield}${tt("testAlert")}</button>
        </div>
      </section>
    </section>
  `;
}

function renderNav() {
  return `
    <nav class="nav">
      <div class="nav-row">
        <button class="${state.tab === "home" ? "active" : ""}" data-action="tab" data-tab="home">${icons.train}<span>${tt("home")}</span></button>
        <button class="${state.tab === "trip" ? "active" : ""}" data-action="tab" data-tab="trip">${icons.route}<span>${tt("trip")}</span></button>
        <button class="${state.tab === "game" ? "active" : ""}" data-action="tab" data-tab="game">${icons.game}<span>${tt("play")}</span></button>
        <button class="${state.tab === "settings" ? "active" : ""}" data-action="tab" data-tab="settings">${icons.settings}<span>${tt("settings")}</span></button>
      </div>
    </nav>
  `;
}

function datalistOptions(items, labelFor) {
  return items
    .map((item) => {
      const label = labelFor(item);
      const primary = `<option value="${escapeAttribute(label)}"></option>`;
      const fallback = label !== item.en ? `<option value="${escapeAttribute(item.en)}"></option>` : "";
      return primary + fallback;
    })
    .join("");
}

function renderDatalists() {
  return `
    <datalist id="stationList">
      ${datalistOptions(stations, stationOptionLabel)}
    </datalist>
    <datalist id="placeList">
      ${datalistOptions(places, (item) => (state.lang === "kn" ? `${item.kn} · ${item.en}` : item.en))}
    </datalist>
  `;
}

function bindEvents() {
  const from = document.getElementById("fromInput");
  const to = document.getElementById("toInput");
  if (from) from.addEventListener("input", (event) => { state.fromInput = event.target.value; });
  if (to) to.addEventListener("input", (event) => { state.toInput = event.target.value; });

  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", () => {
      const action = element.dataset.action;
      if (action === "lang") setLanguage(element.dataset.lang);
      if (action === "tab") {
        state.tab = element.dataset.tab;
        render();
        scrollToTop();
      }
      if (action === "mode") {
        state.mode = element.dataset.mode;
        state.toInput = state.mode === "place" ? "Church Street" : "Majestic";
        state.route = null;
        render();
      }
      if (action === "swap") {
        const oldFrom = state.fromInput;
        state.fromInput = state.toInput;
        state.toInput = oldFrom;
        state.route = null;
        render();
      }
      if (action === "quick") {
        state.mode = "station";
        state.toInput = element.dataset.value;
        handleFindRoute();
      }
      if (action === "find") handleFindRoute();
      if (action === "start") startTrip();
      if (action === "recent") applyRecent(state.recent[Number(element.dataset.index)]);
      if (action === "advance") advanceStation();
      if (action === "stop") stopTrip();
      if (action === "weak") {
        state.weakSignal = !state.weakSignal;
        setToast(tt("ping"), state.weakSignal ? tt("estimating") : tt("tracking"));
      }
      if (action === "alertStops") {
        state.alertStops = state.alertStops === 1 ? 2 : 1;
        render();
      }
      if (action === "toggleInterchangeAlerts") {
        state.interchangeAlerts = !state.interchangeAlerts;
        render();
      }
      if (action === "interchangeAlertStops") {
        state.interchangeAlertStops = state.interchangeAlertStops === 1 ? 2 : 1;
        render();
      }
      if (action === "locate") useMyLocation();
      if (action === "answer") answerQuestion(Number(element.dataset.index));
      if (action === "nextQuestion") nextQuestion();
      if (action === "toggleVoice") {
        state.voice = !state.voice;
        render();
      }
      if (action === "toggleVibration") {
        state.vibration = !state.vibration;
        render();
      }
      if (action === "notify") requestNotifications();
      if (action === "test") {
        deviceNotice(tt("destinationNext"), stationLabel(resolveDestination()?.stationId || idify("Majestic")));
        setToast(tt("destinationNext"), stationLabel(resolveDestination()?.stationId || idify("Majestic")));
      }
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

maybeRegisterServiceWorker();
render();
