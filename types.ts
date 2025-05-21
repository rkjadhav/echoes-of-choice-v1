
import { PlayerRole } from './constants';

export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;
  codexEntry?: Omit<MemoryEntry, 'id' | 'timestamp' | 'role'>;
  notification?: string;
}

export interface StoryNodeData {
  id: string;
  text: string; // Can be a placeholder for Gemini, or static text
  choices: Choice[];
  isEnding?: boolean; // If true, text might be an epilogue
  onEnterNotification?: string;
}

export type StoryPath = Record<string, StoryNodeData>; // Keyed by node ID

export interface RoleStory {
  introPrompt: string; // Prompt for Gemini to generate initial scene
  story: StoryPath;
  startNodeId: string;
}

export type GameStory = Partial<Record<PlayerRole, RoleStory>>; // Partial to allow defining one role

export interface MemoryEntry {
  id: string;
  role: PlayerRole;
  text: string;
  type: 'personal' | 'echo' | 'shared_outcome';
  timestamp: number;
}

export type CodexLog = MemoryEntry[];

export interface Theme {
  bg: string;
  text: string;
  font: string;
  accent: string;
  buttonBg: string;
  buttonHoverBg: string;
  buttonText: string;
}

export interface AppState {
  apiKeyFound: boolean;
  currentScreen: 'api_check' | 'role_selection' | 'narrative' | 'epilogue' | 'loading_gemini';
  selectedRole: PlayerRole | null;
  currentNodeId: string | null;
  codex: CodexLog;
  notifications: Array<{ id: number; message: string }>;
  storyContent: string; 
  currentChoices: Choice[];
  theme: Theme;
}
