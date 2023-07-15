interface Props {
  link: string;
  alias: string;
}
const Link = ({ link , alias}: Props) => {
    return(
    <a className="no-underline text-[#62cdfe] inline-block" href={link} target="_blank" rel="noreferrer">{alias}</a>
  )
}
export default Link;