import { Paths } from "typescript/models/nextjs";

export function addToPaths(arr: object[], paths: Paths) {
  if (!paths) throw `addToPaths function. 'Paths' is null`;

  if (paths.length === 0) {
    return arr.map((newParam) => ({
      params: { ...newParam },
    }));
  }

  return paths.reduce((newPaths: Paths, param) => {
    const newContext = arr.map((el) => ({
      params: { ...param.params, ...el },
    }));

    return newPaths.concat(newContext);
  }, []);
}

export function createParamsObjects(keyName: string, values: any[]) {
  return values.map((el: any) => ({ [keyName]: el }));
}
