import { DestinationPreset, EditGoal } from '../projects/project.types';

export const DESTINATION_PRESETS: DestinationPreset[] = [
  { id: "instagram-story", label: "Story Instagram", category: "social", aspectRatio: "9:16", recommendedWidth: 1080, recommendedHeight: 1920, exportFormat: "webp", quality: 90 },
  { id: "instagram-feed-square", label: "Feed Instagram", category: "social", aspectRatio: "1:1", recommendedWidth: 1080, recommendedHeight: 1080, exportFormat: "webp", quality: 90 },
  { id: "reels", label: "Reels", category: "social", aspectRatio: "9:16", recommendedWidth: 1080, recommendedHeight: 1920, exportFormat: "webp", quality: 90 },
  { id: "tiktok", label: "TikTok", category: "social", aspectRatio: "9:16", recommendedWidth: 1080, recommendedHeight: 1920, exportFormat: "webp", quality: 90 },
  { id: "facebook", label: "Facebook", category: "social", aspectRatio: "1.91:1", recommendedWidth: 1200, recommendedHeight: 628, exportFormat: "jpeg", quality: 85 },
  { id: "whatsapp-status", label: "WhatsApp Status", category: "social", aspectRatio: "9:16", recommendedWidth: 1080, recommendedHeight: 1920, exportFormat: "webp", quality: 80 },
  { id: "marketplace", label: "Marketplace", category: "ecommerce", aspectRatio: "1:1", recommendedWidth: 1200, recommendedHeight: 1200, exportFormat: "webp", quality: 90 },
  { id: "shopee", label: "Shopee", category: "ecommerce", aspectRatio: "1:1", recommendedWidth: 1200, recommendedHeight: 1200, exportFormat: "jpeg", quality: 85 },
  { id: "mercado-livre", label: "Mercado Livre", category: "ecommerce", aspectRatio: "1:1", recommendedWidth: 1200, recommendedHeight: 1200, exportFormat: "jpeg", quality: 85 },
  { id: "linkedin", label: "LinkedIn", category: "professional", aspectRatio: "1.91:1", recommendedWidth: 1200, recommendedHeight: 627, exportFormat: "jpeg", quality: 90 },
  { id: "pinterest", label: "Pinterest", category: "social", aspectRatio: "2:3", recommendedWidth: 1000, recommendedHeight: 1500, exportFormat: "webp", quality: 90 },
  { id: "youtube-thumbnail", label: "Thumbnail YouTube", category: "social", aspectRatio: "16:9", recommendedWidth: 1280, recommendedHeight: 720, exportFormat: "jpeg", quality: 90 },
  { id: "banner", label: "Banner", category: "print", aspectRatio: "3:1", recommendedWidth: 1920, recommendedHeight: 640, exportFormat: "jpeg", quality: 95 },
  { id: "outdoor", label: "Outdoor", category: "print", aspectRatio: "4:1", recommendedWidth: 3840, recommendedHeight: 960, exportFormat: "jpeg", quality: 95 },
  { id: "business-card", label: "Cartão de Visita", category: "print", aspectRatio: "1.75:1", recommendedWidth: 1050, recommendedHeight: 600, exportFormat: "jpeg", quality: 95 },
  { id: "wallpaper", label: "Wallpaper", category: "personal", aspectRatio: "16:9", recommendedWidth: 1920, recommendedHeight: 1080, exportFormat: "png", quality: 100 }
];

export const GOAL_PRESETS: EditGoal[] = [
  { id: "improve-quality", label: "Melhorar qualidade" },
  { id: "create-background", label: "Criar fundo" },
  { id: "remove-background", label: "Remover fundo" },
  { id: "upscale", label: "Aumentar resolução" },
  { id: "fix-lighting", label: "Corrigir iluminação" },
  { id: "hdr", label: "HDR" },
  { id: "remove-objects", label: "Remover objetos" },
  { id: "remove-people", label: "Remover pessoas" },
  { id: "create-ad", label: "Criar propaganda" },
  { id: "premium", label: "Foto Premium" },
  { id: "real-estate", label: "Foto Imobiliária" },
  { id: "restaurant", label: "Foto Restaurante" },
  { id: "ecommerce", label: "Foto E-commerce" },
  { id: "cinematic", label: "Foto Cinematográfica" },
  { id: "style-apple", label: "Estilo Apple" },
  { id: "style-nike", label: "Estilo Nike" },
  { id: "style-ferrari", label: "Estilo Ferrari" },
  { id: "minimalist", label: "Minimalista" }
];
