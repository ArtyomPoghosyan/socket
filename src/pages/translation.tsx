import { useTranslation } from "react-i18next";
export const Translation = () => {

    const { t,i18n  } = useTranslation();
    return (
        <div>
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="ru">Russian</option>
            </select>
            <h1>{t('COMMON.LOGIN')}</h1>
            <div>Sample application</div>
        </div>
    )
}