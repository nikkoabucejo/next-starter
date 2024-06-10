"use server";

import auth from "@server/auth";
import db from "@server/db";

const getUser = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("No user found");
  }

  const user = await db.user.findUniqueOrThrow({
    where: { email: "me@nikkoabucejo.com" },
  });

  return user;
};

getUser.key = "getUser";

export default getUser;
