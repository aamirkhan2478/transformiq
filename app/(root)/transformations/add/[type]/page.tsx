import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationPage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  console.log(userId);

  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          creditBalance={user.creditBalance}
          type={transformation.type as TransformationTypeKey}
        />
      </section>
    </>
  );
};

export default AddTransformationPage;
