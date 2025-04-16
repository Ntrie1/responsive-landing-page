import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
    return (
        <div>
            <div>{children}</div>
            <h2>{title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>
    )
};