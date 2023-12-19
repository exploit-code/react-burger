import styles from "./profile.module.scss";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "../../services/hooks";
import { getUserThunk, updateUserThunk, refreshTokenThunk } from "../../services/actions/auth";
import { useEffect, useState } from "react";
import { Loader } from "../loader/loader";

export const Profile = () => {
  const dispatch = useDispatch();
  const { loading, refreshToken, user, accessToken, error } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({
    name: user.name,
    email: user.email,
    password: "",
  });
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const handleUpdateUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      updateUserThunk({
        user: { email: value.email, name: value.name, password: value.password },
        accessToken: accessToken,
      })
    );

    value.password = "";
  };
  const handleCancel = () => setValue({ name: user.name, email: user.email, password: "" });

  useEffect(() => {
    if (user.email !== value.email || user.name !== value.name || value.password !== "")
      setShowButtons(true);
    else setShowButtons(false);
  }, [showButtons, value, user]);

  useEffect(() => {
    if (error) dispatch(refreshTokenThunk({ token: refreshToken }));
    else dispatch(getUserThunk({ token: accessToken }));
  }, [accessToken, dispatch, refreshToken, error]);

  return loading || error ? (
    <Loader text={loading ? "loading" : "error"} />
  ) : (
    <form className={styles.profile} onSubmit={handleUpdateUserSubmit}>
      <Input
        type={"text"}
        onChange={(e) => handleChange(e)}
        value={value.name}
        name={"name"}
        placeholder="Имя"
        error={false}
        icon={"EditIcon"}
      />
      <EmailInput
        onChange={(e) => handleChange(e)}
        value={value.email}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
      />
      <PasswordInput
        onChange={(e) => handleChange(e)}
        value={value.password}
        name={"password"}
        icon="EditIcon"
      />
      {showButtons && (
        <>
          <Button htmlType="submit" type="primary" size="medium" disabled={loading ? true : false}>
            Сохранить
          </Button>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleCancel}
            disabled={loading ? true : false}
          >
            Отмена
          </Button>
        </>
      )}
    </form>
  );
};
