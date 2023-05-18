import { useCallback } from "react";
import Image from "next/image";

import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
   var cloudinary: any;
}

interface Props {
   onChange: (value: string) => void;
   value: string;
}

export const ImageUpload = ({ onChange, value }: Props) => {
   const handleUpload = useCallback(
      (result: any) => {
         onChange(result.info.secure_url);
      },
      [onChange]
   );
   return <CldUploadWidget />;
};
