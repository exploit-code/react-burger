import styles from "./feed-details.module.scss";
import { FeedDetails } from "../../components/feed-details/feed-details";
import { NotFoundPage } from "../not-found/not-found";
// import { useSelector } from "../../services/hooks";
// import { useParams } from "react-router-dom";
// import { useMemo } from "react";
// import { IIngredient } from "../../utils/common-types";

export const FeedDetailsPage = () => {
  // const { id } = useParams<string>();
  // const { data } = useSelector((store) => store.ingredients);
  // const viewFeed: IIngredient | undefined = useMemo(
  //   () => data.find((el: IIngredient) => el._id === id),
  //   [data, id]
  // );

  const viewFeed = true;

  return viewFeed ? (
    <section className={styles.feed_details_page}>
      <h2 className="text text_type_main-large">#034533</h2>
      <FeedDetails />
    </section>
  ) : (
    <NotFoundPage />
  );
};
