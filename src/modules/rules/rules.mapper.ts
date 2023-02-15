import { Rule } from '../../domain/rule';

const mapRawRulesToDomain = (raw: any): Rule[] => {
  try {
    const { rules } = raw;
    const mappedRules: Rule[] = rules.map((item: any) => ({
      triggerWords: item.triggerWords,
      reaction: item.reaction,
    }));

    return mappedRules;
  } catch (err) {
    throw new Error('Parse Error');
  }
};

export { mapRawRulesToDomain };
