
import { GraphQLClient } from "graphql-request";
import { ProjectForm } from "@/common.types";
import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation, getProjectByIdQuery, getUserQuery, projectsQuery } from "@/graphql";
const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (err) {
    throw err;
  }
};



const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return  client.request(query, variables);
  } catch (error) {
    throw error;
  }
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      avatarUrl: avatarUrl
    },
  };
  
  return makeGraphQLRequest(createUserMutation, variables);
};
export const uploadImage = async (imagePath: string) => {
  try {
    const response =  fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({
        path: imagePath,
      }),
    });
    return (await response).json();
  } catch (error) {
    throw error;
  }
};



export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};

export const updateProject = async (form: ProjectForm, projectId: string, token: string) => {
  function isBase64DataURL(value: string) {
    const base64Regex = /^data:image\/[a-z]+;base64,/;
    return base64Regex.test(value);
  }

  let updatedForm = { ...form };

  const isUploadingNewImage = isBase64DataURL(form.image);

  if (isUploadingNewImage) {
    const imageUrl = await uploadImage(form.image);

    if (imageUrl.url) {
      updatedForm = { ...updatedForm, image: imageUrl.url };
    }
  }

  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    id: projectId,
    input: updatedForm,
  };

  return makeGraphQLRequest(updateProjectMutation, variables);
};

export const createNewProject = async (form: ProjectForm, token: string) => {
  const imageUrl = await uploadImage(form.image);
  const imageUrl1 = await uploadImage(form.image1);
  const imageUrl2 = await uploadImage(form.image2);
  const imageUrl3 = await uploadImage(form.image3);

  if (imageUrl.url) {
    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
      input: { 
        ...form, 
        image: imageUrl.url, 
        image1: imageUrl1.url,
        image2: imageUrl2.url,
        image3: imageUrl3.url,
      }
    };
    return makeGraphQLRequest(createProjectMutation, variables);
  }
};
export const FetchAllProjects =async(category?:string,endcursor?:string)=>{
  client.setHeader('x-api-key',apiKey);
  console.log("working");
  return makeGraphQLRequest(projectsQuery,{category,endcursor})
}

export const getProjectDetails =(id:string)=>{
  client.setHeader('x-api-key',apiKey);
  return makeGraphQLRequest(getProjectByIdQuery,{id});
}