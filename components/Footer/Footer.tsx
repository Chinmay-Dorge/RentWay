import Link from "next/link";
import { useTranslations } from "next-intl";

import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={`app-max-width app-x-padding ${styles.footerContents}`}>
          <div>
            <h3 className={styles.footerHead}>{"RentWay"}</h3>
            <div className={styles.column}>
              <a href="example">{"About Us"}</a>
              <a href="example">{"Contact Us"}</a>
              <a href="example">{"Location"}</a>
              <a href="example">{"Riviews"}</a>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>{"Help"}</h3>
            <div className={styles.column}>
              <a href="example">{"Order Tracking"}</a>
              <a href="example">{"FAQs"}</a>
              <a href="example">{"Privacy Policy"}</a>
              <a href="example">{"Terms & Conditions"}</a>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>{"Store"}</h3>
            <div className={styles.column}>
              <Link href={`/product-category/women`}>
                <a>{"Products"}</a>
              </Link>
              <Link href={`/product-category/men`}>
                <a>{"Exclusive"}</a>
              </Link>
              <Link href={`/product-category/bags`}>
                <a>{"Sale"}</a>
              </Link>
            </div>
          </div>
          <div>
            <h3 className={styles.footerHead}>{"Keep In Touch"}</h3>
            <div className={styles.column}>
              <span>
                {"Address"} 
              </span>
              <span>{"Phone Number"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className="app-max-width app-x-padding w-full flex justify-between">
          <span className="">@2023 RentWay. {"All Rights Reverved"}</span>
          <span className="flex items-center">
            <span className="hidden sm:block">
              {"Follow Us On Social Media"}:
            </span>{" "}
            <a
              href="www.facebook.com"
              aria-label="Facebook Page for Rent Way"
            >
              <FacebookLogo />
            </a>
            <a
              href="www.ig.com"
              aria-label="Instagram Account for Rent Way"
            >
              <InstagramLogo />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
