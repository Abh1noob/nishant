import React from 'react';
import axios from 'axios';



async function uploadFileToPresignedUrl(productName: string, fileLocation: string) {
  const presignedUrl =
    'https://0y7hpetw0k.execute-api.ap-south-1.amazonaws.com/prod';
  const presignedPayload = {
    bucket_name: 'productscreated',
    object_key: productName,
  };
  const presignedHeaders = {
    'x-api-key': 'V0n2XybVuO1Ooyg9WPtRE3uv8BRsw05e1PxYvv1s',
  };

  console.log(fileLocation);
  console.log('productName', productName);

  try {
    // Step 1: Generate Presigned URL for obj
    const presignedResponse = await axios.post(presignedUrl, presignedPayload, {
      headers: presignedHeaders,
    });
    console.log(presignedResponse); // Check the status code
    const presignedData = presignedResponse.data;
    console.log(presignedData);

    // Extract the presigned URL from the response
    const presignedUploadUrl = presignedData.presigned_url;

    // Step 2: Use Presigned URL to Upload Data
    const uploadHeaders = {
      'Content-Type': 'application/json',
    };

    const uploadResponse = await axios.put(presignedUploadUrl, fileLocation, {
      headers: uploadHeaders,
    });
    console.log(uploadResponse.status); // Check the status code
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

// Function to generate a presigned URL and upload the file
const SaveProduct = async (
  fileName: string,
  fileLocation: string,
  typeofProduct: string,
  selectedCategory: string,
  productName: string,
  imageblob: Blob // Add type annotation here
): Promise<void> => {

 const modelname = productName+".gltf"
 const imagename = productName + '.png';
  try {
  
    uploadFileToPresignedUrl(modelname , fileLocation);
    uploadFileToPresignedUrl(imagename , imageblob.toString()); // Convert Blob to string


    // Step 3: Call the additional API after file is successfully saved
    const apiUrl =
      'https://ei644awhn1.execute-api.ap-south-1.amazonaws.com/prod';
    const apiPayload = {
      user_id: 'abc',
      location: 'huhi',
      type_of_product: typeofProduct,
      name: productName,
    };

    const apiHeaders = {
      'Content-Type': 'application/json',
    };

    const apiResponse = await axios.post(apiUrl, apiPayload, {
      headers: apiHeaders,
    });
    console.log(apiResponse.data);

    // Show a popup (alert) once the file is successfully saved
    window.alert('File saved successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};

export default SaveProduct;
