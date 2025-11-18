# App Configuration Styling

This directory contains CSS modules and components for displaying app configuration, QR codes, and download options in Expo applications.

## Files

### `app-config.module.css`

CSS module containing styles for:

- **URL Box**: Container for displaying and copying URLs
  - `.url-box` - Flex container with gap
  - `.url-input` - Styled input field for URLs
  - `.copy-button` - Copy to clipboard button with hover effects

- **IP Configuration**: Network settings display
  - `.ip-config` - Configuration section wrapper
  - `.ip-input` - IP address input field

- **Requirements Section**: Display system requirements
  - `.requirements-section` - Green-bordered section for requirements
  - Styled lists and headings

- **App Download Section**: Mobile app download buttons
  - `.app-download-section` - Download section container
  - `.download-buttons` - Button container with flexbox layout
  - `.download-btn` - Base button styles
  - `.download-btn.ios` - iOS-specific gradient
  - `.download-btn.android` - Android-specific gradient

### `app-config.tsx`

Example React component demonstrating how to use the CSS module. This component:

- Only renders on web platform (checks `Platform.OS !== 'web'`)
- Displays requirements, URL configuration, IP settings, and download options
- Includes clipboard functionality for copying URLs
- Uses CSS modules for styling

## Usage

```tsx
import { AppConfig } from '@/components/app-config';

export default function SettingsScreen() {
  return <AppConfig />;
}
```

## Styling

The CSS uses CSS modules, so classes are scoped locally. Import and use like this:

```tsx
import styles from './app-config.module.css';

<div className={styles['url-box']}>
  <input className={styles['url-input']} />
  <button className={styles['copy-button']}>Copy</button>
</div>
```

## Notes

- These styles are designed for web platform usage
- Colors use rgba for transparency effects
- Buttons include transition effects for smooth interactions
- The download buttons are disabled by default (should be enabled based on actual availability)
