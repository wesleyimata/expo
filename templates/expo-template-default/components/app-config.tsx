import { Platform } from 'react-native';

import styles from './app-config.module.css';

/**
 * AppConfig component for web platform
 * Displays URL configuration, IP settings, requirements, and app download options
 *
 * Note: This component is only rendered on web platform.
 * The styles from app-config.module.css are designed for web use.
 */
export function AppConfig() {
  if (Platform.OS !== 'web') {
    return null;
  }

  const handleCopyUrl = () => {
    const urlInput = document.querySelector<HTMLInputElement>(`.${styles['url-input']}`);
    if (urlInput) {
      navigator.clipboard.writeText(urlInput.value);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Requirements Section */}
      <div className={styles['requirements-section']}>
        <h3>Requirements</h3>
        <ul>
          <li>✓ Node.js 18 or later</li>
          <li>✓ Expo Go app installed on your mobile device</li>
          <li>✓ Device and computer on the same network</li>
        </ul>
      </div>

      {/* URL Configuration */}
      <div className={styles['url-box']}>
        <input
          type="text"
          className={styles['url-input']}
          value="exp://192.168.1.100:8081"
          readOnly
        />
        <button className={styles['copy-button']} onClick={handleCopyUrl}>
          Copy URL
        </button>
      </div>

      {/* IP Configuration */}
      <div className={styles['ip-config']}>
        <label>
          <strong>Custom IP Address</strong>
          <input
            type="text"
            className={styles['ip-input']}
            placeholder="Enter your IP address (e.g., 192.168.1.100)"
          />
          <small>Use this if automatic network detection fails</small>
        </label>
      </div>

      {/* App Download Section */}
      <div className={styles['app-download-section']}>
        <h3>Download Expo Go</h3>
        <div className={styles['download-buttons']}>
          <button className={`${styles['download-btn']} ${styles.ios}`} disabled>
            Download for iOS
          </button>
          <button className={`${styles['download-btn']} ${styles.android}`} disabled>
            Download for Android
          </button>
        </div>
        <small>Download Expo Go from the App Store or Google Play Store</small>
      </div>
    </div>
  );
}
