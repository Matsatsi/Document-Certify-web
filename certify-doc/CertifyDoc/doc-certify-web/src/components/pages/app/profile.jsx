import { Widget } from "../../widgets";
import { ProfileForm } from "../../forms";

export const ProfilePage = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full px-10">
      <Widget>
        <ProfileForm />
      </Widget>
    </section>
  );
};
