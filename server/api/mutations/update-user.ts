"use server";

import db from "@server/db";

type Payload = Parameters<Awaited<typeof db.user.update>>[0];

const updateUser = async (paylaod: Payload) => {
  await db.user.update(paylaod);
};

export default updateUser;
