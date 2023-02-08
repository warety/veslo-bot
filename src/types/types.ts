import { Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

type Bot = Telegraf<Context<Update>>;

export type { Bot };
