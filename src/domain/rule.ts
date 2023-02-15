type Reaction = {
  message?: string;
  action: string;
};

type Rule = {
  triggerWords: string[];
  reaction: Reaction;
};

export type { Reaction, Rule };
