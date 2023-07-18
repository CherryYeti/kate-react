interface ImagesProps {
  images: Array<string>;
}
const Images:React.FC<ImagesProps> = ({ images }: ImagesProps) => {
  const splitIndex = Math.ceil(images.length / 2);
  const firstHalf = images.slice(0, splitIndex);
  const secondHalf = images.slice(splitIndex);
  return (
    <div className="flex flex-wrap justify-center mb-8">
      <div className="w-full md:w-1/2 fleWx flex-wrap">
        {firstHalf.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="f"
            className="w-full md:w-auto"
          ></img>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex flex-wrap">
        {secondHalf.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={item}
            className="w-full md:w-auto"
          />
        ))}
      </div>
    </div>
  );
};
export default Images;
