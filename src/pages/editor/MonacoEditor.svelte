<script lang="ts">
  import { onMount } from 'svelte';
  import * as monaco from 'monaco-editor';
  import theme from 'monaco-themes/themes/Monokai.json';

  export let value = '';

  let editorContainer: HTMLDivElement;

  onMount(() => {
    // @ts-ignore
    monaco.editor.defineTheme('monokai', theme);

    const editor = monaco.editor.create(editorContainer, {
      value: value,
      language: 'markdown',
      automaticLayout: true,
      theme: 'monokai',
      scrollBeyondLastLine: false,
      minimap: {
        enabled: true,
      },
      wordWrap: 'on'
    });

    editor.onDidChangeModelContent(() => {
      const event = new CustomEvent('editor-change', {
        detail: editor.getValue()
      })
      window.dispatchEvent(event);
    });

    return () => {
      editor.dispose();
    };
  });
</script>

<div bind:this={editorContainer}></div>
