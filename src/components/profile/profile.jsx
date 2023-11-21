import styles from "./profile.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser, updateToken } from "../../services/actions/auth";
import { useEffect } from "react";

export const Profile = () => {
  const dispatch = useDispatch();
  const { loading, refreshToken, user, accessToken, error } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({ name: user.name, email: user.email, password: "" });

  const handleUpdateUser = () => {
    dispatch(updateUser({ user: value, accessToken }));
  };

  const handleCancel = () => {
    setValue({ name: user.name, email: user.email, password: "" });
  };

  useEffect(() => {
    if (error) dispatch(updateToken(refreshToken));
    else dispatch(getUser(accessToken));
  }, [accessToken, dispatch, refreshToken, error]);

  return (
    <form className={styles.profile} onSubmit={(e) => e.preventDefault()}>
      <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.name} name={"name"} placeholder="Имя" isIcon={true} error={false} />
      <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} placeholder="Логин" isIcon={true} />
      <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} icon="EditIcon" />
      <Button htmlType="button" type="primary" size="medium" onClick={handleUpdateUser} disabled={loading ? true : false}>
        Сохранить
      </Button>
      <Button htmlType="button" type="primary" size="medium" onClick={handleCancel} disabled={loading ? true : false}>
        Отмена
      </Button>
    </form>
  );
};
