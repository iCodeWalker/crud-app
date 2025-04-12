"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  //   "use server"; // To make server action we have to add 'use server' directive
  const title = formData.get("title"); // .get(name_attribute_value)
  const image = formData.get("image");
  const content = formData.get("content");
  console.log(title, content);

  // fetch() : Send data to server
  // #### After this we have to maanually send the request from the client side to some backend api to save the data ###

  // ################ Form action  /* Ends */ ################

  // ################ Validating user input data ################
  // To have error messages for the fields
  let errors = [];

  if (!title && title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!content && content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (!image || image.size === 0) {
    // image.size === 0 for invalid image file and if image is choosen or not
    errors.push("Image is required");
  }

  // #### returning an object of errors if error occurs ####
  // We can output any data from our form actions or server actions
  if (errors.length > 0) {
    return {
      errors: errors,
    };
  }

  // ############### Storing data in database ################
  await storePost({
    imageUrl: "",
    title: title,
    content: content,
    userId: 1,
  });

  // ### redirecting user to other page after saving data ###
  redirect("/feed");
}
