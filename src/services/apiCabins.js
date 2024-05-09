import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins Cant Be Loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.img?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.img.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.img
    : `${supabaseUrl}/storage/v1/object/public/cabin-imgs/${imageName}`;

  // // Create/Edit cabin
  let query = supabase.from("cabins");

  // A) Create

  if (!id) query = query.insert([{ ...newCabin, img: imagePath }]);

  // B) Edit

  if (id)
    query = query
      .update({ ...newCabin, img: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins Cant Be Creacted");
  }

  // Upload Photo
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-imgs")
    .upload(imageName, newCabin.img);

  // Delete The Cabin If There Was An Error In Uploading Img

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin Image Could Not Be Uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins Cant Be Deleted");
  }

  return data;
}
