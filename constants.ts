
import { Theme } from './types';

export enum PlayerRole {
  Guard = "The Guard",
  Fugitive = "The Fugitive",
  Child = "The Child",
  Wanderer = "The Wanderer",
}

export const PLAYER_ROLES_ARRAY: PlayerRole[] = [
  PlayerRole.Guard,
  PlayerRole.Fugitive,
  PlayerRole.Child,
  PlayerRole.Wanderer,
];

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';

export const DEFAULT_THEME: Theme = {
  bg: "bg-slate-900",
  text: "text-slate-100",
  font: "font-sans",
  accent: "border-slate-500",
  buttonBg: "bg-slate-700",
  buttonHoverBg: "hover:bg-slate-600",
  buttonText: "text-slate-100",
};

export const ROLE_THEMES: Record<PlayerRole, Theme> = {
  [PlayerRole.Guard]: { 
    bg: "bg-slate-800", text: "text-slate-100", font: "font-serif", accent: "border-blue-400",
    buttonBg: "bg-blue-600", buttonHoverBg: "hover:bg-blue-500", buttonText: "text-white" 
  },
  [PlayerRole.Fugitive]: { 
    bg: "bg-emerald-900", text: "text-emerald-100", font: "font-sans", accent: "border-green-400",
    buttonBg: "bg-green-700", buttonHoverBg: "hover:bg-green-600", buttonText: "text-white"
  },
  [PlayerRole.Child]: { 
    bg: "bg-stone-700", text: "text-stone-100", font: "font-sans", accent: "border-yellow-400",
    buttonBg: "bg-yellow-600", buttonHoverBg: "hover:bg-yellow-500", buttonText: "text-stone-900"
   },
  [PlayerRole.Wanderer]: { 
    bg: "bg-indigo-900", text: "text-indigo-100", font: "font-mono", accent: "border-purple-400",
    buttonBg: "bg-purple-700", buttonHoverBg: "hover:bg-purple-600", buttonText: "text-white"
  },
};
