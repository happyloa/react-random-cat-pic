import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.tsx"],
  external: ["react", "react/jsx-runtime"],
  format: ["cjs", "esm"],
  sourcemap: true,
  target: "es2020",
});
