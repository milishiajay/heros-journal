export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
  age?: number;
  location?: string;
  background?: string;
  goals?: string;
  diet?: string;
  avatarUrl?: string;
  occupation?: string;
  fitnessLevel?: string;
  learningGoals?: string;
  socialGoals?: string;
  financialGoals?: string;
  creativeGoals?: string;
  purposeGoals?: string;
  onboardingComplete: boolean;
  characterStats: CharacterStats[];
  journalEntries: JournalEntry[];
  quests: Quest[];
  xpTransactions: XPTransaction[];
}

export interface CharacterStats {
  id: string;
  userId: string;
  statType: StatType;
  xp: number;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  processed: boolean;
  auraResponse?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quest {
  id: string;
  userId: string;
  title: string;
  description: string;
  statType: StatType;
  status: QuestStatus;
  xpReward: number;
  createdAt: Date;
  completedAt?: Date;
  dueDate?: Date;
}

export interface XPTransaction {
  id: string;
  userId: string;
  statType: StatType;
  amount: number;
  reason: string;
  source?: string;
  sourceId?: string;
  createdAt: Date;
}

export enum StatType {
  VITALITY = 'VITALITY',
  INTELLECT = 'INTELLECT',
  CHARISMA = 'CHARISMA',
  RESOURCES = 'RESOURCES',
  CREATIVITY = 'CREATIVITY',
  PURPOSE = 'PURPOSE'
}

export enum QuestStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  PAUSED = 'PAUSED'
}

export const STAT_COLORS = {
  VITALITY: 'from-red-500 to-red-600',
  INTELLECT: 'from-blue-500 to-blue-600',
  CHARISMA: 'from-yellow-500 to-yellow-600',
  RESOURCES: 'from-green-500 to-green-600',
  CREATIVITY: 'from-purple-500 to-purple-600',
  PURPOSE: 'from-teal-500 to-teal-600'
};

export const STAT_DESCRIPTIONS = {
  VITALITY: 'Physical health, fitness, and energy',
  INTELLECT: 'Learning, knowledge, and mental growth',
  CHARISMA: 'Social skills, relationships, and communication',
  RESOURCES: 'Financial stability, career, and material wealth',
  CREATIVITY: 'Artistic expression, innovation, and imagination',
  PURPOSE: 'Meaning, spirituality, and life direction'
};