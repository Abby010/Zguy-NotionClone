import { supabase } from "../supabaseClient"
import { v4 as uuidv4 } from 'uuid';

export const uploadImage = async (file?: File) => {
  try {
    if (!file) {
      throw new Error("You must select an image to upload");
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;  // Use UUID for a more unique file name
    const filePath = `images/${fileName}`;

    const { error } = await supabase.storage.from("images").upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    return { filePath, fileName };
  } catch (e) {
    alert(e);
  }
};

