const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
// pass the link directly
getLinkPreview("https://www.youtube.com/watch?v=MejbOFk7H6c").then((data) =>
  console.debug(data)
);
