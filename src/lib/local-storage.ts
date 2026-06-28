export function setLocalPref<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting localStorage', e);
  }
}

export function getLocalPref<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
  } catch (e) {
    console.error('Error getting localStorage', e);
  }
  return defaultValue;
}
