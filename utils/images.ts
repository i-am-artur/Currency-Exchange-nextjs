import { basePath } from "./routing";

export function publicImage(src: string) {
  return `${basePath()}/images/${src}`;
}
