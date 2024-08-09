import { cache } from "react";
import { createCallerFactory } from "@/server/trpc";
import { router } from "@/server/routers";

const createCaller = createCallerFactory(router);

export const createRscTrpcCaller = cache(async () => {
  const trpcFnMap = new Map();
  function proxyWithCache(target: any, path: string): any {
    return new Proxy(target, {
      get(_obj, key) {
        if (typeof key !== "string" || key === "then" || key === "apply") {
          return _obj[key];
        }
        return proxyWithCache(_obj[key], `${path}-${key}`);
      },
      apply: function (target, thisArg, argumentsList) {
        if (!trpcFnMap.get(path)) {
          trpcFnMap.set(path, cache(target));
        }
        const result = Reflect.apply(
          trpcFnMap.get(path),
          thisArg,
          argumentsList,
        );
        return result;
      },
    });
  }
  // const session = await rscAuth()
  const caller = createCaller({
    // user: session?.user as any,
  });
  return proxyWithCache(caller, "") as typeof caller;
});
