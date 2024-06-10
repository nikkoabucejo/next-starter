import clients from "@core/clients";
import api from "@server/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, { message: "Required" }),
});

type Payload = {
  query: {
    initialData: Awaited<ReturnType<typeof api.get.user>>;
  };
};

const useUser = ({ query: { initialData } }: Payload) => {
  const query = useQuery({
    queryKey: [api.get.user.key],
    queryFn: api.get.user,
    initialData,
  });

  const mutation = useMutation({
    mutationFn: api.update.user,
    onMutate: async ({ data }) => {
      clients.query.setQueryData([api.get.user.key], (old: User) => ({
        ...old,
        ...data,
      }));
    },
    onSuccess: () => {
      clients.query.invalidateQueries({ queryKey: [api.get.user.key] });
    },
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return { query, mutation, form };
};

export default useUser;
