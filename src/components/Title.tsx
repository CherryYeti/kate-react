interface Props {
  title: string;
}

const Title:React.FC<Props> = ({ title }: Props) => {
  return <h1 className="mt-6 text-3xl text-white underline font-bold">{title}</h1>;
};
export default Title;
