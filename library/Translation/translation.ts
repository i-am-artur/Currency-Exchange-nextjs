import mustache from "mustache";
import { Translate } from "./ts";
import { AnyObject } from "../../typescript/models/common";

export function translation(language: string) {
  if (!language) throw `Translation 'language' required`;

  const t: Translate = (context, args) => {
    const translation = context[language];

    return mustache.render(translation, args);
  };

  return t;
}
