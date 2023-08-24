import {buildSync} from "esbuild";

buildSync({
  entryPoints: ["bin.ts"],
  bundle: true,
  outfile: "action.js",
  platform: "node",
  target: "node16",
  minify: true,
  sourcemap: false,
  logLevel: "error",
  external: ["jsdom"],
});
