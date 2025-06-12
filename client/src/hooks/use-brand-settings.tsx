import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { 
  fetchBrandSettings, 
  applyBrandSettings, 
  defaultBrandSettings,
  type BrandSettings 
} from '@/lib/sanity/brand-settings';

export function useBrandSettings() {
  const { data: brandSettings, isLoading, error } = useQuery<BrandSettings | null>({
    queryKey: ['brand-settings'],
    queryFn: fetchBrandSettings,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });

  // Apply brand settings when they change
  useEffect(() => {
    const settings = brandSettings || defaultBrandSettings;
    applyBrandSettings(settings);
  }, [brandSettings]);

  return {
    brandSettings: brandSettings || defaultBrandSettings,
    isLoading,
    error,
    refresh: () => {
      // Trigger a refetch of brand settings
      window.location.reload();
    }
  };
}

// Brand Settings Provider Component
export function BrandSettingsProvider({ children }: { children: React.ReactNode }) {
  useBrandSettings();
  
  return <>{children}</>;
}