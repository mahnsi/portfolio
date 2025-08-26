function IconButton({ image, label, onClick }: {image: string; label: string; onClick: ()=>void}) {
    return (
      <div className="group flex flex-col items-center relative peer">
        <button
          className="w-16 h-16 bg-center bg-no-repeat bg-contain transition-transform duration-300 ease-out hover:scale-150 hover:z-10"
          style={{ backgroundImage: `url(${image})` }}
          onClick={onClick}
          aria-label={label}
        ></button>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100">{label}</span>
      </div>
    );
  }
  
export default IconButton;
  