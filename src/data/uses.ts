import type { LocalizedText } from '@/lib/collections';

export interface UseItem {
  name: string;
  note?: LocalizedText;
  link?: string;
}
export interface UseGroup {
  group: Record<string, string>; // {en, id}
  icon: string;
  items: UseItem[];
}

// Edit freely — this powers /about/peripherals.
export const uses: UseGroup[] = [
  {
    group: { en: 'Desk & display', id: 'Meja & layar' },
    icon: 'lucide:monitor',
    items: [
      { name: 'Dell UltraSharp 27" 4K', note: { en: 'Main display, raised on an arm.', id: 'Layar utama, di lengan monitor.' } },
      { name: 'Flexispot standing desk' },
      { name: 'Herman Miller-style ergonomic chair' },
    ],
  },
  {
    group: { en: 'Input', id: 'Input' },
    icon: 'lucide:keyboard',
    items: [
      { name: 'Custom 65% mechanical keyboard', note: { en: 'Gateron browns, PBT caps.', id: 'Gateron brown, keycap PBT.' } },
      { name: 'Logitech MX Master 3S' },
    ],
  },
  {
    group: { en: 'Machine', id: 'Mesin' },
    icon: 'lucide:cpu',
    items: [
      { name: 'MacBook Pro (Apple Silicon)', note: { en: 'Daily driver.', id: 'Andalan sehari-hari.' } },
      { name: 'Custom Linux desktop', note: { en: 'For heavier ML work.', id: 'Untuk kerja ML yang berat.' } },
    ],
  },
  {
    group: { en: 'Audio', id: 'Audio' },
    icon: 'lucide:headphones',
    items: [{ name: 'Sony WH-1000XM5' }, { name: 'Audio-Technica ATH-M50x' }],
  },
  {
    group: { en: 'Software', id: 'Perangkat lunak' },
    icon: 'lucide:code',
    items: [
      { name: 'VS Code', note: { en: 'Editor of choice.', id: 'Editor pilihan.' } },
      { name: 'Ghostty + zsh + tmux' },
      { name: 'Figma, Obsidian, Raycast' },
    ],
  },
];
