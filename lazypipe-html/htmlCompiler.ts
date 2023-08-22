import {createLazyPipe} from "@issue-notifier/lazypipe";
import {
  insertInternalStyleTag,
  minify,
  purgeInternalCss,
  wrapHtmlDocument,
} from "@issue-notifier/lazypipe-html";
import generateGitHubCss from "generate-github-markdown-css";

export const htmlCompiler = createLazyPipe(
  wrapHtmlDocument,
  insertInternalStyleTag(generateGitHubCss),
  purgeInternalCss,
  minify({
    minifyCSS: true,
  }),
);
