"use client";

import { useUser } from "@core/hooks";
import api from "@server/api";

type Props = {
  user: Awaited<ReturnType<typeof api.get.user>>;
};

const UserForm = ({ user }: Props) => {
  const {
    query: { data },
    mutation: { mutate },
    form: {
      register,
      handleSubmit,
      formState: { errors },
    },
  } = useUser({
    query: {
      initialData: user,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        mutate({
          where: { id: user.id },
          data: formData,
        });
      })}
      className="space-y-4">
      <h1 className="font-bold">Hello: {data?.username}</h1>

      <div className="flex items-center gap-4">
        <button className="rounded bg-blue-400 px-4 py-2 font-bold text-white">
          Update
        </button>
        <input
          {...register("username")}
          placeholder={data.username}
          className="rounded border px-4 py-2"
        />
      </div>

      {errors.username && (
        <p className="text-xs text-red-400">{errors.username.message}</p>
      )}
    </form>
  );
};

export default UserForm;
