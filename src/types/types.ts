import TelegramBot from 'node-telegram-bot-api';

type Bot = TelegramBot;

type BotMessage = TelegramBot.Message;

type BotMetadata = TelegramBot.Metadata;

type BotListener = (msg: BotMessage, metadata: BotMetadata) => void;

type Action = 'sendMessage' | 'sendSticker';

export type { Bot, Action, BotMessage, BotMetadata, BotListener };
