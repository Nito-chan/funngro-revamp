import type { LucideIcon } from "lucide-react";
import {
  Wallet,
  Sparkles,
  FolderOpen,
  TrendingUp,
  Megaphone,
  Users,
  ListChecks,
  Share2,
  Film,
  LayoutTemplate,
  Mic,
  Smartphone,
  GraduationCap,
  ClipboardList,
  Table2,
  AudioLines,
  PenLine,
  PenTool,
  AppWindow,
  Clapperboard,
  Package,
  Lightbulb,
  ShoppingCart,
  RefreshCw,
  Handshake,
  CheckCheck,
  Quote,
  MapPin,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";

/**
 * Single icon registry for the whole site.
 *
 * Icons are named as plain strings in the data layer so copy stays portable
 * and data files never import from lucide. Mapping them here keeps the import
 * graph one-directional: data -> components -> lucide.
 */

const icons = {
  wallet: Wallet,
  sparkles: Sparkles,
  folder: FolderOpen,
  trending: TrendingUp,
  megaphone: Megaphone,
  users: Users,
  "list-checks": ListChecks,
  "share-2": Share2,
  film: Film,
  layout: LayoutTemplate,
  mic: Mic,
  smartphone: Smartphone,
  "graduation-cap": GraduationCap,
  "clipboard-list": ClipboardList,
  table: Table2,
  "audio-lines": AudioLines,
  "pen-line": PenLine,
  "pen-tool": PenTool,
  "app-window": AppWindow,
  clapperboard: Clapperboard,
  package: Package,
  lightbulb: Lightbulb,
  "shopping-cart": ShoppingCart,
  "refresh-cw": RefreshCw,
  handshake: Handshake,
  "check-check": CheckCheck,
  quote: Quote,
  "map-pin": MapPin,
  "file-check": FileCheck,
  shield: ShieldCheck,
  "arrow-right": ArrowRight,
  zap: Zap,
  target: Target,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function getIcon(name: string): LucideIcon {
  return (icons as Record<string, LucideIcon>)[name] ?? icons.zap;
}