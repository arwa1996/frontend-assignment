import { ComponentPropsWithoutRef, FunctionComponent } from "react";


interface ImageProps extends ComponentPropsWithoutRef<"img"> {
    name: string,
    alt: string,
}

const MainImage: FunctionComponent<ImageProps> = (props) => {
    const { name, alt, ...rest } = props;
    if (!name) {
        return null;
    }
    return <img src={`/assets/images/${name}`} loading="lazy" decoding="async" alt={alt ?? 'image'} {...rest} />
};

export default MainImage;
