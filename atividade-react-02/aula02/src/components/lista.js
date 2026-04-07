function ListaTecs() {
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
  return (
    <ul>
      {tecnologias.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  );
}
export default ListaTecs;
