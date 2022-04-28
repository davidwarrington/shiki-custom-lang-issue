import shiki from 'shiki';
import liquidDef from './liquid.tmLanguage.js';

(async () => {
  const lang = {
    id: 'liquid',
    scopeName: 'text.html.liquid',
    grammar: liquidDef,
  }

  const highlighter = await shiki.getHighlighter({ theme: 'nord' })
  await highlighter.loadLanguage(lang)

  const result = highlighter.codeToHtml(
    `
      {%- comment -%}
        Hello!
      {%- endcomment -%}

      {%- render 'component' -%}
    `,
    { lang: 'liquid' },
  )

  console.log(result);
})()
