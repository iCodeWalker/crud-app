// "use client";

// import { useActionState } from "react";
import PostForm from "@/components/post-form";
// import { storePost } from "@/lib/posts";
// import { redirect } from "next/navigation";
import { createPost } from "@/actions/posts";

export default function NewPostPage() {
  // ################ Form action ################
  // async function createPost(formData) {
  // ############ when using useFromState we have to modify our function as when we pass server action to the useFormState the first arg it recieves becomes the "prevState" and 2ns arg becomes the formData
  // async function createPost(prevState, formData) {
  //   "use server"; // To make server action we have to add 'use server' directive
  //   const title = formData.get("title"); // .get(name_attribute_value)
  //   const image = formData.get("image");
  //   const content = formData.get("content");
  //   console.log(title, content);

  //   // fetch() : Send data to server
  //   // #### After this we have to maanually send the request from the client side to some backend api to save the data ###

  //   // ################ Form action  /* Ends */ ################

  //   // ################ Validating user input data ################
  //   // To have error messages for the fields
  //   let errors = [];

  //   if (!title && title.trim().length === 0) {
  //     errors.push("Title is required");
  //   }

  //   if (!content && content.trim().length === 0) {
  //     errors.push("Content is required");
  //   }

  //   if (!image || image.size === 0) {
  //     // image.size === 0 for invalid image file and if image is choosen or not
  //     errors.push("Image is required");
  //   }

  //   // #### returning an object of errors if error occurs ####
  //   // We can output any data from our form actions or server actions
  //   if (errors.length > 0) {
  //     return {
  //       errors: errors,
  //     };
  //   }

  //   // ############### Storing data in database ################
  //   await storePost({
  //     imageUrl: "",
  //     title: title,
  //     content: content,
  //     userId: 1,
  //   });

  //   // ### redirecting user to other page after saving data ###
  //   redirect("/feed");
  // }

  // ########### using use ActionState hook ##############
  // const [state, formAction] = useActionState(createPost, {}); // 1st arg = function to trigger on submit, 2nd initial state
  return (
    // <>
    //   <h1>Create a new post</h1>
    //   {/* <form action={createPost}> */}
    //   <form action={formAction}>
    //     <p className="form-control">
    //       <label htmlFor="title">Title</label>
    //       <input type="text" id="title" name="title" />
    //     </p>
    //     <p className="form-control">
    //       <label htmlFor="image">Image URL</label>
    //       <input
    //         type="file"
    //         accept="image/png, image/jpeg"
    //         id="image"
    //         name="image"
    //       />
    //     </p>
    //     <p className="form-control">
    //       <label htmlFor="content">Content</label>
    //       <textarea id="content" name="content" rows="5" />
    //     </p>
    //     <p className="form-actions">
    //       <FormSubmit />
    //     </p>
    //   </form>
    // </>
    <PostForm action={createPost} />
  );
}
