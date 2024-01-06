
const Cube = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Cube;
