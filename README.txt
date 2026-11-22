ULTRA WHITE — YOHAN'S PERSONAL MONSTER CHECK-IN
================================================

WHAT'S INCLUDED
- A dark, Ultra White-inspired personal fan concept.
- Your name (Yohan).
- "Did you drink Monster today?" with Yes / Not Today buttons.
- No external images, fonts, APIs, or secrets required.

REQUIREMENTS
- Windows 10/11
- Node.js LTS (20 or newer recommended)
- An Expo account for EAS cloud builds
- Sideloadly for installing the IPA

RUN LOCALLY
1. Extract this folder.
2. Open a terminal in this folder.
3. Run:
     npm install
     npx expo start
4. Install Expo Go on your iPhone and scan the QR code (same Wi-Fi).
   This previews the app; it is not an IPA.

BUILDING AN IPHONE IPA
IMPORTANT: An iPhone-installable IPA needs a valid Apple signing method.
Expo's standard EAS internal iOS device builds require Apple signing credentials
and generally an active Apple Developer Program membership for ad-hoc device
distribution. A free Apple ID used by Sideloadly does not make EAS produce an
unsigned device IPA by itself.

If you have Apple Developer Program membership:
1. Install EAS CLI:
     npm install --global eas-cli
2. Log in:
     eas login
3. From this folder, run:
     eas build --platform ios --profile preview
4. Follow the prompts to configure iOS signing credentials.
5. When the cloud build finishes, download the .ipa from the build page.
6. Open Sideloadly on Windows, connect your iPhone by USB, drag the IPA into
   Sideloadly, enter your Apple ID, and press Start.
7. Trust the developer profile on iPhone if iOS asks:
   Settings > General > VPN & Device Management.

SIDeloadly NOTES
- Download Sideloadly only from https://sideloadly.io/
- Its official FAQ explains Windows iTunes/iCloud requirements.
- Free Apple ID sideloads typically expire after 7 days and need refreshing.
- Use Apple's web installers for iTunes and iCloud if Sideloadly cannot detect
  your device; avoid Microsoft Store versions if they cause driver issues.

CUSTOMIZE YOUR NAME
Open App.js and replace the two occurrences of "Yohan" / "YOHAN".
To change the app's display name, edit expo.name in app.json.
To change its bundle identifier, edit expo.ios.bundleIdentifier before your
first signed build.

BRAND NOTE
This is an independent personal fan concept and is not affiliated with or
endorsed by Monster Energy. The M-shaped lettering is original decorative
typography, not an official Monster logo.
