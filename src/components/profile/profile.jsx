import styles from "./profile.module.scss";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useFormData } from "../../hooks/useFormData";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser, updateToken } from "../../services/actions/auth";
import { useEffect, useState } from "react";
import { useEnterKeySubmit } from "../../hooks/useEnterKeySubmit";

export const Profile = () => {
  const dispatch = useDispatch();
  const { loading, refreshToken, user, accessToken, error } = useSelector((store) => store.auth);
  const { value, setValue, handleChange } = useFormData({ name: user.name, email: user.email, password: "" });
  const [showButton, setShowButton] = useState(false);

  const handleUpdateUserSubmit = () => dispatch(updateUser({ user: value, accessToken }));
  const handleCancel = () => setValue({ name: user.name, email: user.email, password: "" });
  const handleKeyDown = useEnterKeySubmit(handleUpdateUserSubmit);

  useEffect(() => {
    if (user.email !== value.email || user.name !== value.name) setShowButton(true);
    else setShowButton(false);
  }, [showButton, value, user]);

  useEffect(() => {
    if (error) dispatch(updateToken(refreshToken));
    else dispatch(getUser(accessToken));
  }, [accessToken, dispatch, refreshToken, error]);

  return (
    <form className={styles.profile} onSubmit={(e) => e.preventDefault()}>
      <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.name} name={"name"} placeholder="Имя" isIcon={true} error={false} onKeyDown={handleKeyDown} />
      <EmailInput onChange={(e) => handleChange(e, setValue)} value={value.email} name={"email"} placeholder="Логин" isIcon={true} onKeyDown={handleKeyDown} />
      <PasswordInput onChange={(e) => handleChange(e, setValue)} value={value.password} name={"password"} icon="EditIcon" onKeyDown={handleKeyDown} />
      {showButton && (
        <>
          <Button htmlType="button" type="primary" size="medium" onClick={handleUpdateUserSubmit} disabled={loading ? true : false}>
            Сохранить
          </Button>
          <Button htmlType="button" type="primary" size="medium" onClick={handleCancel} disabled={loading ? true : false}>
            Отмена
          </Button>
        </>
      )}
    </form>
  );
};
