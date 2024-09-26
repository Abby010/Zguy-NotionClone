import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Loader } from "./Loader";
import styles from "../utils.module.css";

type FileImageProps = {
  filePath: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const FileImage = ({ filePath, ...props }: FileImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("File path:", filePath);  // Debug the file path being passed
  
    const getImageUrl = async (filePath: string) => {
      if (!filePath) return;
  
      setLoading(true);
  
      const { data } = supabase.storage.from("images").getPublicUrl(filePath);

      if (data?.publicUrl) {
        setImageUrl(data.publicUrl);
      } else {
        console.error("Public URL not available for the file.");
      }
      
  
      if (Error) {
        console.error("Error fetching public URL:", Error);
        setLoading(false);
        return;
      }
  
      if (data?.publicUrl) {
        setImageUrl(data.publicUrl);
      } else {
        console.error("Public URL not available for the file.");
      }
  
      setLoading(false);
    };
  
    getImageUrl(filePath);
  }, [filePath]);
  

  if (loading) {
    return (
      <div className={styles.centeredFlex}>
        <Loader />
      </div>
    );
  }

  // Render the image if URL is available, otherwise render nothing
  return imageUrl ? <img src={imageUrl} alt="Uploaded Image" {...props} /> : null;
};
