import { useContext } from "react";
import GlobalContext from "components/GlobalContext";
import context from "./context.json";
import { translation } from "library/Translation/translation";
import Link from "next/link";
import { AuthLink, Avatar, Wrapper } from "./user.styled";
import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function User() {
  const { locale } = useContext(GlobalContext);
  const t = translation(locale);
  const session = useSession();
  const userImage = session.data?.user?.image;

  return (
    <Wrapper>
      {!session.data && (
        <Fragment>
          <FontAwesomeIcon icon={faRightToBracket} />
          <Link href="/api/auth/signin">
            <AuthLink
              onClick={(event) => {
                event.preventDefault();
                signIn();
              }}
            >
              {t(context.login)}
            </AuthLink>
          </Link>{" "}
          /{" "}
          <Link href="/register">
            <AuthLink>{t(context.register)}</AuthLink>
          </Link>
        </Fragment>
      )}
      {session.data && (
        <Fragment>
          {userImage ? (
            <Avatar src={userImage} width="32" height="32" />
          ) : (
            <FontAwesomeIcon icon={faRightToBracket} />
          )}
          <Link href="/api/auth/signout">
            <AuthLink
              onClick={(event) => {
                event.preventDefault();
                signOut();
              }}
            >
              {t(context.logout)}
            </AuthLink>
          </Link>
        </Fragment>
      )}
    </Wrapper>
  );
}
