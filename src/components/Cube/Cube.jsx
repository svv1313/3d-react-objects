import { useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { animated, useSpring } from "@react-spring/three";

const Cube = (props) => {
  const [isBig, setIsBig] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { size, x } = useSpring({ size: isBig ? [2, 2, 2] : [1, 1, 1], x: isBig ? 2 : 0 });
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

  const color = isHovered ? "green" : "blue";

  return (
    <animated.mesh
      {...props}
      scale={size}
      ref={ref}
      position-x={x}
      onClick={onMeshClick}
      onPointerOver={onMeshHover(true)}
      onPointerOut={onMeshHover(false)}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </animated.mesh>
  );
};

export default Cube;
