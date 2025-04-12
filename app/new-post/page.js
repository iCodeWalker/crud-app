import { storePost } from "@/lib/posts";

export default function NewPostPage() {
  // ################ Form action ################
  async function createPost(formData) {
    "use server"; // To make server action we have to add 'use server' directive
    const title = formData.get("title"); // .get(name_attribute_value)
    const image = formData.get("image");
    const content = formData.get("content");
    console.log(title, content);

    // fetch() : Send data to server
    // #### After this we have to maanually send the request from the client side to some backend api to save the data ###

    // ################ Form action  /* Ends */ ################

    // ############### Storing data in database ################
    storePost({
      imageUrl: "",
      title: title,
      content: content,
      userId: 1,
    });
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  );
}
