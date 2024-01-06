import { useState, useRef } from "react";
import { useFrame } from "react-three-fiber";

const Cube = (props) => {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const onMeshClick = () => {
    setIsBig(!isBig);
  };

  const onMeshHover = (value) => {
    return () => {
      setIsHovered(value);
    };
  };

  const size = isBig ? 2 : 1;
  const color = isHovered ? "green" : "blue";

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={onMeshClick}
      onPointerOver={onMeshHover(true)}
      onPointerOut={onMeshHover(false)}
    >
      <boxGeometry attach="geometry" args={[size, size, size]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Cube;
