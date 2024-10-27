import ImagePicker from "react-native-image-crop-picker";
const openGallery = async () => {
  const image = await ImagePicker.openPicker({
    includeBase64: true,
    multiple: true,
  });
  return image;
};

const openCamera = async () => {
  const image = await ImagePicker.openCamera({
    width: 300,
    height: 300,
    cropping: true,
    includeBase64: true,
  });
  return image;
};
export {openCamera, openGallery};
