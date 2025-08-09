import { useEffect } from 'react';

export const usePWABadge = (unreadCount: number) => {
  useEffect(() => {
    // Vérifier si l'API Badging est supportée
    if ('setAppBadge' in navigator) {
      try {
        if (unreadCount > 0) {
          // Afficher le badge avec le nombre de notifications
          (navigator as any).setAppBadge(unreadCount);
        } else {
          // Effacer le badge
          (navigator as any).clearAppBadge();
        }
      } catch (error) {
        console.log('Error setting app badge:', error);
      }
    }
  }, [unreadCount]);
};