import TelegramBot from 'node-telegram-bot-api';

type Bot = TelegramBot;

type Action = 'sendMessage' | 'sendSticker';

export type { Bot, Action };
