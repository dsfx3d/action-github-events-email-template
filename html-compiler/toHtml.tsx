import {inlineCss} from "./inlineCss";
import posthtml from "posthtml";
import removeAttributes from "posthtml-remove-attributes";

export async function toHtml({
  body,
  css,
}: {
  body: string;
  css: string;
}): Promise<string> {
  const template = `<!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      </style>
      <![endif]-->
      <title>The Website Weekly Newsletter</title>
    </head>
    <body>
      ${inlineCss({
        html: body,
        css,
      })}
    </body>
    </html>`;
  const {html} = await posthtml()
    .use(removeAttributes(["class"]))
    .process(template);
  return html;
}
