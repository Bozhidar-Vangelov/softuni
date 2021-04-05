function extractFile(str) {
  let fileName = str.substring(str.lastIndexOf("\\") + 1, str.lastIndexOf("."));
  let extension = str.substring(str.lastIndexOf(".") + 1);

  console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
