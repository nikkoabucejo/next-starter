import { z } from "zod";
import updateUser from "./mutations/update-user";
import getUser from "./queries/get-user";

const api = {
  get: {
    user: getUser,
  },
  update: {
    user: updateUser,
  },
};

export default api;
