import { UserForm } from "@core/components/forms";
import api from "@server/api";

const Hello: Page = async () => {
  const user = await api.get.user();

  return (
    <div className="p-4">
      <UserForm user={user} />
    </div>
  );
};

export default Hello;
