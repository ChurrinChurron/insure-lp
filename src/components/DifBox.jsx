
const DifBox = ({img, title,  desc}) => {
  return (
    <div className="flex flex-col justify-center items-center my-8 max-w-[40em] lg:justify-start lg:items-start lg:my-20">
      <img src={img} className="w-16" alt={title} />
      <h3 className="font-dm text-2xl my-6">{title}</h3>
      <p className="font-karla text-center text-gray-500 lg:text-left">{desc}</p>
    </div>
  )
}

export default DifBox