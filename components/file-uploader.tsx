"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";

const FileUploader = () => {
  const [file, setFile] = useState<string | undefined>(undefined);

  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles) {
      const url = convertFileToUrl(acceptedFiles[0]);
      setFile(url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const renderContent = () => {
    if (file) {
      return <img src={file} className="file-uploader-img" />;
    } else {
      return isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag or click to upload files</p>
      );
    }
  };

  return (
    <div {...getRootProps()} className="file-uploader-container">
      <input {...getInputProps()} name="image" />
      <Image
        src="/assets/icons/upload.svg"
        alt="logo"
        width={30}
        height={30}
        className="file-uploader-edit"
      />
      {renderContent()}
    </div>
  );
};

export default FileUploader;
