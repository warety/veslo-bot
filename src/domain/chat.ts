type ChatType = 'private' | 'group' | 'supergroup' | 'channel';

type Chat = {
  id: string;
  name: string;
  type: ChatType;
};

export type { Chat, ChatType };
