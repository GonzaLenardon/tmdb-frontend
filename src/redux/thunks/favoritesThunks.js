export const addFavorites = async (id, user) => {
  console.log("dddddddddd", id, "user", user);
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user,
      }),
    };

    await fetch(`http://localhost:3000/favorites/${id}`, options);
  } catch (error) {
    console.log(error);
  }
};
