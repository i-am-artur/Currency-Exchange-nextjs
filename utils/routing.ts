import { useRouter } from "next/router";

export function basePath() {
  return useRouter().basePath;
}
