import styles from './Profile.module.css';

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.Image}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="img"
                />
            </div>
            <div className={styles.DescriptionBlock}>
                avatar + description
            </div>

        </div>
    );
}