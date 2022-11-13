import context from "./context.json";
import GlobalContext from "components/GlobalContext";
import { useContext } from "react";
import { translation } from "library/Translation/translation";
import PageTitle from "components/PageHeading/PageTitle";
import { GetServerSidePropsContext } from "next";
import { Button, FormWrapper, Wrapper } from "./register.styled";
import { Formik } from "formik";
import Input from "components/FormControls/Input/Formik";
import { loginRequirements } from "./validationSchemas";
import { useRouter } from "next/router";
import { getCommonServerProps } from "../../utils/serverProps";

export default function Register() {
  const router = useRouter();
  const { locale } = useContext(GlobalContext);
  const t = translation(locale);

  return (
    <Wrapper>
      <PageTitle pageTitle={t(context.pageTitle)} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginRequirements}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          router.push("/api/auth/signin");
        }}
      >
        {() => (
          <FormWrapper>
            <Input name="email" label={t(context.email)} />
            <Input
              name="password"
              label={t(context.password)}
              type="password"
            />
            <Button type="submit">Submit</Button>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { session } = await getCommonServerProps(context);
  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  // const props = await getCommonProps(context);

  return {
    props: { session },
  };
}
