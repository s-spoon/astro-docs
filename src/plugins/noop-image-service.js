export default {
  // This method will return the original image URL without any modification.
  getURL({ src: options }) {
    return options.src;
  },

  // Since we don't want any image transformations, return the input image as is.
  async transform(buffer, { src: options }) {
    return { data: buffer, format: options.format };
  },

  // No custom HTML attributes; just return the basic ones.
  getHTMLAttributes({ src: options }) {
    return {
      src: options.src,
      loading: 'lazy',
      decoding: 'async',
      // width: options.width,
      // height: options.height,
      style: `aspect-ratio: ${options.width} / ${options.height}`
    };
  },
};
